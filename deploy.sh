#!/bin/bash

echo "🛠️  Generando build del frontend..."
cd frontend || exit
npm run build
cd ..

echo "📦 Copiando archivos a staticfiles..."
cp -r frontend_build/assets staticfiles/
cp -r frontend_build/images staticfiles/
cp frontend_build/index.html staticfiles/

echo "✅ Listo. Ahora puedes hacer git add, commit y push:"
echo "git add ."
echo "git commit -m 'Build actualizado'"
echo "git push"
