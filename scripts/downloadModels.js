const https = require('https');
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../public/models');

// Создаем директорию, если она не существует
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

const models = [
  {
    url: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master/tiny_face_detector_model-weights_manifest.json',
    filename: 'tiny_face_detector_model-weights_manifest.json'
  },
  {
    url: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master/tiny_face_detector_model.weights',
    filename: 'tiny_face_detector_model.weights'
  },
  {
    url: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master/face_landmark_68_model-weights_manifest.json',
    filename: 'face_landmark_68_model-weights_manifest.json'
  },
  {
    url: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master/face_landmark_68_model.weights',
    filename: 'face_landmark_68_model.weights'
  },
  {
    url: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master/face_recognition_model-weights_manifest.json',
    filename: 'face_recognition_model-weights_manifest.json'
  },
  {
    url: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master/face_recognition_model.weights',
    filename: 'face_recognition_model.weights'
  }
];

const downloadFile = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(modelsDir, filename);
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

async function downloadModels() {
  try {
    console.log('Starting downloads...');
    for (const model of models) {
      await downloadFile(model.url, model.filename);
    }
    console.log('All models downloaded successfully!');
  } catch (error) {
    console.error('Error downloading models:', error);
    process.exit(1);
  }
}

downloadModels(); 