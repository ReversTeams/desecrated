//priority: 500
// Tools & Armor Stat Changes
//requires: modestmining

ItemEvents.modification(event => {

	let d = 0;
	let p = "";
	[
		/////////////
		//  Armor  //
		/////////////
		"setArmorProtection",

		// MM Prismarite
		330, ["modestmining:prismarite_helmet", 3],
		480, ["modestmining:prismarite_chestplate", 8],
		450, ["modestmining:prismarite_leggings", 6],
		390, ["modestmining:prismarite_boots", 3],

		// MM Valkyrium
		266, ["modestmining:valkyrium_helmet", 3],
		416, ["modestmining:valkyrium_chestplate", 8],
		386, ["modestmining:valkyrium_leggings", 6],
		326, ["modestmining:valkyrium_boots", 3],

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