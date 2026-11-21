import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Auto-sync plugin: guarantees public/images is mirrored to src/images
function syncImagesPlugin() {
  const ALBUM_DIRS = ['pre_wedding', 'our_story'];

  const syncDir = (srcDir, destDir, relPath = '') => {
    if (!fs.existsSync(srcDir)) return;
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    
    // Copy new/updated files from srcDir to destDir
    const srcFiles = fs.readdirSync(srcDir);
    for (const file of srcFiles) {
      if (file.startsWith('.')) continue;
      const sFile = path.join(srcDir, file);
      const dFile = path.join(destDir, file);
      const currentRel = relPath ? `${relPath}/${file}` : file;

      if (fs.statSync(sFile).isDirectory()) {
        syncDir(sFile, dFile, currentRel);
      } else {
        const sStat = fs.statSync(sFile);
        if (!fs.existsSync(dFile)) {
          fs.copyFileSync(sFile, dFile);
        } else {
          const dStat = fs.statSync(dFile);
          if (sStat.mtimeMs > dStat.mtimeMs && sStat.size !== dStat.size) {
            fs.copyFileSync(sFile, dFile);
          }
        }
      }
    }

    // Only mirror deletions for photo album directories (pre_wedding, our_story)
    if (ALBUM_DIRS.some(album => relPath.includes(album))) {
      const destFiles = fs.readdirSync(destDir);
      for (const dFile of destFiles) {
        if (dFile.startsWith('.')) continue;
        const correspondingSrc = path.join(srcDir, dFile);
        const dFullPath = path.join(destDir, dFile);
        if (!fs.existsSync(correspondingSrc)) {
          if (fs.statSync(dFullPath).isDirectory()) {
            fs.rmSync(dFullPath, { recursive: true, force: true });
          } else {
            fs.unlinkSync(dFullPath);
          }
        }
      }
    }
  };

  const doSync = () => {
    try {
      syncDir('public/images', 'src/images');
      syncDir('src/images', 'public/images');
    } catch (_) {}
  };

  return {
    name: 'auto-sync-images',
    buildStart() {
      doSync();
    },
    configureServer(server) {
      doSync();
      server.watcher.on('add', (filePath) => {
        if (filePath.includes('/images/')) doSync();
      });
      server.watcher.on('change', (filePath) => {
        if (filePath.includes('/images/')) doSync();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), syncImagesPlugin()],
  server: {
    port: 1430,
    strictPort: true,
    host: true,
    open: true,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})

