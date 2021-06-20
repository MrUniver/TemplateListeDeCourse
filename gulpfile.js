/** Importations des librairies */
const { dest, src, watch } = require("gulp")
const { gulpConfig } = require('./Config/config')
const brSync = require("browser-sync").create()
const $ = require('gulp-load-plugins')()


/**
 * Tâche permets de minifier / autoprefixer / concatener et transformer en css les .*scss
 * @returns task execution
 */
function css() {
    return src(gulpConfig.css.src + '*.scss', { sourcemaps: true })
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.concat('app.css'))
        .pipe($.csso())
        .pipe(dest(gulpConfig.css.dst, { sourcemaps: '.' }));
}

/**
 * Tâche permettant de surveiller les changements de fichiers
 */
function watcher() {
    brSync.init({
        proxy: "http://127.0.0.1:3000",
        files: ".",
        watch: true
    });
    watch(gulpConfig.css.src + '*.scss', { ignoreInitial: false }, css)
}

module.exports = {
    css,
    watch: watcher
}