
 const gulp = require('gulp');
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
//var gulpCopy = require('gulp-copy');
//var cssnano = require('gulp-cssnano');
//livereload = require('gulp-livereload');
var pump = require('pump');

gulp.task('module', function() {
    return gulp.src([
        'dev/**/*.module.js',
        'dev/module.js',
        ])
      .pipe(concat('module.js'))
      .pipe(gulp.dest('./'));
  });

  gulp.task('module.min', function (cb) {
    pump([
          gulp.src('./module.js'),
          uglify(),
          gulp.dest('./public/js/')
      ],
      cb
    );
  });
gulp.task('controller', function() {
    return gulp.src([
        'dev/**/*.ctrl.js',
        ])
      .pipe(concat('./controller.js'))
      .pipe(gulp.dest('./'));
  });

  gulp.task('controller.min', function (cb) {
    pump([
          gulp.src('./controller.js'),
          uglify(),
          gulp.dest('./public/js/')
      ],
      cb
    );
  });

gulp.task('html', function () {
    gulp.src('./dev/**/*.html')
        .pipe(gulp.dest('./public/'));
});

// gulp.task('pug', function() {
//   var op ={"indent_size": 4, "html": {"end_with_newline": true, "js": {"indent_size": 2 }, "css": {"indent_size": 2 } }, "css": {"indent_size": 1 }, "js": {"preserve-newlines": true } }; 
//   return gulp.src(['dev/*.html'])
//   .pipe(html2pug(op))
//   .pipe(gulp.dest('./application/views/'));
// });

gulp.task('default', ['module','module.min','controller','controller.min','html']);