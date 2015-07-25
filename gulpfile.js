var gulp = require('gulp');
var connect = require('gulp-connect');
var jsonServer = require('gulp-json-srv');
var paths = {
  images: '/application/assets/images/**/*',
  resource: ['/application/assets/customs/scripts/*.js','/application/assets/customs/styles/*.css','/application/*.html']
};


gulp.task('database-connect',function() {
	jsonServer.start({
      data: 'db.json',
      port: 3123
    });
});
gulp.task('web-connect', function() {
  connect.server({
  	root:'application',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(paths.resource[2])
    .pipe(connect.reload());
});
gulp.task('styles', function () {
  gulp.src(paths.resource[1])
    .pipe(connect.reload());
});
gulp.task('scripts', function () {
  gulp.src(paths.resource[0])
    .pipe(connect.reload());
});

gulp.task('watcher',function() {
  gulp.watch(paths.resource[0],['scripts']);
  gulp.watch(paths.resource[1],['styles']);
	gulp.watch(paths.resource[2],['html']);
});

gulp.task('default', ['database-connect','web-connect','watcher']);