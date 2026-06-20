//priority: 200
// Recipes

ServerEvents.recipes(event => {
    event.remove({ mod: 'create' })

    const remove = [
        'fracture:infected_core',
        'fishermens_trap:fishtrap'
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

    event.shaped(
        Item.of('fishermens_trap:fishtrap'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'butchery:hook',
            B: 'farmersdelight:canvas',
            A: 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('supplementaries:lunch_basket'),
        [
            ' A ',
            'ABA',
            'AAA'
        ],
        {
            A: 'farmersdelight:canvas',
            B: '#minecraft:wool_carpets'
        }
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