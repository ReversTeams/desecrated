//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'otherverse:cinnabar',
        'patchouli:guide_book',
        'otherverse:chalk',
        'otherverse:demesne_beacon',
        'goety:soul_emerald'
    ]

    const removeCraftingShaped = [
        'goety:cursed_ingot',
        'goety:shade_stone',
        'minecraft:enchanting_table'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    removeCraftingShaped.forEach(item => {
        event.remove({ output: item, type: 'minecraft:crafting_shaped' })
    })

    event.replaceInput(
        { mod: 'goety' },
        '#goety:pedestals',
        'goety:dark_altar'
    )

    event.replaceInput(
        { output: 'goety:totem_of_souls', type: 'minecraft:crafting_shaped' },
        'minecraft:soul_lantern',
        'goety:totem_of_roots'
    )

    // Pact Magic Recipes
    event.shaped(
        Item.of('desecratedcore:practitioner_key_item'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'concatenatedadditionstools:experience_orb',
            C: '#desecrated:fate_item',
            B: 'minecraft:paper'
        }
    )

    event.shapeless(
        Item.of('otherverse:salt', 2),
        [
            'hexalia:salt',
            'otherverse:quicksilver'
        ]
    )

    event.shapeless(
        Item.of('otherverse:sulfur', 2),
        [
            'butchery:sulfur',
            'otherverse:quicksilver'
        ]
    )

    event.shapeless(
        Item.of('otherverse:cinnabar', 9),
        [
            'otherverse:cinnabar_block'
        ]
    )

    event.shapeless(
        Item.of('otherverse:cinnabar'),
        [
            'otherverse:salt',
            'otherverse:quicksilver',
            'otherverse:sulfur'
        ]
    )

    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"otherverse:essentials"}'),
        [
            'desecratedcore:practitioner_key_item',
            'minecraft:book',
            'minecraft:string',
            'minecraft:iron_sword',
            'minecraft:bone',
            'minecraft:oak_sapling',
            'minecraft:sand'
        ]
    ).keepIngredient('desecratedcore:practitioner_key_item')

    event.shapeless(
        Item.of('otherverse:chalk'),
        [
            'desecratedcore:practitioner_key_item',
            'minecraft:calcite',
            'minecraft:calcite'
        ]
    ).keepIngredient('desecratedcore:practitioner_key_item')

    event.shaped(
        Item.of('otherverse:demesne_beacon'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: 'quark:lime_framed_glass',
            B: 'celestisynth:eyebomination',
            E: 'otherverse:cinnabar',
            C: 'vampirism:vampire_beacon',
            D: 'sons_of_sins:soul_steel'
        }
    )


    event.shaped(
        Item.of('desecratedcore:sight'),
        [
            ' C ',
            'CAC',
            ' B '
        ],
        {
            A: 'incision:lens_glass_pane',
            C: 'minecraft:gold_ingot',
            B: 'minecraft:copper_ingot'
        }
    )

    // Goety
    event.shaped(
        Item.of('goety:cursed_ingot'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'dungeonnowloading:spawner_fragment',
            B: 'goety:totem_of_roots'
        }
    ).keepIngredient('goety:totem_of_roots')

    event.shaped(
        Item.of('goety:cursed_ingot'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'dungeonnowloading:spawner_fragment',
            B: 'goety:totem_of_souls'
        }
    ).replaceIngredient('goety:totem_of_souls', 'goety:spent_totem')

    event.shaped(
        Item.of('goety:dark_altar'),
        [
            '   ',
            'ABA',
            'CDC'
        ],
        {
            A: 'minecraft:emerald',
            D: 'goety:pedestal',
            B: 'goety:cursed_ingot',
            C: 'goety:shade_stone_bricks'
        }
    )

    event.shaped(
        Item.of('goety:soul_emerald'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'goety:empty_focus',
            A: 'goety:magic_emerald'
        }
    )

    // Patchouli Guide Books

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"otherverse:implementum"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            E: 'minecraft:iron_axe',
            B: 'minecraft:iron_sword',
            F: 'minecraft:iron_shovel',
            C: 'minecraft:iron_pickaxe',
            D: 'otherverse:cinnabar',
            A: 'minecraft:book'
        }
    )

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"otherverse:demesnes"}'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            C: '#forge:fences',
            D: 'celestisynth:eyebomination',
            A: 'minecraft:book',
            B: '#minecraft:doors',
            E: 'otherverse:cinnabar',
        }
    )

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"otherverse:famulus"}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            D: 'minecraft:gold_ingot',
            B: 'minecraft:lead',
            C: 'minecraft:wheat',
            E: 'minecraft:bone',
            F: 'otherverse:cinnabar',
            A: 'minecraft:book'
        }
    )

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"otherverse:ruins"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'minecraft:sculk',
            A: 'minecraft:soul_torch',
            C: 'minecraft:book'
        }
    )

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"otherverse:shamanism"}'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            E: 'minecraft:dirt',
            B: 'minecraft:flint_and_steel',
            A: 'minecraft:feather',
            C: 'minecraft:book',
            D: 'minecraft:water_bucket'
        }
    )

    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"butchery:butchers_guide"}'),
        [
            'minecraft:book',
            '#forge:raw_meat'
        ]
    )

    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'),
        [
            'minecraft:book',
            'minecraft:glass'
        ]
    )

    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"animus:codex_animus"}'),
        [
            'minecraft:book',
            'bloodmagic:blankslate'
        ]
    )

    event.shapeless(
        Item.of('patchouli:guide_book', '{"patchouli:book":"parcool:parcool_guide"}'),
        [
            'minecraft:book',
            'minecraft:feather',
            'minecraft:feather',
            'minecraft:feather'
        ]
    )

    event.shapeless(
        Item.of('bloodyhell:unknown_guide_book'),
        [
            'minecraft:book',
            'bloodyhell:sanguinite'
        ]
    )

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"goety:witches_brew"}'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            D: 'perdition:pyrite',
            B: 'spectrum:purple_pigment',
            C: 'minecraft:book',
            A: 'reliquary:witch_hat'
        }
    )

    event.shaped(
        Item.of('patchouli:guide_book', '{"patchouli:book":"goety:black_book"}'),
        [
            'AB ',
            'CDE',
            ' EF'
        ],
        {
            A: 'minecraft:yellow_dye',
            C: 'minecraft:leather',
            B: 'minecraft:emerald',
            E: 'minecraft:black_dye',
            D: 'minecraft:book',
            F: 'desecratedcore:practitioner_key_item'
        }
    ).keepIngredient('desecratedcore:practitioner_key_item')

})