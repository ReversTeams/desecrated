ServerEvents.recipes(event => {
    event.remove({ mod: 'create' })

    event.shapeless(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}'),
        [
            'create:wrench'
        ]
    )

    // //This is stupid
    // event.shapeless(
    //     Item.of('create:wrench'),
    //     [
    //         Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}')
    //     ]
    // )
});