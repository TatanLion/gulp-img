import path from "path";
import fs from "fs";
import { glob } from "glob";
import { watch, series } from "gulp";
import sharp from "sharp";

/**
 * Creates a Gulp task to process images into the specified formats.
 * @param {string[]} formats - Formats to generate: "original", "webp", "avif"
 */
function createImagesTask(formats) {
  return async function processImages(done) {
    const srcDir = "./src/img";
    const buildDir = "./public/build/img";
    const images = await glob(`${srcDir}/**/*.{png,jpg,jpeg,svg}`);

    for (const file of images) {
      const relativePath = path.relative(srcDir, path.dirname(file));
      const outputSubDir = path.join(buildDir, relativePath);

      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }

      const baseName = path.basename(file, path.extname(file));
      const ext = path.extname(file).toLowerCase();

      // SVG: Keep original
      if (ext === ".svg") {
        fs.copyFileSync(file, path.join(outputSubDir, `${baseName}${ext}`));
        continue;
      }

      // Other formats: generate as specified in formats array
      const options = { quality: 80 };
      formats.forEach((fmt) => {
        let pipeline;
        let outputFile;

        if (fmt === "original") {
          pipeline = ext === ".png"
            ? sharp(file).png(options)
            : sharp(file).jpeg(options);
          outputFile = path.join(outputSubDir, `${baseName}${ext}`);
        } else {
          pipeline = sharp(file)[fmt](options);
          outputFile = path.join(outputSubDir, `${baseName}.${fmt}`);
        }

        pipeline.toFile(outputFile);
      });
    }

    done();
  };
}

// Tasks
export const minifyImages = createImagesTask(["original"]);
export const onlyWebp    = createImagesTask(["webp"]);
export const onlyAvif    = createImagesTask(["avif"]);
export const images      = createImagesTask(["original", "webp", "avif"]);

/**
 * First run `images`, then start the watcher and keep it active.
 */
export const watchImages = series(
  images,
  function _watch() {
    const watcher = watch("src/img/**/*.{png,jpg,svg}", images);
    watcher.on("change", (file) => {
      console.log(`↻ ${file} modified - regenerating...`);
    });
    return watcher;
  }
);

// Default Gulp task: process all formats
export default series(images);