//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'hexalia:ritual_table',
        'hexalia:athame',
        'hexalia:censer',
        'hexalia:small_cauldron',
        'hexalia:mortar_and_pestle',
        'hexalia:hex_focus',
        'celestisynth:lunar_scrap',
        'spectrum:pedestal_basic_amethyst',
        'spectrum:pedestal_basic_citrine',
        'spectrum:pedestal_basic_topaz'
    ]

    const removeCraftingShaped = [
        'neepmeat:refractory_brick'
    ]

    const removeCraftingShapeless = [
        'hexalia:mutavis',
        'hexalia:ghost_powder',
        'hexalia:dream_paste',
        'hexalia:siren_paste',
        'hexalia:spirit_powder',
        'hexalia:brambleguard_salve',
        'hexalia:menders_salve',
        'hexalia:fragant_nectar'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })
    removeCraftingShaped.forEach(item => {
        event.remove({ output: item, type: 'minecraft:crafting_shaped' })
    })
    removeCraftingShapeless.forEach(item => {
        event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
    })

    event.remove({ output: 'celestisynth:lunar_scrap', type: 'minecraft:smelting' })
    event.remove({ output: 'celestisynth:lunar_scrap', type: 'minecraft:blasting' })
    event.remove({ output: 'celestisynth:starstruck_scrap', type: 'minecraft:brewing' })

    event.replaceInput(
        { input: 'hexalia:tree_resin' },
        'hexalia:tree_resin',
        '#forge:resin'
    )

    // Hexalia Recipes
    event.shaped(
        Item.of('desecratedcore:vine_key_item'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            F: 'minecraft:twisting_vines',
            G: 'minecraft:lily_pad',
            B: 'minecraft:vine',
            H: 'minecraft:glow_lichen',
            C: 'minecraft:lily_of_the_valley',
            E: '#desecrated:fate_item',
            D: 'minecraft:weeping_vines',
            A: 'hexalia:spirit_bloom',
            I: 'immersive_weathering:moss_clump'
        }
    )

    event.shaped(
        Item.of('hexalia:athame'),
        [
            'AB ',
            'C  ',
            '   '
        ],
        {
            A: 'minecraft:flint',
            C: 'minecraft:stick',
            B: 'desecratedcore:vine_key_item'
        }
    ).keepIngredient('desecratedcore:vine_key_item')

    event.shaped(
        Item.of('hexalia:censer'),
        [
            ' A ',
            'ABA',
            'CDC'
        ],
        {
            A: 'minecraft:bricks',
            C: '#minecraft:logs',
            D: 'minecraft:campfire',
            B: 'hexalia:dreamshroom'
        }
    )

    event.shaped(
        Item.of('hexalia:small_cauldron'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: '#minecraft:logs',
            B: '#minecraft:coals',
            A: 'minecraft:cobbled_deepslate',
            E: 'minecraft:cauldron',
            C: 'hexalia:dreamshroom'
        }
    )

    event.shaped(
        Item.of('hexalia:rustic_oven'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            B: 'minecraft:iron_ingot',
            A: 'minecraft:cobbled_deepslate',
            C: '#forge:furnaces',
            D: 'quark:grate'
        }
    )

    event.shaped(
        Item.of('hexalia:mortar_and_pestle'),
        [
            'AB ',
            'C  ',
            '   '
        ],
        {
            A: 'minecraft:stone',
            B: 'minecraft:bowl',
            C: 'hexalia:athame'
        }
    ).damageIngredient("hexalia:athame");

    event.shaped(
        Item.of('hexalia:hex_focus'),
        [
            ' AB',
            'ACA',
            'DA '
        ],
        {
            C: 'hexalia:mutavis',
            B: 'desecratedcore:mundane_shard',
            A: 'minecraft:oak_leaves',
            D: 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('hexalia:searing_sac', 3),
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            C: 'hexalia:sunfire_tomato',
            A: 'minecraft:fire_charge',
            B: 'minecraft:leather'
        }
    )

    event.shapeless(
        Item.of('desecratedcore:mundane_shard'),
        [
            'hexalia:spirit_bloom',
            'minecraft:amethyst_shard'
        ]
    )

    // Celestisynth

    event.shaped(
        Item.of('celestisynth:lunar_scrap'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'celestisynth:lunar_stone',
            A: 'hexalia:celestial_crystal',
            C: 'hexalia:mutavis'
        }
    )

    event.shaped(
        Item.of('desecratedcore:celestial_stone'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            B: 'celestisynth:lunar_stone',
            C: 'hexalia:celestial_bloom',
            A: 'hexalia:spirit_powder'
        }
    )

    // Spectrum

    event.shaped(
        Item.of('spectrum:pedestal_basic_citrine'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            C: 'hexalia:ritual_table',
            E: 'desecratedcore:all_node',
            D: 'spectrum:polished_basalt',
            B: 'spectrum:planed_calcite',
            A: 'spectrum:citrine_shard'
        }
    )

    event.shaped(
        Item.of('spectrum:pedestal_basic_topaz'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            C: 'hexalia:ritual_table',
            E: 'desecratedcore:all_node',
            A: 'spectrum:topaz_shard',
            D: 'spectrum:polished_basalt',
            B: 'spectrum:planed_calcite'
        }
    )

    event.shaped(
        Item.of('spectrum:pedestal_basic_amethyst'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            C: 'hexalia:ritual_table',
            E: 'desecratedcore:all_node',
            A: 'minecraft:amethyst_shard',
            D: 'spectrum:polished_basalt',
            B: 'spectrum:planed_calcite'
        }
    )

})