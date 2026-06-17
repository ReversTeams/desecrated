ServerEvents.recipes(event => {

    const remove = [
        'sons_of_sins:flesh_carcass',
        'sons_of_sins:iron_and_ether',
        'biomancy:primordial_core',
        'biomancy:despoil_sickle',
        'biomancy:primordial_cradle',
        'biomancy:bio_forge',
        'bloodyhell:chalice_of_the_dammed',
        'bloodyhell:sanguinite_blood_harvester_item'
    ]

    const removeCraftingShaped = [
        'biomancy:decomposer'
    ]

    // const removeCraftingShapeless = [
    //     'biomancy:bio_forge',
    //     'biomancy:primordial_cradle'
    // ]

    remove.forEach(item => {
        event.remove({ output: item })
    })
    removeCraftingShaped.forEach(item => {
        event.remove({ output: item, type: 'minecraft:crafting_shaped' })
    })
    // removeCraftingShapeless.forEach(item => {
    //     event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
    // })

    // Sons of Sin

    event.shaped(
        Item.of('sons_of_sins:flesh_carcass'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'sons_of_sins:bottle_of_blood',
            A: '#sons_of_sins:is_flesh'
        }
    )
    event.shapeless(
        Item.of('sons_of_sins:iron_and_ether'),
        [
            'sons_of_sins:ether_ashes',
            'sons_of_sins:ether_ashes',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'minecraft:coal'
        ]
    )

    // Biomancy

    event.shaped(
        Item.of('desecratedcore:tempered_heart'),
        [
            'ABC',
            'DED',
            'CBA'
        ],
        {
            D: 'sons_of_sins:heart',
            C: 'sons_of_sins:ribs',
            A: 'sons_of_sins:muscle',
            B: 'sons_of_sins:crystallized_ether',
            E: 'desecratedcore:obelisk_heart'
        }
    )
    event.shaped(
        Item.of('biomancy:despoil_sickle'),
        [
            'AB ',
            ' BC',
            'DED'
        ],
        {
            B: '#desecrated:mystical_bone',
            D: '#sons_of_sins:is_flesh',
            A: 'reliquary:rib_bone',
            E: 'biomancy:primordial_core',
            C: 'sons_of_sins:sickle_of_struggle'
        }
    )
    event.shaped(
        Item.of('biomancy:primordial_cradle'),
        [
            'A A',
            'BCB',
            'DED'
        ],
        {
            E: 'sons_of_sins:block_of_muscles',
            A: 'biomancy:mob_fang',
            C: 'biomancy:primordial_core',
            B: 'sons_of_sins:block_of_ribs',
            D: '#forge:flesh_block'
        }
    )
    event.shaped(
        Item.of('biomancy:bio_forge'),
        [
            'A A',
            'BCB',
            'DDD'
        ],
        {
            D: 'desecratedcore:raw_meat_block',
            A: 'biomancy:mob_claw',
            C: '#desecrated:slime_chunk',
            B: 'biomancy:living_flesh'
        }
    )

    // Bloody Hell

    event.shaped(
    Item.of('bloodyhell:sanguinite_blood_harvester_item'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'minecraft:gold_ingot',
        B: 'bloodyhell:sanguinite',
        C: 'bloodyhell:rootlet_powder',
        D: 'bloodyhell:bleeding_block'
    }
)
});