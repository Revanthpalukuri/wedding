import { execSync } from 'child_process';
import fs from 'fs';

// Read token securely from .env.local (which is gitignored)
let token = process.env.GITHUB_TOKEN || '';

if (!token && fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf-8');
  const match = envContent.match(/GITHUB_TOKEN=(.*)/);
  if (match) {
    token = match[1].trim();
  }
}

if (!token) {
  console.error('❌ GITHUB_TOKEN not found in .env.local or environment.');
  process.exit(1);
}

async function syncAndMergeToMain() {
  console.log('🚀 Syncing and saving latest changes to main branch...');

  try {
    // 1. Stage and commit local changes
    try {
      execSync('git add -A', { stdio: 'inherit' });
      execSync('git commit -m "feat: sync latest updates"', { stdio: 'inherit' });
    } catch (e) {
      // Nothing to commit
    }

    // 2. Push branch to origin
    console.log('📡 Pushing branch to origin vivek...');
    execSync('git push origin vivek', { stdio: 'inherit' });

    // 3. Create Pull Request or Merge to main via GitHub API
    console.log('🔄 Creating Pull Request to merge into upstream main...');
    const prRes = await fetch('https://api.github.com/repos/Revanthpalukuri/wedding/pulls', {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': 'Antigravity-Agent',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Sync latest updates to main',
        head: 'vivekpalukuri:vivek',
        base: 'main',
        body: 'Automated PR merge with latest wedding website updates.'
      })
    });

    const prData = await prRes.json();
    let prNumber;

    if (prRes.status === 201) {
      prNumber = prData.number;
      console.log(`✅ Created PR #${prNumber}: ${prData.html_url}`);
    } else if (prRes.status === 422 && prData.errors && prData.errors[0]?.message?.includes('A pull request already exists')) {
      // Fetch the existing open PR
      const listRes = await fetch('https://api.github.com/repos/Revanthpalukuri/wedding/pulls?state=open&head=vivekpalukuri:vivek', {
        headers: {
          'Authorization': `token ${token}`,
          'User-Agent': 'Antigravity-Agent',
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      const listData = await listRes.json();
      if (listData.length > 0) {
        prNumber = listData[0].number;
        console.log(`ℹ️ Found existing open PR #${prNumber}: ${listData[0].html_url}`);
      }
    } else {
      console.error('⚠️ PR creation error:', prData.message || prData);
    }

    // 4. Automatically merge the Pull Request
    if (prNumber) {
      console.log(`🔀 Merging PR #${prNumber} into main...`);
      const mergeRes = await fetch(`https://api.github.com/repos/Revanthpalukuri/wedding/pulls/${prNumber}/merge`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'User-Agent': 'Antigravity-Agent',
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          commit_title: `Merge PR #${prNumber} into main`,
          merge_method: 'merge'
        })
      });
      const mergeData = await mergeRes.json();
      if (mergeRes.status === 200 && mergeData.merged) {
        console.log(`🎉 Successfully merged PR #${prNumber} into main!`);
        
        // Sync local branch with updated upstream/main
        execSync('git fetch upstream', { stdio: 'inherit' });
        execSync('git merge upstream/main -m "Merge upstream/main into vivek"', { stdio: 'inherit' });
        execSync('git push origin vivek', { stdio: 'inherit' });
        console.log('✅ Local and remote branches are fully synced with main!');
      } else {
        console.log('Merge response:', mergeData.message || mergeData);
      }
    }
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
  }
}

syncAndMergeToMain();
