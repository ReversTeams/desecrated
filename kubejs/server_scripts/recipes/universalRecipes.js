//priority: 200
// Recipes

ServerEvents.recipes(event => {
    event.remove({ mod: 'create' })

    const remove = [
        'fracture:infected_core'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    event.replaceInput(
        { input: 'minecraft:furnace' },
        'minecraft:furnace',
        '#forge:furnaces'
    )

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