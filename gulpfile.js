var gulp = require('gulp');
var connect = require('gulp-connect');
var jsonServer = require('gulp-json-srv');

gulp.task('database-connect',function() {
	jsonServer.start({
      data: 'db.json',
      port: 3123
    });
});
gulp.task('web-connect', function() {
  connect.server({
  	root:'application',
    port: 8888
  });
});

gulp.task('default', ['database-connect','web-connect']);