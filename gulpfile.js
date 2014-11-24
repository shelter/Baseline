/**
 * gulp configuration
 */

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    gulp.src('./scaffold2/less/**/*.less').pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    })).pipe(gulp.dest('./scaffold2/dist'));
});
