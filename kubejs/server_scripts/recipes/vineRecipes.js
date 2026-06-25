//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'hexalia:ritual_table',
        'hexalia:athame',
        'hexalia:censer',
        'hexalia:small_cauldron',
        'hexalia:mortar_and_pestle',
        'hexalia:hex_focus'
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
    )

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

    event.shapeless(
        Item.of('desecratedcore:mundane_shard'),
        [
            'hexalia:spirit_bloom',
            'minecraft:amethyst_shard'
        ]
    )

})