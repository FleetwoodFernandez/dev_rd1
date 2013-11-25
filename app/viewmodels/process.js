define(['durandal/app', 'knockout'], function(app, ko) {
    var ctor = function () {
    	var self = this;
    	self.slideid = ko.observable();
    	app.on('process:slide').then(function(id) {
            self.slideid(id);
            var slides = $(".process-list ul li").slice(0, id),
                left = 0;
                $.each(slides, function(i, e) {
                    left += $(e).width();
                });
            $(".process-list ul").stop().animate({ 'margin-left': -left }, 600);
        });
    };
    return ctor;
});