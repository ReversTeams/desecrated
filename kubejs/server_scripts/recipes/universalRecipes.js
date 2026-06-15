ServerEvents.recipes(event => {
    event.remove({ mod: 'create' })

    // event.replaceInput(
    //     { input: '#butchery:raw_meats' },
    //     '#butchery:raw_meats',
    //     '#forge:raw_meat'
    // )

    // event.replaceInput(
    //     { input: '#biomancy:raw_meats' },
    //     '#biomancy:raw_meats',
    //     '#forge:raw_meat'
    // )

    event.shapeless(
    Item.of('desecratedcore:raw_meat_block'),
    [
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat',
        '#forge:raw_meat'
    ]
)

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