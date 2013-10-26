define(['plugins/router', 'durandal/app', 'durandal/system', 'knockout', 'dataservice', 'module', 'knockout'], function (router, app, system, ko, dataservice, module, ko) {
    var model = {};
    model.router = router;
    model.route = ko.observable();
    model.fragment = ko.observable();
    model.project = ko.observable();
    model.projectSlide = ko.observable(0);
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
    model.projectInfo = function() {
        app.trigger('details:info', true);
    };
    model.mainNavigation = ko.computed(function() {
        return ko.utils.arrayFilter(router.navigationModel(), function(route) {
            return route.settings === undefined;
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
    model.activate = function () {
        var routes = [[
                { route: '', moduleId: 'viewmodels/home' },
                { route: 'projects(/:type)', hash:'#projects', title: 'PROJECTS', moduleId: 'viewmodels/projects', nav: true },
                { route: 'about', hash:'#about', title: 'ABOUT', moduleId: 'viewmodels/about', nav: true },
                { route: 'blog', title: 'BLOG', moduleId: 'viewmodels/blog', nav: true },
                { route: 'contact', title: 'CONTACT', moduleId: 'viewmodels/contact', nav: true },
                { route: 'details/:id/:slideid', moduleId: 'viewmodels/details' },
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