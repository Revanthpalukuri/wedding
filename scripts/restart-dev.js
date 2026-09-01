import { execSync, spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 1430;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteBin = path.resolve(__dirname, '../node_modules/vite/bin/vite.js');

function freePort(port) {
  try {
    if (process.platform === 'win32') {
      const output = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
      const lines = output.trim().split('\n');
      const pids = new Set();
      for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 5) {
          const pid = parts[parts.length - 1];
          if (pid && pid !== '0' && pid !== `${process.pid}`) {
            pids.add(pid);
          }
        }
      }
      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
          console.log(`Freed port ${port} by terminating PID ${pid}`);
        } catch {}
      }
    }
  } catch {}
}

console.log(`Checking port ${PORT}...`);
freePort(PORT);

console.log(`Starting Vite Dev Server on port ${PORT}...`);

const child = spawn(process.execPath, [viteBin, '--force', '--host'], {
  stdio: 'inherit',
  cwd: path.resolve(__dirname, '..'),
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

