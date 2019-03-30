/*
 *  Gulp config file ( for Gulp@4.0.0 )
 *  @project chsie-popups
 *  Author: Ben Hoverter
 */
 const { src, dest, series, parallel, watch } = require('gulp');
 const del           = require('del');
 const concat        = require('gulp-concat');
 const sass          = require('gulp-sass');
 const csso          = require('gulp-csso');
 const autoprefixer  = require('gulp-autoprefixer');
 const sourcemaps    = require('gulp-sourcemaps');
 const uglify        = require('gulp-uglify');
 const babel         = require('gulp-babel');
 const zip           = require('gulp-zip');



 // sass.compiler = require( 'node-sass' );

 const activeFiles = [
   'chsie-popups/**/*',
   '!chsie-popups/admin/app/node_modules/**/*',
   '!chsie-popups/admin/app/public/**/*',
   '!chsie-popups/admin/app/src/**/*',
   '!chsie-popups/admin/app/*.*',
 ];

 const devPath = 'C:/Users/benho/WordPress/dev/wp-content/plugins/chsie-popups';

const zipFiles = 'C:/Users/benho/WordPress/dev/wp-content/plugins/chsie-popups/**/*'
const zipDest = 'C:/Users/benho/WordPress/dev/wp-content/plugins'



function publicCSS() {
  return src( './chsie-popups/public/**/*.scss' )     // Get everything Sassy.
      .pipe( sass().on( 'error', sass.logError ) )        // Transpile to CSS.
      .pipe( autoprefixer( {                              // Prefix for browser compatibility.
          browsers: [ 'last 2 versions' ]
      } ) )
      .pipe( sourcemaps.init() )                         // Start sourcemap processing.
        .pipe( concat( 'public.min.css' ) )                 // Combine all files into one.
        .pipe( csso() )                                   // Minify the CSS.
      .pipe( sourcemaps.write() )                        // Output sourcemap.
      .pipe( dest( './chsie-popups/assets/public' ) )
}

// function adminCSS() {
//   return src( './chsie-popups/admin/**/*.scss' )     // Get everything Sassy.
//       .pipe( sass().on( 'error', sass.logError ) )        // Transpile to CSS.
//       .pipe( autoprefixer( {                              // Prefix for browser compatibility.
//           browsers: [ 'last 2 versions' ]
//       } ) )
//       .pipe( sourcemaps.init() )                         // Start sourcemap processing.
//         .pipe( concat( 'admin.min.css' ) )                 // Combine all files into one.
//         .pipe( csso() )                                   // Minify the CSS.
//       .pipe( sourcemaps.write() )                        // Output sourcemap.
//       .pipe( dest( './chsie-popups/assets/admin' ) )
// }


function publicJS() {
  return src([
    './chsie-popups/public/**/*.js',
    '!./chsie-popups/public/kyc-validation-app/**/*',
    '!./chsie-popups/public/token-balance-app/**/*',
  ])
    .pipe( sourcemaps.init() )
      .pipe( concat( 'public.min.js' ) )
      .pipe( babel( { presets: ['@babel/preset-env'] } ) )
      .pipe( uglify() )
    .pipe( sourcemaps.write() )
    .pipe( dest( './chsie-popups/assets/public' ) )
}

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

 // Zip plugin:
 function zipPlugin() {
   return src( zipFiles )
   .pipe( zip( 'chsie-popups.zip' ) )
   .pipe( dest( zipDest ) )
 }

 exports.default = series(
  clean,
  parallel(
    publicCSS,
    // adminCSS,
  ),
  publicJS,
  copy,
  zipPlugin,
 );
 // exports.default = series( clean, copy, zipPlugin );

 exports.clean = clean;
 exports.copy = copy;
 exports.zip = zipPlugin;


 const doAll = series( // TODO: looping.  Fix.
   clean,
   parallel(
     publicCSS,
     // adminCSS
   ),
   publicJS,
   copy,
   zipPlugin,
 );
// const doAll = series( clean, copy, zipPlugin  );

 // watch( activeFiles, doAll );
