define(['plugins/router', 'durandal/app', 'durandal/system', 'knockout', 'dataservice', 'module', 'knockout', 'durandal/composition','cbpBGSlideshow', 'imageLoader'], function (router, app, system, ko, dataservice, module, ko, composition, slideshow, imageLoader) {
    composition.addBindingHandler('totalProcessSlides', {
        init: function (element, valueAccessor) {
            var val =  valueAccessor();
            model.totalProcessSlides($(".process-list ul li").length);
        }
     });
    composition.addBindingHandler('slideshowInit', {
        init: function (element, valueAccessor) {
            cbpBGSlideshow.init({},     $( '#cbp-bislideshow' ));
        }
    });
    var model = {};
    model.router = router;
    model.route = ko.observable();
    model.fragment = ko.observable();
    model.project = ko.observable();
    model.projectSlide = ko.observable(0);
    model.processSlide = ko.observable(0);
    model.totalProcessSlides = ko.observable(0);
    model.markActive = function($data) {
        if($data.title === 'PROJECTS' && model.route() === "projects") {
            return model.pageFilter() === null;
        }
        return $data.isActive();
    };
    model.activeItem = ko.computed(function(){
        var route = router.activeInstruction() ? router.activeInstruction() : null;
        if(route) {
            model.fragment(route.fragment);
            model.route(model.fragment().split("/")[0]);
            if(model.route() === 'details') {
                model.project(dataservice.getProjectByID(route.params[0]));
                model.projectSlide(0);
            } else {
                model.project(null);
            }
        }
    });
    model.pageFilter = ko.computed(function(){
        var params = router.activeInstruction() ? router.activeInstruction().params : null;
        if(model.route() === "projects") {
            if(params[0]) {
                return params[0].toString().toUpperCase();
            } else {
                return null;
            }
        } else if (model.route() === "about") {
            var frags = model.fragment().split("/");
            if(frags.length > 1) {
                return frags[1];
            }
        }
        return null;
    });
    model.projectInfo = function() {
        app.trigger('details:info', true);
    };
    model.mainNavigation = ko.computed(function() {
        return ko.utils.arrayFilter(router.navigationModel(), function(route) {
            return route.settings === undefined;
        }).sort(function(a, b){
            return a.sortId - b.sortId;
        });
    });
    model.subNavigation = function(filter) {
        return ko.utils.arrayFilter(router.navigationModel(), function(route) {
            return route.settings ? route.settings.type === filter : null;
        });
    };
    model.formatSlideNumber = function(id) {
        if(id.toString().length < 2) {
            return "0" + id;
        }
        return id;
    };
    model.previous = function() {
        var i = Math.max(0, model.projectSlide() - 1);
        model.projectSlide(i);
        app.trigger('details:slide', model.projectSlide());
    };
    model.next = function() {
        var i = Math.min(model.projectSlide() + 1, model.project().assets.length - 1);
        model.projectSlide(i);
        app.trigger('details:slide', model.projectSlide());
    };
    model.previousProcess = function() {
        var i = Math.max(0, model.processSlide() - 1);
        model.processSlide(i);
        app.trigger('process:slide', model.processSlide());
    };
    model.nextProcess = function() {
        var i = Math.min(model.processSlide() + 1, model.totalProcessSlides() - 1);
        model.processSlide(i);
        app.trigger('process:slide', model.processSlide());
    };
    model.activate = function () {
        var routes = [[
                { route: '', moduleId: 'viewmodels/home' },
                { route: 'projects(/:type)', hash:'#projects', title: 'PROJECTS', moduleId: 'viewmodels/projects', nav: true, sortId: 1 },
                { route: 'about', hash:'#about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true, sortId: 2 },
                { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true, sortId: 3 },
                { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true, sortId: 4 },
                { route: 'details/:id', moduleId: 'viewmodels/details' },
                { route: 'about/fleetwood', title: 'HUNTER FLEETWOOD', moduleId: 'viewmodels/fleetwood', settings: { type: 'about', id: 'fleetwood' }, nav: true },
                { route: 'about/fernandez', title: 'MARIAPAZ FERNANDEZ', moduleId: 'viewmodels/fernandez', settings: { type: 'about', id: 'fernandez' }, nav: true },
                { route: 'about/process', title: 'PROCESS', moduleId: 'viewmodels/process', settings: { type: 'about', id: 'process' }, nav: true }
            ]],
            categories = [];

        $.each(dataservice.categories, function(){
            var cat = this,
                name = cat.name.toString();
            categories.push({ route: 'projects/', title: name.toString().toUpperCase(), moduleId: 'viewmodels/projects', settings: { type: 'categories', id: name }, nav: true })
        });

        routes = routes.concat(categories);
        router.map(routes).buildNavigationModel();

        return router.activate();
    };
    model.getBackground = ko.computed(function(){
        var css = '';
        switch(model.route()) {
            case 'projects':
                css = 'projects';
                break;
            case 'details':
                css = 'details';
                break;
            case 'about':
                css = 'about';
                break;
            case 'contact':
                css = 'contact';
                break;
            case 'blog':
                css = 'blog';
                break;
        }
        return 'backsplash ' + css;
    });
    return model;
});