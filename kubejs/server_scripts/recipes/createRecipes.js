//priority: 200
// Recipes
//requires: create

ServerEvents.recipes(event => {
    event.remove({ mod: 'create' })

    event.shapeless(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}'),
        [
            'create:wrench'
        ]
    )

    event.shapeless(
        Item.of('create:wrench'),
        [
            Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}').strongNBT()
        ]
    )

    // event.recipes.minecraft.smelting(
    //     'concatenatedadditionsmachines:zinc_ingot',
    //     'create:raw_zinc'
    // ).xp(0.1).cookingTime(100);
    // event.recipes.minecraft.blasting(
    //     'concatenatedadditionsmachines:zinc_ingot',
    //     'create:raw_zinc'
    // ).xp(0.1).cookingTime(50);
});