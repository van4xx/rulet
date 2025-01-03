const https = require('https');
const fs = require('fs');
const path = require('path');

const masksDir = path.join(__dirname, '../public/models');

// Создаем директорию, если она не существует
if (!fs.existsSync(masksDir)) {
  fs.mkdirSync(masksDir, { recursive: true });
}

const masks = [
  {
    name: 'fox',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/fox_mask.glb'
  },
  {
    name: 'cat',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/cat_mask.glb'
  },
  {
    name: 'dog',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/dog_mask.glb'
  },
  {
    name: 'robot',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/robot_mask.glb'
  },
  {
    name: 'alien',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/alien_mask.glb'
  },
  {
    name: 'dragon',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/dragon_mask.glb'
  },
  {
    name: 'demon',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/demon_mask.glb'
  },
  {
    name: 'cyborg',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/cyborg_mask.glb'
  },
  {
    name: 'samurai',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/samurai_mask.glb'
  },
  {
    name: 'clown',
    url: 'https://raw.githubusercontent.com/cursor-masks/3d-masks/main/clown_mask.glb'
  }
];

const downloadMask = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(masksDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filename}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function downloadMasks() {
  try {
    console.log('Starting mask downloads...');
    for (const mask of masks) {
      await downloadMask(mask.url, `${mask.name}_mask.glb`);
    }
    console.log('All masks downloaded successfully!');
  } catch (error) {
    console.error('Error downloading masks:', error);
    process.exit(1);
  }
}

downloadMasks(); 