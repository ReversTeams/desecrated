//priority: 500
// Tools & Armor Stat Changes
//requires: hexalia

ItemEvents.modification(event => {

	let d = 0;
	let p = "";
	[
		/////////////
		//  Armor  //
		/////////////
		"setArmorProtection",

		// Hexalia Bloomwrap
		660, ["hexalia:bloomwrap_hat", 5],
		960, ["hexalia:bloomwrap_robes", 10],
		900, ["hexalia:bloomwrap_leggings", 8],
		780, ["hexalia:bloomwrap_boots", 5],

		// Hexalia Moonweave
		363, ["hexalia:moonweave_hood", 3],
		528, ["hexalia:moonweave_mantle", 8],
		495, ["hexalia:moonweave_bindings", 6],
		429, ["hexalia:moonweave_footwraps", 3],

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