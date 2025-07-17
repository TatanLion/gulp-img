# Img Gulp

Using Gulp and Sharp, this project automates the optimization of your images into three variants:

- **original** (minified JPEG/PNG)  
- **WebP**  
- **AVIF**  

This reduces file sizes and improves loading speed in modern browsers.

---

## 📦 Installation and Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/TatanLion/gulp-img.git
   cd gulp-img
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Adjust paths (if needed)**  
   By default, `gulpfile.js` points to:  
   - **Source:** `./src/img`  
   - **Destination:** `./public/build/img`  
   If your project uses different folders, copy the `gulpfile.js` to your project and update these paths.

4. **Run tasks**  
   The available tasks are exposed in `package.json` as scripts:

   | Script           | Description                                                 |
   | ---------------- | ----------------------------------------------------------- |
   | `npm run img:min`   | Only minifies JPEG/PNG (quality 80)                        |
   | `npm run img:webp`  | Only generates `.webp` versions                            |
   | `npm run img:avif`  | Only generates `.avif` versions                            |
   | `npm run img:all`   | Generates JPEG/PNG, WebP, and AVIF                        |
   | `npm run img:watch` | Runs `img:all` and then watches for changes continuously   |

   > **Tip:** To stop the watcher, press `Ctrl + C`.

---

## 🔧 `package.json` Scripts

Run the following command to install the necessary dependencies for the project:

```
npm install --save-dev gulp@4.0.2 gulp-cli@2.3.0 sharp@0.32.0 glob@8.1.0
```
Or directly add the dependencies to your package.json file as shown in the example below:

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

If you decide to integrate this into another project, simply copy **the entire** `gulpfile.js` (without modifying the core logic) and ensure the source/destination paths are correct. The task names (`minifyImages`, `onlyWebp`, `onlyAvif`, `images`, `watchImages`) match the scripts above.

---

## 📋 Requirements

- Node.js ≥ 14  
- NPM or Yarn  
- A directory with images inside `src/img`

---

## 🛠️ Built With

- [Gulp 4](https://gulpjs.com/)  
- [Sharp](https://sharp.pixelplumbing.com/)  
- [Glob](https://www.npmjs.com/package/glob)  

---

## 🤝 Contributing

Please read the [CONTRIBUTING.md](https://github.com/TatanLion/gulp-img/blob/main/CONTRIBUTING.md) for guidelines on code standards and pull request procedures.

---

## ✒️ Author

**Jonathan Amaya** – *Systems Engineer / Web Developer*  
GitHub: [TatanLion](https://github.com/TatanLion)

---

⌨️ made with ❤️ by [TatanLion](https://github.com/TatanLion) 😊  
