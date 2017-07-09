var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	es2015 = require('babel-preset-es2015')

var scource = {
	script:{
		input:['es6-js/*.js'],
		output:'js'
	},
	styles:{
		input:['styles/*.less'],
		output:'css/'
	}
};

gulp.task('script',function(){
	return gulp.src(scource.script.input)
		   .pipe(babel({presets:[es2015]}))
		   .pipe(gulp.dest(scource.script.output))
})
gulp.task('default',['script'])

console.log('---all  start---')
