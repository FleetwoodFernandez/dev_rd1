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
			name: "speculative"
		}
	];
	service.projects = [
		{
			alias: "tathouse",
			name: "TAT HOUSE",
			location: "SANTA MONICA CA",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "balhouse",
			name: "BAL House",
			location: "LA GRANA, Spain",
			description: "<p>The house began as a studio for an artist. Situated on a hillside overlooking the Atlantic Ocean, the project takes advantage of striking views while providing an appropriate space for painting and displaying the artist’s work. In addition to the art studio, the program includes accommodations for visiting family. The site is a heavily graded, narrow, south facing parcel with strenuous zoning restrictions. The footprint of the project evolved from these unique programmatic and physical requirements.  Responding to the dichotomous relationships contained in the program, the house developed as a series of dialogues between paired elements. As the central component, the studio acts as a container by which all other spaces are enclosed. On the exterior, an economy of materials dominated by pigmented, cast in place concrete heightens the simplicity of form.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/bal_house/BAL_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/bal_house/BAL_01.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_02.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_03.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_04.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_05.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_06.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_07.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_08.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_09.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_10.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_11.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_12.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_13.jpg"
				},
				{
					path: "img/projects/bal_house/BAL_14.jpg"
				}
			]
		},
		{
			alias: "mashouse",
			name: "MAS House",
			location: "LOS ANGELES, CA",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "rayhouse",
			name: "RAY House",
			location: "SANTA MONICA, CA",
			description: "<p>This is a two phase project involving the complete transformation of two buildings on the same lot in the historic Ocean Park district of Santa Monica. Dating from 1920, the structures were in need of a complete renovation that would also incorporate state of the art sustainable and energy efficient features. One at a time, the two buildings will become home to the clients as well as their extended family. The design strategy follows the constraints imposed by the city planning guidelines, and at the same time establishes a dialogue between the two structures that emphasizes privacy.  Openings were carefully placed to allow for light and views while maintaining discreet separation. Each home has a distinct private outdoor area but is also connected through a central, shared green zone.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/ray_house/RAY_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/ray_house/RAY_01.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_02.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_03.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_04.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_05.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_06.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_07.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_08.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_09.jpg"
				},
				{
					path: "img/projects/ray_house/RAY_10.jpg"
				}
			]
		},
		{
			alias: "solloft",
			name: "SOL Loft",
			location: "SANTA MONICA, CA",
			description: "<p>A bachelor’s traditional ocean front one bedroom flat is transformed into a beach loft.  The client, an avid surfer, wanted open living spaces and uninterrupted views of the ocean.  This was achieved by synthetizing the service functions into an efficient core, while removing all unnecessary partitions. The resultant spaces are flexible and fluid. Exposing the existing concrete structure allowed for taller ceiling heights at the window walls, drawing light deeper into the space.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/sol_loft/SOL_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/sol_loft/SOL_01.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_02.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_03.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_04.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_05.jpg"
				},
				{
					path: "img/projects/sol_loft/SOL_06.jpg"
				}
			]
		},
		{
			alias: "food",
			name: "FOOD",
			location: "LOS ANGELES, CA",
			description: "<p>The design for a market and café in the eclectic neighborhood of Rancho Park reflects the client’s approach to food: simple and fun.  As a reference to the small but legendary restaurant started by Gordon Matta Clark in Soho, the owner wanted a space that was unique and community oriented. The open and inviting space makes use of simple materials such as plywood and concrete. The existing wood framing and floor slab were exposed to add to the unpretentious flavor.  In an effort to draw attention to a nondescript commercial block, the storefront was painted bright red, and a window was added to reveal activity in the kitchen.  In addition to the café function, the renovation accommodates an office, storage, and a kitchen large enough to service the client’s catering business.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/food/FOOD_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/food/FOOD_01.jpg"
				},
				{
					path: "img/projects/food/FOOD_02.jpg"
				},
				{
					path: "img/projects/food/FOOD_03.jpg"
				},
				{
					path: "img/projects/food/FOOD_04.jpg"
				},
				{
					path: "img/projects/food/FOOD_05.jpg"
				},
				{
					path: "img/projects/food/FOOD_06.jpg"
				},
				{
					path: "img/projects/food/FOOD_07.jpg"
				},
				{
					path: "img/projects/food/FOOD_08.jpg"
				},
				{
					path: "img/projects/food/FOOD_09.jpg"
				}
			]
		},
		{
			alias: "yellowfever",
			name: "Yellow Fever",
			location: "TORRANCE, CA",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "hillstoneRestaurant",
			name: "Hillstone Restaurant Group",
			location: "MULTIPLE LOCATIONS",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "114WineShop",
			name: "114 Wine Shop",
			location: "BEVERLY HILLS, CA",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "9000Wilshire",
			name: "9000 Wilshire",
			location: "BEVERLY HILLS, CA",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "Peninsula",
			name: "Peninsula Pacific",
			location: "LOS ANGELES, CA",
			description: "<p>The design of this executive office suite blends the bright spirit of the Southern California coast, where the CEO of the company resides, and the robust character of a Sun Valley horse ranch, his second home. Combined, the space also represents the entertainment holding company’s philosophy of relaxed hospitality. White lacquered walls balance the dark reclaimed oak plank flooring. Deep indigo lacquer panels wrap into the boardroom, and clear glass partitions allow uninterrupted views of Century City’s skyline.</p><p>Fleetwood/Fernandez custom designed most of the furnishings using a palette of noble materials: solid walnut, oiled bronze, and marble.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["interiors"],
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
				}
			]
		},
		{
			alias: "WellsFargoCapital",
			name: "Wells Fargo Capital Finance",
			location: "MULTIPLE LOCATIONS",
			description: "<p>Fleetwood / Fernandez has completed 10 projects throughout the US for this leading financial sector firm, ranging in size from a boutique marketing center to multi-floor restacks.</p><p>WFCF Santa Monica: The project for the firm’s headquarters in Santa Monica was a 120,000 sq. ft. four-floor phased reorganization, expansion and renovation, including a new conference center, training facility, serving pantries and executive lounge.</p><p>WFCF New York: Several disassociated departments from different buildings were consolidated into three floors of a newly remodeled building on Park Avenue.  A creative planning effort was implemented to achieve the desired open plan flow of space while managing the building’s challenges -- large columns spaced closely at sixteen feet apart, irregular shaped floor plate, and low ceilings. Low workstations and oversized glass sidelights along office fronts allow copious natural light into the space, and rich natural materials and bold color accents complete the palette.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/wells_fargo_capital_finance/Wells_thumbnail.jpg",
			categories: ["interiors"],
			assets: [
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_01.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_02.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_03.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_04.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_05.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_06.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_07.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_08.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_09.jpg"
				},
				{
					path: "img/projects/wells_fargo_capital_finance/Wells_10.jpg"
				}
			]
		},
		{
			alias: "CanyonPanthers",
			name: "Canyon Panthers",
			location: "DEVONSHIRE HOUSE, LONDON, UK",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["interiors"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "1735Studio",
			name: "1735 Studio",
			location: "SANTA MONICA, CA",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["interiors"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "ascap",
			name: "ASCAP",
			location: "LOS ANGELES, CA",
			description: "<p>The world’s leader in performance royalties and music licensing for songwriters and composers, ASCAP was looking to completely renovate their existing offices in the iconic Director’s Guild of America building on Sunset. As a result of 20 years of growth in two disconnected suites, the space was incoherent and outdated.   With clear circulation, large amounts of glazing, and sustainable materials, the new design embodies the member-owned company’s accessibility and open book policy in a cutting edge active and collaborative environment.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/ascap/ASCAP_thumbnail.jpg",
			categories: ["interiors"],
			assets: [
				{
					path: "img/projects/ascap/ASCAP_01.jpg"
				},
				{
					path: "img/projects/ascap/ASCAP_02.jpg"
				},
				{
					path: "img/projects/ascap/ASCAP_03.jpg"
				},
				{
					path: "img/projects/ascap/ASCAP_04.jpg"
				},
				{
					path: "img/projects/ascap/ASCAP_05.jpg"
				},
				{
					path: "img/projects/ascap/ASCAP_06.jpg"
				}
			]
		},
		{
			alias: "dumpster",
			name: "Dumpster",
			location: "BROOKLYN, NY",
			description: "<p>After moving to a smaller studio, artist Mac Premo was faced with the dilemma of disposing of a lifetime of archived personal artifacts. He decided instead to create the largest collage he had ever made using a 30 yard dumpster as the canvas. The Dumpster’s first installation was at The Dumbo Arts Festival in New York in September 2011 and has since travelled widely, including to Pulse Miami Contemporary Art Fair. We designed a translucent, elastic membrane roof over a custom metal frame. The roof is light, can be easily assembled and disassembled, allows natural light in, and becomes a glowing beacon at night.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/the_dumpster_project/DUMPSTER_thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_01.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_02.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_03.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_04.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_05.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_06.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_07.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_08.jpg"
				},
				{
					path: "img/projects/the_dumpster_project/DUMPSTER_09.jpg"
				}
			]
		},
		{
			alias: "dac",
			name: "DAC",
			location: "BROOKLYN, NY",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
			]
		},
		{
			alias: "thelocal",
			name: "The Local",
			location: "HYPOTHETICAL SITE",
			description: "<p>What if a community fails to interact? Los Angeles is an accidental urban model; a disparate network of communities scaled according to the automobile. The by-products of this vehicular model have amounted to an unending sprawl coupled with a dystopian lack of public space. The recent widespread closing of car dealerships presents a twofold opportunity to rectify these deficiencies. Their ubiquity insures access, while their inordinate size affords them flexibility.  Our proposal utilizes the familiar module of a parking space to organize our site and co-opts these abandoned commercial lots absorbing them into the public sphere.</p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/the_local/thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/the_local/Local_01.jpg"
				},
				{
					path: "img/projects/the_local/Local_02.jpg"
				},
				{
					path: "img/projects/the_local/Local_03.jpg"
				},
				{
					path: "img/projects/the_local/Local_04.jpg"
				},
				{
					path: "img/projects/the_local/Local_05.jpg"
				},
				{
					path: "img/projects/the_local/Local_06.jpg"
				},
				{
					path: "img/projects/the_local/Local_07.jpg"
				}
			]
		},
		{
			alias: "reconstruction",
			name: "RECONSTRUCTION",
			location: "HYPOTHETICAL SITE",
			description: "<p></p>",
			recipe: {
				name: "Surf and Turf",
				path: "assets/recipe/Surf_and_turf.docx"
			},
			thumbnail: "img/projects/peninsula/Peninsula_thumb.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/peninsula/Peninsula_01.jpg"
				}
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