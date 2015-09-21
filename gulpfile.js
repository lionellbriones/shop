var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss', 'resources/css');

    mix.styles([
        'assets/bower/bootstrap/dist/css/bootstrap.min.css',
        'css/app.css'
    ], null, 'resources');

    mix.scripts([
        'bower/jquery/dist/jquery.min.js',
        'bower/bootstrap/dist/js/bootstrap.min.js'
    ], null, 'resources/assets');

    mix.version([
        'public/css/all.css',
        'public/js/all.js'
    ]);
});
