let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.scripts([
    './public/assets/plugins/jquery/jquery.min.js',
    './public/assets/plugins/bootstrap/js/popper.min.js',
    './public/assets/plugins/bootstrap/js/bootstrap.min.js',
    './public/js/jquery.slimscroll.js',
    './public/js/waves.js',
    './public/js/sidebarmenu.js',
    './public/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js',
    './public/js/custom.min.js',
    './public/assets/plugins/sparkline/jquery.sparkline.min.js',
    './public/assets/plugins/raphael/raphael-min.js',
    './public/assets/plugins/morrisjs/morris.min.js',
    './public/js/dashboard.js',
    './public/assets/plugins/wizard/jquery.steps.min.js',
    './public/assets/plugins/wizard/jquery.validate.min.js',
    './public/assets/plugins/horizontal-timeline/js/horizontal-timeline.js',
    './public/assets/plugins/styleswitcher/jQuery.style.switcher.js',
], 'public/js/all.js');

mix.styles([
    './public/assets/plugins/bootstrap/css/bootstrap.min.css',
    './public/assets/plugins/morrisjs/morris.css',
    './public/assets/plugins/horizontal-timeline/css/horizontal-timeline.css',
], 'public/css/all.css');