requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'dataservice': '../app/viewmodels/dataservice',
        'bindings': '../lib/durandal/js/plugins/bindings',
        'imageLoader': '../lib/jquery/imagesloaded.pkgd.min',
        'cbpBGSlideshow': '../lib/jquery/cbpBGSlideshow',
        'modernizr': '../lib/jquery/modernizr.custom'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bindings'],  function (system, app, viewLocator, bindings) {
    //>>excludeStart("build", true);
    //system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Fleetwood / Fernandez';

    app.configurePlugins({
        router: true
    });

    app.start().then(function() {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance');
    });
});