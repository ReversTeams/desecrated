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
		263, ["hexalia:bloomwrap_hat", 4],
		428, ["hexalia:bloomwrap_robes", 9],
		395, ["hexalia:bloomwrap_leggings", 7],
		329, ["hexalia:bloomwrap_boots", 4],

		// Hexalia Moonweave
		263, ["hexalia:moonweave_hood", 3],
		428, ["hexalia:moonweave_mantle", 8],
		395, ["hexalia:moonweave_bindings", 6],
		329, ["hexalia:moonweave_footwraps", 3],

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