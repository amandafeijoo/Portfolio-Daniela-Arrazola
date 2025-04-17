import fs from 'fs'

const indexPath = '../frontend_build/index.html'

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) throw err

  // 🔁 Reemplazar solo rutas que empiezan con "assets/" y NO las que ya tienen "/static"
  const result = data.replace(/"\/assets\//g, '"/static/assets/')

  fs.writeFile(indexPath, result, 'utf8', err => {
    if (err) throw err
    console.log('✔ Static paths fixed in index.html')
  })
})

