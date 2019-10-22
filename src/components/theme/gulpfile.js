const {task, src, pipe, dest} = require('gulp')
const cssUglify = require('gulp-minify-css')
const autoprefixer = require('gulp-autoprefixer')
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

task('scssUglify', async function() {
  await src('./*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cssUglify())
  .pipe(dest('../../../ynetUI/theme'));
})

task('copyfont', async function() {
  await src('./font/*')
    .pipe(dest('../../../ynetUI/theme/fonts'));
})