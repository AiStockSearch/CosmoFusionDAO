# Makefile для управления запуском приложений

.PHONY: web mobile web-install mobile-install deploy-web logos-png

web:
	cd packages/web && npm start

mobile:
	cd packages/mobile && npm run ios

web-install:
	cd packages/web && npm install

mobile-install:
	cd packages/mobile && npm install

deploy-web:
	cd packages/web && npm run deploy

# Создание PNG версий логотипов
logos-png:
	magick assets/logos/logo-original.svg -resize 512x512 assets/logos/logo-512.png
	magick assets/logos/logo-original.svg -resize 256x256 assets/logos/logo-256.png
	magick assets/logos/logo-original.svg -resize 128x128 assets/logos/logo-128.png
	magick assets/logos/logo-original.svg -resize 64x64 assets/logos/logo-64.png
	magick assets/logos/logo-original.svg -resize 32x32 assets/logos/logo-32.png
	magick assets/logos/logo-original.svg -resize 16x16 assets/logos/logo-16.png 