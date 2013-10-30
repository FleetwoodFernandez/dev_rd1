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
			alias: "Penninsula",
			name: "Penninsula Pacific",
			location: "RANCHO PARK, LOS ANGELES",
			description: "<p>The design of this executive office suite blends the bright spirit of the Southern California coast, where the CEO of the company resides, and the robust character of a Sun Valley horse ranch, his second home. Combined, the space also represents the entertainment holding company’s philosophy of relaxed hospitality. White lacquered walls balance the dark reclaimed oak plank flooring. Deep indigo lacquer panels wrap into the boardroom, and clear glass partitions allow uninterrupted views of Century City’s skyline.</p><p>Fleetwood/Fernandez custom designed most of the furnishings using a palette of noble materials: solid walnut, oiled bronze, and marble.<p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
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