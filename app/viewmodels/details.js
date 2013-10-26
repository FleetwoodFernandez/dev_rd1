define(['durandal/app', 'knockout', 'dataservice'], function(app, ko, dataservice) {
	var ctor = function () {
    	var self = this;
    	self.project = ko.observable();
    	self.slideid = ko.observable();
    	self.slideHeight = ko.observable();
        self.displayInfo = ko.observable(false);
        self.activate = function(id, slideid, info) {
        	self.project(dataservice.getProjectByID(id));
        	self.slideid(slideid);
        };
        self.changeSlide = function(elm) {
            console.log(elm)
        };
        self.closeInfo = function() {
            self.displayInfo(false);
        };
        app.on('details:info').then(function(e){
            self.displayInfo(e);
            console.log(e)
        });
        app.on('details:slide').then(function(id){
            self.slideid(id);
        });
    };
    return ctor;
});