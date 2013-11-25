define(['durandal/app', 'knockout', 'dataservice'], function(app, ko, dataservice) {
	var ctor = function () {
    	var self = this;
    	self.project = ko.observable();
    	self.slideid = ko.observable();
        self.displayInfo = ko.observable(false);
        self.activate = function(id, slideid, info) {
        	self.project(dataservice.getProjectByID(id));
        	self.slideid(slideid);
        };
        self.changeSlide = function(elm) {
        };
        self.closeInfo = function() {
            self.displayInfo(false);
        };
        self.next = function() {
            app.trigger('details:next');
        };
        app.on('details:info').then(function(e) {
            self.displayInfo(e);
        });
        app.on('details:slide').then(function(id) {
            self.slideid(id);
            var slides = $(".project-list ul li").slice(0, id),
                left = 0;
                $.each(slides, function(i, e) {
                    left += $(e).width();
                });
            $(".project-list ul").stop().animate({ 'margin-left': -left }, 600);
        });
    };
    return ctor;
});