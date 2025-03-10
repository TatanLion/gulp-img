import path from 'path'
import fs from 'fs'
import { glob } from 'glob'
import { watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import sharp from 'sharp'

const sass = gulpSass(dartSass)

const paths = {
    scss: 'src/scss/**/*.scss'
}
export async function imagenes(done) {
    const srcDir = './src/img';
    const buildDir = './public/build/img';
    const images =  await glob('./src/img/**/*')

    images.forEach(file => {
        const relativePath = path.relative(srcDir, path.dirname(file));
        const outputSubDir = path.join(buildDir, relativePath);
        procesarImagenes(file, outputSubDir);
    });
    done();
}

function procesarImagenes(file, outputSubDir) {
    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
    }
    
    const baseName = path.basename(file, path.extname(file));
    const extName = path.extname(file).toLowerCase();

    if (extName === '.svg') {
        // Mover archivo SVG sin procesar
        const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
        fs.copyFileSync(file, outputFile);
    } else if (extName === '.png') {
        // Para PNG, asegurarse de preservar transparencia
        const outputFile = path.join(outputSubDir, `${baseName}.png`);
        const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
        const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);
        const options = { quality: 80 };

        sharp(file)
            .png(options) // Asegura mantener el canal alfa para PNG
            .toFile(outputFile);

        sharp(file)
            .webp({ ...options, lossless: true }) // Preserva transparencia en WebP
            .toFile(outputFileWebp);

        sharp(file)
            .avif({ lossless: true }) // Mantiene transparencia en AVIF
            .toFile(outputFileAvif);
    } else if (extName === '.jpg' || extName === '.jpeg') {
        const outputFile = path.join(outputSubDir, `${baseName}.jpg`);
        const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
        const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);
        const options = { quality: 80 };

        sharp(file).jpeg(options).toFile(outputFile);
        sharp(file).webp(options).toFile(outputFileWebp);
        sharp(file).avif().toFile(outputFileAvif);
    }
}


export function dev() {
    watch( paths.scss, css );
    watch( paths.js, js );
    watch('src/img/**/*.{png,jpg}', imagenes)
}

// export default series( js, css, imagenes, dev );
export default series( js, css, imagenes );
