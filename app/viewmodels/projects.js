define(['plugins/router', 'knockout', 'dataservice'], function(router, ko, dataservice) {
    var ctor = function () {
    	var self = this;
        self.displayName = 'Projects';
        self.imageUrl = function(data) {
            //return "url(" + data +  ")";
            return "url(http://fleetwoodfernandez.github.io/dev_rd1/" + data +  ")";
        };
		self.categories = dataservice.categories;
		self.projectURL = function(alias) {
			return '#details/' + alias;// + "/0";
		};
		self.allProjects = dataservice.projects;
        self.filter = ko.observable("all");
        self.filtered = ko.computed(function () {
            if(self.filter() != undefined) {
                var projs = [];
                $.each(self.allProjects, function(i, p) {
                    if($.inArray(self.filter(), p.categories) > -1) {
                        projs.push(p);
                    }
                });
                if(projs.length > 0) {
	                return projs;
	            } else {
	            	return self.allProjects;
	            }
            } else {
            	return self.allProjects;
            }
        });
        self.activate = function(type) {
        	self.filter(type);
        };
    };
    return ctor;
});