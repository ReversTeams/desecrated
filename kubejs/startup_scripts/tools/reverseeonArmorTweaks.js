//priority: 500
// Tools & Armor Stat Changes
//requires: reverseeon

ItemEvents.modification(event => {
	
	let d = 0;
	let p = "";
	[
		/////////////
		//  Armor  //
		/////////////
		"setArmorProtection",

		// Reverse Eon Arcanist
		730, ["reverseeon:arcanist_helmet", 9],
		880, ["reverseeon:arcanist_chestplate", 14],
		450, ["reverseeon:arcanist_leggings", 12],
		590, ["reverseeon:arcanist_boots", 8],

		// Reverse Eon Vertin
		730, ["reverseeon:vertin_hat", 9],
		880, ["reverseeon:vertin_suit", 14],
		450, ["reverseeon:vertin_leggings", 12],
		590, ["reverseeon:vertin_boots", 8],

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