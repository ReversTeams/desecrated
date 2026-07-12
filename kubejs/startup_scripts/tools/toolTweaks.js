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
		["fracture:parasitic_sword_shovel", 7.5],
		["fracture:parasitic_sword_axe", 13],
		["fracture:parasitic_sword_sword", 10],

		// SoS Sinful
		0,
		["sons_of_sins:sinful_pickaxe", 8],
		["sons_of_sins:sinful_shovel", 7.5],
		["sons_of_sins:sinful_axe", 15],
		["sons_of_sins:sinful_sword", 12],
		["sons_of_sins:sinful_hoe", 8],

		120,
		["sons_of_sins:flesh_pickaxe", 2],
		["sons_of_sins:flesh_shovel", 1.5],
		["sons_of_sins:flesh_axe", 8],
		["sons_of_sins:flesh_sword", 6],
		["sons_of_sins:flesh_hoe", 4],
		
		/////////////
		//  Armor  //
		/////////////
		"setArmorProtection",

		// Butchery Dragon Scale
		4730, ["butchery:dragon_scale_armor_helmet", 14],
		6880, ["butchery:dragon_scale_armor_chestplate", 19],
		6450, ["butchery:dragon_scale_armor_leggings", 14],
		5590, ["butchery:dragon_scale_armor_boots", 12],

	].forEach(en => {
		if (typeof en === "number") return d = en;
		if (typeof en === "string") return p = en;

		const [id, dmg, spd] = en;

		event.modify(id, item => {
			// console.log(Object.keys(item));
			item.maxDamage = d;
			console.log(item[p]);
			item[p](dmg);
			if (spd !== undefined) item.speed = spd;
		});
	});
});