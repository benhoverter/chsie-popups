/*
 *  Gulp config file ( for Gulp@4.0.0 )
 *  @project chsie-popups
 *  Author: Ben Hoverter
 */

 const { src, dest, series, watch } = require('gulp');
 const del           = require('del');
 const concat        = require('gulp-concat');
 // const sass          = require('gulp-sass');
 const autoprefixer  = require('gulp-autoprefixer');
 const sourcemaps    = require('gulp-sourcemaps');
 const uglify        = require('gulp-uglify');
 const babel         = require('gulp-babel');

 // sass.compiler = require( 'node-sass' );

 const activeFiles = [
   'chsie-popups/**/*',
   '!chsie-popups/admin/app/node_modules/**/*',
   '!chsie-popups/admin/app/public/**/*',
   '!chsie-popups/admin/app/src/**/*',
   '!chsie-popups/admin/app/*.*',
 ];

 const devPath = 'C:/Users/benho/WordPress/dev/wp-content/plugins/chsie-popups';

 // CLean the plugin folder:
 function clean() {
   return del([
     devPath,
   ], {force: true} );
 };

 
 function copy() {
   return src( activeFiles )
   .pipe( dest( devPath ) )
 }

 exports.default = series( clean, copy );

 exports.clean = clean;
 exports.copy = copy;

 // exports.js = js;
 // exports.php = php;
 // exports.favicons = favicons;


 const doAll = series( clean, copy );
 watch( activeFiles, doAll );
