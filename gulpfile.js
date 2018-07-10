let gulp = require('gulp'),
  ghPages = require('gulp-gh-pages')

gulp.task('deploy', () => gulp.src('./_gh_pages/**/*')
  .pipe(ghPages({
    remoteUrl: 'https://github.com/hexschool/bootstrap_zh.git'
  })))
