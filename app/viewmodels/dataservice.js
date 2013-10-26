define(function(require){
	var service = {};
	service.categories = [
		{
			id: 1,
			name: "residential"
		},
		{
			id: 2,
			name: "commercial"
		},
		{
			id: 3,
			name: "interiors"
		},
		{
			id: 4,
			name: "other"
		}
	];
	service.projects = [
		{
			alias: "Peninsula",
			name: "Peninsula Pacific",
			location: "Los Angeles, CA",
			description: "The design of this executive office suite blends the bright spirit of the Southern California coast, where the CEO of the company resides, and the robust character of a Sun Valley horse ranch, his second home. Combined, the space also represents the entertainment holding company’s philosophy of relaxed hospitality. White lacquered walls balance the dark reclaimed oak plank flooring. Deep indigo lacquer panels wrap into the boardroom, and clear glass partitions allow uninterrupted views of Century City’s skyline. Fleetwood/Fernandez custom designed most of the furnishings using a palette of noble materials: solid walnut, oiled bronze, and marble",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_02.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_03.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_04.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_05.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_06.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_07.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_08.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_09.jpg"
				},
				{
					path: "img/projects/peninsula/Peninsula_10.jpg"
				},
			]
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: [],
			assets: []
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["residential"],
			assets: []
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: [],
			assets: []
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: [],
			assets: []
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["residential"],
			assets: []
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: [],
			assets: []
		},
		{
			alias: "Peninsula",
			name: "Food",
			description: "Quisque ultrices ut elit eget dapibus. Duis suscipit erat vel iaculis faucibus. Nullam eu justo urna. Maecenas sit amet risus ut nulla pulvinar vehicula. Ut id eros eu lorem fringilla vulputate non nec odio. In varius congue lectus sit amet aliquam. Donec volutpat orci nec convallis lobortis. Proin a nisl eu velit ullamcorper auctor. Vestibulum venenatis ac lacus quis ullamcorper. Curabitur mollis risus ligula, sit amet faucibus nibh tincidunt a. Cras et justo magna. Aenean feugiat libero ut mauris laoreet feugiat. Duis sed turpis non ligula dictum tristique id non lorem. Nulla facilisi. Mauris pretium sed nisl ut convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ipsum nunc, et vulputate ipsum imperdiet in. Donec tincidunt scelerisque ante, et dictum metus scelerisque vitae. Aliquam id ante dapibus, porttitor nibh quis, adipiscing mauris. Praesent id cursus erat. Vestibulum congue orci non nulla sagittis molestie. Duis in neque arcu. Pellentesque sit amet enim viverra, feugiat odio vel, congue purus. Maecenas auctor dui eget arcu sodales accumsan. Pellentesque placerat mollis condimentum. Nulla consectetur at neque ullamcorper egestas.",
			caption: "",
			subcaption: "",
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: [],
			assets: []
		}
	];
	service.getProjectByID = function(alias) {
		var proj = $.grep(service.projects, function(p, i) {
			return p.alias === alias;
		});
		return proj.length > 0 ? proj[0] : null;
	};

 	return service;
});