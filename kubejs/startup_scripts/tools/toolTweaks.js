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
		
		/////////////
		//  Armor  //
		/////////////
		"setArmorProtection",

		// Butchery Dragon Scale
		4730, ["butchery:dragon_scale_armor_helmet", 14],
		6880, ["butchery:dragon_scale_armor_chestplate", 19],
		6450, ["butchery:dragon_scale_armor_leggings", 14],
		5590, ["butchery:dragon_scale_armor_boots", 12],

		// Biomancy Acolyte
		200, ["biomancy:acolyte_armor_helmet", 4],
		250, ["biomancy:acolyte_armor_chestplate", 8],
		250, ["biomancy:acolyte_armor_leggings", 7],
		200, ["biomancy:acolyte_armor_boots", 4],

		// BH Sanguinite
		763, ["bloodyhell:blood_helmet", 6],
		1272, ["bloodyhell:blood_chestplate", 10],
		1144, ["bloodyhell:blood_leggings", 9],
		763, ["bloodyhell:blood_boots", 6],

		// BH Rhnull
		1017, ["bloodyhell:rhnull_helmet", 8],
		1524, ["bloodyhell:rhnull_chestplate", 12],
		1397, ["bloodyhell:rhnull_leggings", 11],
		1017, ["bloodyhell:rhnull_boots", 8],

		// BH Blasphemite
		2794, ["bloodyhell:blasphemite_helmet", 11],
		3810, ["bloodyhell:blasphemite_chestplate", 15],
		3556, ["bloodyhell:blasphemite_leggings", 14],
		2794, ["bloodyhell:blasphemite_boots", 11],

		// Celestisynth Lunar
		655, ["celestisynth:lunar_stone_helmet", 5],
		819, ["celestisynth:lunar_stone_chestplate", 9],
		728, ["celestisynth:lunar_stone_leggings", 8],
		655, ["celestisynth:lunar_stone_boots", 5],

		// Celestisynth Solar
		655, ["celestisynth:solar_crystal_helmet", 5],
		819, ["celestisynth:solar_crystal_chestplate", 9],
		728, ["celestisynth:solar_crystal_leggings", 8],
		655, ["celestisynth:solar_crystal_boots", 5],

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