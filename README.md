# Img Gulp

Usando Gulp y Sharp, este proyecto automatiza la optimización de tus imágenes en tres variantes:

- **original** (JPEG/PNG minificado)  
- **WebP**  
- **AVIF**  

De esta forma reduces el peso y mejoras la velocidad de carga en navegadores modernos.

---

## 📦 Instalación y puesta en marcha

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/TatanLion/gulp-img.git
   cd gulp-img
   ```

2. **Instala dependencias**  
   ```bash
   npm install
   ```

3. **Ajusta rutas (si es necesario)**  
   Por defecto el `gulpfile.js` apunta a:
   - **Origen:** `./src/img`
   - **Destino:** `./public/build/img`  
   Si tu proyecto usa carpetas diferentes, copia el `gulpfile.js` y adapta estas rutas.

4. **Ejecuta tareas**  
   Las tareas disponibles vienen expuestas en `package.json` como scripts:

   | Script           | Descripción                                             |
   | ---------------- | ------------------------------------------------------- |
   | `npm run img:min`   | Sólo JPEG/PNG (minificado, calidad 80)               |
   | `npm run img:webp`  | Sólo generación de `.webp`                          |
   | `npm run img:avif`  | Sólo generación de `.avif`                          |
   | `npm run img:all`   | JPEG/PNG + WebP + AVIF                              |
   | `npm run img:watch` | Ejecuta `img:all` y luego se queda vigilando cambios |

   > **Tip:** Para detener el watcher pulsa `Ctrl + C`.

---

## 🔧 Scripts de `package.json`

```jsonc
{
  "scripts": {
    "img:min":   "gulp minifyImages",
    "img:webp":  "gulp onlyWebp",
    "img:avif":  "gulp onlyAvif",
    "img:all":   "gulp images",
    "img:watch": "gulp watchImages"
  },
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-cli": "^2.3.0",
    "sharp": "^0.32.0",
    "glob": "^8.1.0"
  }
}
```

---

## 📝 Gulpfile.js

Si decides integrarlo en otro proyecto, solo tienes que copiar **todo** el `gulpfile.js` (sin modificar la lógica central) y asegurar las rutas de origen/destino. Los nombres de las tareas (`minifyImages`, `onlyWebp`, `onlyAvif`, `images`, `watchImages`) encajan con los scripts.

---

## 📋 Requisitos

- Node.js ≥ 14  
- NPM o Yarn 
- Un directorio con imágenes dentro de `src/img`

---

## 🛠️ Construido con

- [Gulp 4](https://gulpjs.com/)  
- [Sharp](https://sharp.pixelplumbing.com/)  
- [Glob](https://www.npmjs.com/package/glob)  

---

## 🤝 Contribuyendo

Lee el [CONTRIBUTING.md](https://github.com/TatanLion/gulp-img/blob/main/README.md) para guías y estilo de código.

---

## ✒️ Autor

**Jonathan Amaya** – *Ingeniero de Sistemas / Desarrollador Web*  
GitHub: [TatanLion](https://github.com/TatanLion)

---

⌨️ con ❤️ por [TatanLion](https://github.com/TatanLion) 😊  
