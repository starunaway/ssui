const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const {series, src, dest} = require('gulp');

function gulpCss() {
  return src('../src/styles/index.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions'],
      })
    )
    .pipe(cleanCSS())
    .pipe(rename('ssv-ui.css'))
    .pipe(dest('../dist/styles'));
}

function gulpFonts() {
  return src('../src/styles/common/iconfont/fonts/*.*').pipe(dest('../dist/styles/fonts'));
}

exports.default = series(gulpCss, gulpFonts);
