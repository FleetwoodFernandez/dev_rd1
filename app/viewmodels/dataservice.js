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
			name: "TAT House",
			location: "SANTA MONICA CA",
			description: "<p>The design of this 5,600 square foot single family home in Santa Monica was rooted in a keen awareness of site and landscape and a dedication to sustainable architecture. After living in the neighborhood for over 30 years, the clients decided to build a new house that would more completely engage the landscape while seeking the highest certification offered by the U.S. Green Building Council. Designed as a linear sequence, the house unfolds as a series of spaces that are completely open to the landscape. Large expanses of glass walls pocket away allowing rooms to blur the distinction between outside and in.  Fleetwood / Fernandez was responsible for the architecture as well as the interior design, which in addition to the sustainable finishes inherent to this type of project, features a curated selection of furnishings with many vintage pieces that extend the  spirit of reuse.</p>",
			thumbnail: "img/projects/tat_house/TAT_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/tat_house/TAT_01.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_02.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_03.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_04.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_05.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_06.jpg"
				},
				{
					path: "img/projects/tat_house/TAT_07.jpg"
				}
			],
			external: [
				{
					label: "View Sustainable Features",
					path: "assets/TAT_sustainable features.pdf"
				}
			]
		},
		{
			alias: "thelocal",
			name: "The Local",
			location: "HYPOTHETICAL SITE",
			description: "<p>What if a community fails to interact? Los Angeles is an accidental urban model; a disparate network of communities scaled according to the automobile. The by-products of this vehicular model have amounted to an unending sprawl coupled with a dystopian lack of public space. The recent widespread closing of car dealerships presents a twofold opportunity to rectify these deficiencies. Their ubiquity insures access, while their inordinate size affords them flexibility.  Our proposal utilizes the familiar module of a parking space to organize our site and co-opts these abandoned commercial lots absorbing them into the public sphere.</p>",
			thumbnail: "img/projects/the_local/thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/the_local/Local_04.jpg"
				},
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
			alias: "dumpster",
			name: "Dumpster",
			location: "BROOKLYN, NY",
			description: "<p>After moving to a smaller studio, artist Mac Premo was faced with the dilemma of disposing of a lifetime of archived personal artifacts. He decided instead to create the largest collage he had ever made using a 30 yard dumpster as the canvas. The Dumpster’s first installation was at The Dumbo Arts Festival in New York in September 2011 and has since traveled widely, including to Pulse Miami Contemporary Art Fair. We designed a translucent, elastic membrane roof over a custom metal frame. The roof is light, can be easily assembled and disassembled, allows natural light in, and becomes a glowing beacon at night.</p>",
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
			alias: "rayhouse",
			name: "RAY House",
			location: "SANTA MONICA, CA",
			description: "<p>This is a two phase project involving the complete transformation of two buildings on the same lot in the historic Ocean Park district of Santa Monica. Dating from 1920, the structures were in need of a complete renovation that would also incorporate state of the art sustainable and energy efficient features. One at a time, the two buildings will become home to the clients as well as their extended family. The design strategy follows the constraints imposed by the city planning guidelines, and at the same time establishes a dialogue between the two structures that emphasizes privacy.  Openings were carefully placed to allow for light and views while maintaining discreet separation. Each home has a distinct private outdoor area but is also connected through a central, shared green zone.</p>",
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
			alias: "Peninsula",
			name: "Peninsula Pacific",
			location: "LOS ANGELES, CA",
			description: "<p>The design of this executive office suite blends the bright spirit of the Southern California coast, where the CEO of the company resides, and the robust character of a Sun Valley horse ranch, his second home. Combined, the space also represents the entertainment holding company’s philosophy of relaxed hospitality. White lacquered walls balance the dark reclaimed oak plank flooring. Deep indigo lacquer panels wrap into the boardroom, and clear glass partitions allow uninterrupted views of Century City’s skyline. Fleetwood/Fernandez custom designed most of the furnishings using a palette of noble materials: solid walnut, oiled bronze, and marble.</p>",
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
					path: "img/projects/peninsula/Peninsula_03.jpg"
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
			alias: "food",
			name: "FOOD",
			location: "LOS ANGELES, CA",
			description: "<p>The design for a market and café in the eclectic neighborhood of Rancho Park reflects the client’s approach to food: simple and fun.  As a reference to the small but legendary restaurant started by Gordon Matta Clark in Soho, the owner wanted a space that was unique and community oriented. The open and inviting space makes use of simple materials such as plywood and concrete. The existing wood framing and floor slab were exposed to add to the unpretentious flavor.  In an effort to draw attention to a nondescript commercial block, the storefront was painted bright red, and a window was added to reveal activity in the kitchen.  In addition to the café function, the renovation accommodates an office, storage, and a kitchen large enough to service the client’s catering business.</p>",
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
			alias: "balhouse",
			name: "BAL House",
			location: "LA GRAñA, Spain",
			description: "<p>The house began as a studio for an artist. Situated on a hillside overlooking the Atlantic Ocean, the project takes advantage of striking views while providing an appropriate space for painting and displaying the artist’s work. In addition to the art studio, the program includes accommodations for visiting family. The site is a heavily graded, narrow, south facing parcel with strenuous zoning restrictions. The footprint of the project evolved from these unique programmatic and physical requirements.  Responding to the dichotomous relationships contained in the program, the house developed as a series of dialogues between paired elements. As the central component, the studio acts as a container by which all other spaces are enclosed. On the exterior, an economy of materials dominated by pigmented, cast in place concrete heightens the simplicity of form.</p>",
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
					path: "img/projects/bal_house/BAL_03.jpg"
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
			alias: "reconstruction",
			name: "RE:Construction",
			location: "HYPOTHETICAL SITE",
			description: "<p>The proposal for this public art program sponsored by The Downtown Alliance in New York City utilizes common safety-related construction objects and repurposes them as devices of decoration for a typical barricade. Elements that normally speak of caution become a study of texture and color, and transform urban blight into an art installation. The cones are sheared off at various points to allow for view portals while passing through the barricade.</p>",
			thumbnail: "img/projects/re_construction/ReCon_Thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/re_construction/ReCon_01.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_02.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_03.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_04.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_05.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_06.jpg"
				},
				{
					path: "img/projects/re_construction/ReCon_07.jpg"
				}
			]
		},
		{
			alias: "FinancialFirm",
			name: "Financial Firm",
			location: "MULTIPLE LOCATIONS",
			description: "<p>Fleetwood / Fernandez has completed 10 projects throughout the US for this leading financial sector firm, ranging in size from a boutique marketing center to multi-floor restacks.</p><p>Santa Monica: The project for the firm’s headquarters in Santa Monica was a 120,000 sq. ft. four-floor phased reorganization, expansion and renovation, including a new conference center, training facility, serving pantries and executive lounge.</p><p>New York: Several disassociated departments from different buildings were consolidated into three floors of a newly remodeled building on Park Avenue.  A creative planning effort was implemented to achieve the desired open plan flow of space while managing the building’s challenges -- large columns spaced closely at sixteen feet apart, irregular shaped floor plate, and low ceilings. Low workstations and oversized glass sidelights along office fronts allow copious natural light into the space, and rich natural materials and bold color accents complete the palette.</p>",
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
			alias: "solloft",
			name: "SOL Loft",
			location: "SANTA MONICA, CA",
			description: "<p>A bachelor’s traditional ocean front one bedroom flat is transformed into a beach loft.  The client, an avid surfer, wanted open living spaces and uninterrupted views of the ocean.  This was achieved by synthesizing the service functions into an efficient core, while removing all unnecessary partitions. The resultant spaces are flexible and fluid. Exposing the existing concrete structure allowed for taller ceiling heights at the window walls, drawing light deeper into the space.</p>",
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
					path: "img/projects/sol_loft/SOL_06.jpg"
				}
			]
		},
		{
			alias: "yellowfever",
			name: "Yellow Fever",
			location: "TORRANCE, CA",
			description: "<p>The owners of this casual Asian food restaurant wanted a space aligned with their mission to offer good-tasting, healthful cuisine inspired by a mash up of American and Asian cultures. Featuring a combination of industrial materials and more expressive finishes like handmade wood furniture and ceramic tile, the restaurant finds its focal point above the banquette seating with an organic installation of hundreds of melamine bowls. The urban counterculture character of the space is reflected in details throughout: metal wire seating, bare bulb pendants in bright colors, exposed ductwork, and site specific commissioned artwork by local artists.</p>",
			thumbnail: "img/projects/yellow_fever/YF_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/yellow_fever/YF_01.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_02.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_03.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_04.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_05.jpg"
				},
				{
					path: "img/projects/yellow_fever/YF_06.jpg"
				}
			]
		},
		{
			alias: "dac",
			name: "DAC",
			location: "BROOKLYN, NY",
			description: "<p>As part of a response to the New York City Department of Small Business Services Bid Challenge, this unbuilt proposal addresses the increased intertwining of our public and private lives in urban environments.  Wireless technology has obscured what we deem to be acceptable conversation in the public sphere to the point where the useful archetype of the phone booth seems like a foreign and inconvenient relic. Our initiative brings back this forgotten typology, re-imagining it in contemporary terms as an anomalous object in the urban landscape. It is our hope that its enigmatic appearance would simultaneously serve to pique interest and facilitate recognition.</p>",
			thumbnail: "img/projects/dac/DAC_thumbnail.jpg",
			categories: ["speculative"],
			assets: [
				{
					path: "img/projects/dac/DAC_01.jpg"
				},
				{
					path: "img/projects/dac/DAC_02.jpg"
				},
				{
					path: "img/projects/dac/DAC_03.jpg"
				}
			]
		},
		{
			alias: "1735Studio",
			name: "1735 Studio",
			location: "SANTA MONICA, CA",
			description: "<p>Our studio is a home away from home for us and our staff. Housed in an old button factory turned artist’s studio turned creative office, the space features operable 11’ steel windows and even higher bowstring truss ceilings. To complement the industrial character of the space we made desks and cabinets out of plywood, adding a laser cut custom perforation pattern to some feature pieces. Brightly painted standard steel shelving provides additional storage, and colorful rugs and textiles on the pinup walls soften the space. Our own collection of vintage furniture coexists with more contemporary pieces and with the rotating finds, loaners and mockups for our projects.</p>",
			thumbnail: "img/projects/1735_studio/1735_thumbnail.jpg",
			categories: ["interiors"],
			assets: [
				{
					path: "img/projects/1735_studio/1735_01.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_02.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_03.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_04.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_05.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_06.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_07.jpg"
				},
				{
					path: "img/projects/1735_studio/1735_08.jpg"
				}
			]
		},
		{
			alias: "mashouse",
			name: "MAS House",
			location: "LOS ANGELES, CA",
			description: "<p>In Construction, more information and images coming soon.</p>",
			thumbnail: "img/projects/mas_house/MAS_thumbnail.jpg",
			categories: ["residential"],
			assets: [
				{
					path: "img/projects/mas_house/MAS_01.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_02.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_03.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_04.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_05.jpg"
				},
				{
					path: "img/projects/mas_house/MAS_06.jpg"
				}
			]
		},
		{
			alias: "9000Wilshire",
			name: "9000 Wilshire",
			location: "BEVERLY HILLS, CA",
			description: "<p>This conceptual design proposal for a low rise commercial office building challenges the traditional core and shell typology by inverting the conventional diagram of these building types. Instead of a solid “core” that houses utility chases and elevator shafts, our scheme hollows out the center to allow for an internal light well. The goal of this model was to allow light to permeate deeper into and throughout the programmed space, and to minimize energy consumption allowing for cross ventilation. The structural model is shifted from a grid type to one resembling an exoskeleton, which would not only provide a filter for direct light but also facilitate the layout of interior spaces and encourage open plan work environments.</p>",
			thumbnail: "img/projects/9000_wilshire/9000_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/9000_wilshire/9000_01.jpg"
				}
			]
		},
		{
			alias: "hillstoneRestaurant",
			name: "Hillstone Restaurant Group",
			location: "MULTIPLE LOCATIONS",
			description: "<p>Hillstone Restaurant Group owns several successful high-end dining establishments throughout the country, including the beloved Houston’s restaurants. Family owned and operated since 1976, HRG is also a supporter of art and architecture, seamlessly blending both into carefully crafted dining environments. Fleetwood/Fernandez has collaborated with the company’s design and construction team on many projects, and is currently working on two new spaces: a restaurant and a pizza shop in Montecito, California. The projects are in the construction document phase, more information and images coming soon.</p>",
			thumbnail: "img/projects/hillstone_restaurant_group/HRG_thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/hillstone_restaurant_group/HRG_01.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_02.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_03.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_04.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_05.jpg"
				},
				{
					path: "img/projects/hillstone_restaurant_group/HRG_06.jpg"
				}
			]
		},
		{
			alias: "114WineShop",
			name: "114 Wine Shop",
			location: "BEVERLY HILLS, CA",
			description: "<p>In Construction, more information and images coming soon.</p>",
			thumbnail: "img/projects/114_wine_shop/Wine_Thumbnail.jpg",
			categories: ["commercial"],
			assets: [
				{
					path: "img/projects/114_wine_shop/Wine_01.jpg"
				}
			]
		},		
		{
			alias: "ascap",
			name: "ASCAP",
			location: "LOS ANGELES, CA",
			description: "<p>The world’s leader in performance royalties and music licensing for songwriters and composers, ASCAP was looking to completely renovate their existing offices in the iconic Director’s Guild of America building on Sunset. As a result of 20 years of growth in two disconnected suites, the space was incoherent and outdated.   With clear circulation, large amounts of glazing, and sustainable materials, the new design embodies the member-owned company’s accessibility and open book policy in a cutting edge active and collaborative environment.</p>",
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