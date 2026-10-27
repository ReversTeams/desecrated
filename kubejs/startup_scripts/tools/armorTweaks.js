//priority: 500
// Tools & Armor Stat Changes

ItemEvents.modification(event => {
	let d = 0;
	let p = "";
	[
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

		// CA Cultist
		405, ["concatenatedadditionstools:cultist_armor_helmet", 4],
		580, ["concatenatedadditionstools:cultist_armor_chestplate", 8],
		545, ["concatenatedadditionstools:cultist_armor_leggings", 9],
		475, ["concatenatedadditionstools:cultist_armor_boots", 3],

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