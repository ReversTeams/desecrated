//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'sons_of_sins:flesh_carcass',
        'sons_of_sins:iron_and_ether',
        'biomancy:primordial_core',
        'biomancy:despoil_sickle',
        'biomancy:primordial_cradle',
        'biomancy:bio_forge',
        'bloodyhell:chalice_of_the_dammed',
        'bloodyhell:sanguinite_blood_harvester_item',
        'concatenatedadditionsartefacts:protection_charm',
        'bloodyhell:main_blood_altar',
        'bloodyhell:unknown_portal_item',
        'bloodyhell:blasphemite'
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

    // General

    event.shapeless(
        Item.of('concatenatedadditionsartefacts:protection_charm'),
        [
            'minecraft:paper',
            'sons_of_sins:ether_ashes',
            'minecraft:ink_sac',
            'minecraft:red_dye'
        ]
    )

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

    event.shaped(
        Item.of('bloodyhell:main_blood_altar'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            E: 'bloodyhell:stripped_soul_log',
            D: 'bloodyhell:corrupted_blood_flask',
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'bloodyhell:sanguinite_block',
            F: 'bloodyhell:rhnull_block',
            B: 'bloodyhell:great_ancient_rhnull_gem'
        }
    )

    event.shaped(
        Item.of('bloodyhell:unknown_portal_item'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            D: 'desecratedcore:forbidden_knowledge',
            C: 'bloodyhell:unknown_entity_finger',
            A: 'bloodyhell:rhnull_block',
            B: 'bloodyhell:rhnull_tank'
        }
    )

    event.custom({
        type: "bloodyhell:condensing",
        fluid_input: {
            "amount": 1000,
            "fluid": "bloodyhell:viscous_blasphemy_source"
        },
        item_input: {
            "item": "bloodyhell:raw_blasphemite"
        },
        output: {
            "item": "bloodyhell:blasphemite"
        }
    });
});