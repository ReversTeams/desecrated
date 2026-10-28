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
		4730, ["reverseeon:arcanist_helmet", 14],
		6880, ["reverseeon:arcanist_chestplate", 19],
		6450, ["reverseeon:arcanist_leggings", 14],
		5590, ["reverseeon:arcanist_boots", 12],

		// Reverse Eon Vertin
		4730, ["reverseeon:vertin_hat", 14],
		6880, ["reverseeon:vertin_suit", 19],
		6450, ["reverseeon:vertin_leggings", 14],
		5590, ["reverseeon:vertin_boots", 12],

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