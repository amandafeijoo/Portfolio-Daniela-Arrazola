# #!/bin/bash

# echo "🛠️  Generando build del frontend..."
# cd frontend || exit
# npm run build
# cd ..

# echo "📦 Copiando archivos a staticfiles..."
# cp -r frontend_build/assets staticfiles/
# cp -r frontend_build/images staticfiles/
# cp frontend_build/index.html staticfiles/

# echo "✅ Listo. Ahora puedes hacer git add, commit y push:"
# echo "git add ."
# echo "git commit -m 'Build actualizado'"
# echo "git push"


# #!/bin/bash

# echo "🧼 Borrando archivos antiguos..."
# rm -rf staticfiles/*

# echo "🛠️  Generando build del frontend..."
# cd frontend || exit
# npm run build
# cd ..

# echo "📦 Copiando archivos del build..."
# cp -r frontend_build/assets staticfiles/
# cp -r frontend_build/images staticfiles/
# cp frontend_build/index.html staticfiles/

# echo "✅ Build actualizado y copiado en staticfiles"
# echo "Recuerda hacer:"
# echo "git add . && git commit -m '⚙️ Updated frontend build and forced static refresh' && git push"


#!/bin/bash

echo "🧼 Borrando archivos antiguos..."
rm -rf staticfiles/*

echo "🛠️  Generando build del frontend..."
cd frontend || exit
npm run build
cd ..

echo "📦 Copiando archivos del build..."
cp -r frontend_build/assets staticfiles/
cp -r frontend_build/images staticfiles/
cp frontend_build/index.html staticfiles/

echo "📂 Copiando imágenes y videos públicos..."
cp -r frontend/public/images staticfiles/
cp -r frontend/public/videos staticfiles/

echo "✅ Build actualizado y copiado en staticfiles"
echo "Recuerda hacer:"
echo "git add . && git commit -m '⚙️ Updated frontend build and forced static refresh' && git push"
