/**
 * Created by acer on 2016/1/24.
 */
var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('bundle', function () {
    return gulp.src('js/src/a.vue', 'js/src/b.vue', 'js/src/app.vue')
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest('js/dist'))
});

function getConfig(opt) {
    var config = {
        module: {
            loaders: [{test: /\.vue$/, loader: 'vue'}]
        }
    }
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt
    }
    return config
}

gulp.task('default', function () {
        gulp.start('bundle')
    }
);