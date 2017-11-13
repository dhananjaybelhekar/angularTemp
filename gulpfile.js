
 const gulp = require('gulp');
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
 var pump = require('pump');
//var gulpCopy = require('gulp-copy');
var cssnano = require('gulp-cssnano');
//livereload = require('gulp-livereload');






'vendor','vendor.min', 'vcss','vcss.min', 'module','controller', 'html'



gulp.task('vendor', function() {
    return gulp.src([
'bower_components/angular/angular.js',
'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
'bower_components/angular-cookies/angular-cookies.min.js',
'bower_components/angular-ui-router/release/angular-ui-router.js',
'bower_components/angular-resource/angular-resource.js',
'bower_components/angular-ckeditor/angular-ckeditor.js'
        ])
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./public/'));
  });


  gulp.task('vendor.min', function (cb) {
    pump([
          gulp.src('./public/vendor.js'),
          uglify(),
          gulp.dest('./public/js/')
      ],
      cb
    );
  });

gulp.task('vcss', function() {
    return gulp.src([
  'style.css',
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/font-awesome/css/font-awesome.css',
  'bower_components/rdash-ui/dist/css/rdash.css'
  ])
    .pipe(concat('vendor.css'))
      .pipe(gulp.dest('./public/'));
  });
gulp.task('vcss.min', function() {
    return gulp.src('./public/vendor.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('module', function() {
    return gulp.src([
        'dev/**/*.module.js',
        'dev/module.js'
        ])
      .pipe(concat('module.js'))
      .pipe(gulp.dest('./public/js/'));
  });


gulp.task('controller', function() {
    return gulp.src([
        'dev/**/*.ctrl.js',
        ])
      .pipe(concat('./controller.js'))
      .pipe(gulp.dest('./public/js/'));
  });
  // gulp.task('module.min', function (cb) {
  //   pump([
  //         gulp.src('./module.js'),
  //         uglify(),
  //         gulp.dest('./public/js/')
  //     ],
  //     cb
  //   );
  // });
  // gulp.task('controller.min', function (cb) {
  //   pump([
  //         gulp.src('./controller.js'),
  //         uglify(),
  //         gulp.dest('./public/js/')
  //     ],
  //     cb
  //   );
  // });

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

//gulp.task('default', ['module','module.min','controller','controller.min','html']);




gulp.task('jsinit', ['vendor','vendor.min', 'vcss','vcss.min', 'module','controller', 'html']);
gulp.task('default', ['module','controller','html','vendor','vcss','vendor.min','vcss.min','jsinit']);