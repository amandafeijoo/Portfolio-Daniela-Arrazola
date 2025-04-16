// fix-static-paths.js
import fs from 'fs';
import path from 'path';

const folderPath = './frontend/dist/assets';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('❌ Error al leer la carpeta:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.js')) {
      const filePath = path.join(folderPath, file);

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        const updated = data.replace(/\/assets\//g, '/static/assets/');

        fs.writeFile(filePath, updated, 'utf8', err => {
          if (err) throw err;
          console.log(`✅ Corregido: ${file}`);
        });
      });
    }
  });
});
