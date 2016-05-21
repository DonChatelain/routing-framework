const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-spawn-mocha');

gulp.task('run-lint', () => {
  gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('run-tests', () => {
  gulp.src('./tests/**/*.js', { read: false })
    .pipe(mocha());
});

gulp.task('default', ['run-tests', 'run-lint']);
