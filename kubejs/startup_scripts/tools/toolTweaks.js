//priority: 500
// Tools & Armor Stat Changes

ItemEvents.modification(event => {
	//const paxelPenalty = speed => Math.max(speed * 0.7, speed - 0.3);

	let d = 0;
	let p = "";
	[
		/////////////
		//  Tools  //
		/////////////
		"setAttackDamage",

		// Fracture Parasitic
		1800,
		["fracture:parasitic_pickaxe", 6],
		["fracture:parasitic_shovel", 7.5],
		["fracture:parasitic_axe", 13],
		["fracture:parasitic_sword", 10],

		// SoS Sinful
		0,
		["sons_of_sins:sinful_pickaxe", 8],
		["sons_of_sins:sinful_shovel", 7.5],
		["sons_of_sins:sinful_axe", 15],
		["sons_of_sins:sinful_sword", 12],
		["sons_of_sins:sinful_hoe", 8],

		// SoS Flesh
		120,
		["sons_of_sins:flesh_pickaxe", 2],
		["sons_of_sins:flesh_shovel", 1.5],
		["sons_of_sins:flesh_axe", 8],
		["sons_of_sins:flesh_sword", 6],
		["sons_of_sins:flesh_hoe", 4],

		// CH Extraterrestrial
		7000,
		["clanginghowl:extraterrestrial_pickaxe", 8],
		["clanginghowl:extraterrestrial_shovel", 7.5],
		["clanginghowl:extraterrestrial_axe", 15],
		["clanginghowl:extraterrestrial_sword", 13],
		["clanginghowl:extraterrestrial_hoe", 8],
		["clanginghowl:extraterrestrial_hammer", 16],

		// BH Sanguinite
		3810,
		["bloodyhell:sanguinite_pickaxe", 7],
		["bloodyhell:sanguinite_shovel", 6.5],
		["bloodyhell:sanguinite_axe", 14],
		["bloodyhell:sanguinite_sword", 12],
		["bloodyhell:sanguinite_hoe", 7],

		// BH Rhnull
		4318,
		["bloodyhell:rhnull_pickaxe", 8],
		["bloodyhell:rhnull_shovel", 7.5],
		["bloodyhell:rhnull_axe", 15],
		["bloodyhell:rhnull_sword", 13],
		["bloodyhell:rhnull_hoe", 8],

		// BH Blasphemite
		6350,
		["bloodyhell:blasphemite_pickaxe", 9],
		["bloodyhell:blasphemite_shovel", 8.5],
		["bloodyhell:blasphemite_axe", 17],
		["bloodyhell:blasphemite_sword", 15],
		["bloodyhell:blasphemite_hoe", 9],
		["bloodyhell:blasphemous_twin_daggers", 19],
		["bloodyhell:blasphemous_hulking_mass_of_iron", 19],
		["bloodyhell:blasphemous_impaler", 20],
	].forEach(en => {
		if (typeof en === "number") return d = en;
		if (typeof en === "string") return p = en;

		const [id, dmg, spd] = en;

		event.modify(id, item => {
			// console.log(Object.keys(item));
			item.maxDamage = d;
			console.log(item[p]);
			item[p](dmg - 1);
			if (spd !== undefined) item.speed = spd;
		});
	});
});