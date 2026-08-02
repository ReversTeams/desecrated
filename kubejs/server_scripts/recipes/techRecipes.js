//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'neepmeat:sacrificial_dagger',
        'neepmeat:projector',
        'neepmeat:asbestos',
        'neepmeat:grinder',
        'neepmeat:stirling_engine',
        'neepmeat:fluid_buffer',
        'neepmeat:small_compressor',
        'neepmeat:drill_chassis',
        'meatweapons:basic_pistol',
        'butchery:blood_grate',
        'butchery:meat_grinder',
        'neepmeat:charnel_compactor',
        'neepmeat:pedestal',
        'neepmeat:hungry_heterostructure',
        'concatenatedadditionsmachines:galvanized_iron_casing',
        'meatweapons:short_phage_ray',
        'clanginghowl:extraterrestrial_steel_nugget',
        "clanginghowl:extraterrestrial_hoe",
        "clanginghowl:drill_bit",
        "clanginghowl:extraterrestrial_sword", 
        "clanginghowl:extraterrestrial_hammer", 
        "clanginghowl:extraterrestrial_shovel", 
        "clanginghowl:extraterrestrial_pickaxe", 
        "clanginghowl:extraterrestrial_axe", 
        "clanginghowl:battery_panel", 
        "clanginghowl:industrial_adjustable_wrench"
    ]

    const removeCraftingShaped = [
        'neepmeat:refractory_brick',
        'neepmeat:rusty_metal'
    ]

    const removeCraftingShapeless = [
        'neepmeat:refractory_brick'
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

    event.remove({ output: 'clanginghowl:extraterrestrial_steel_ingot', type: 'minecraft:blasting' })

    // Butchery
    event.shaped(
        Item.of('butchery:copper_skinning_knife'),
        [
            ' A ',
            ' B ',
            '   '
        ],
        {
            B: 'minecraft:stick',
            A: 'minecraft:copper_ingot'
        }
    )

    event.shaped(
        Item.of('butchery:bone_skinning_knife'),
        [
            ' A ',
            ' B ',
            '   '
        ],
        {
            A: 'minecraft:bone',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('butchery:blood_grate'),
        [
            'ABA',
            'CDC',
            'CCC'
        ],
        {
            A: 'butchery:hook',
            B: 'minecraft:iron_trapdoor',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:barrel'
        }
    )

    event.shaped(
        Item.of('butchery:meat_grinder'),
        [
            'ABC',
            'DEE',
            ' E '
        ],
        {
            A: 'butchery:hook',
            D: 'minecraft:iron_trapdoor',
            E: 'minecraft:iron_ingot',
            B: 'minecraft:cauldron',
            C: 'minecraft:stick'
        }
    )

    event.shapeless(
        Item.of('minecraft:leather', 1),
        [
            'concatenatedadditionscore:cutting_tool',
            '#butchery:skins',
            '#butchery:skins',
            '#butchery:skins',
            '#butchery:skins'
        ]
    )

    // Concatenated Additions
    event.shaped(
        Item.of('concatenatedadditionsmachines:galvanized_iron_casing'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'concatenatedadditionsmachines:galvanized_iron',
            A: 'minecraft:iron_ingot',
            C: 'concatenatedadditionsmachines:alclad'
        }
    )

    // Neepmeat
    event.replaceInput(
        { input: 'neepmeat:internal_components' },
        'neepmeat:internal_components',
        '#desecrated:flesh_circuit'
    )

    event.shaped(
        Item.of('neepmeat:sacrificial_dagger'),
        [
            ' AB',
            'CDC',
            'EFF'
        ],
        {
            E: 'minecraft:leather',
            A: 'vampirism:blood_grinder',
            C: 'neepmeat:browne_ingot',
            D: 'neepmeat:packed_browne',
            F: 'minecraft:copper_ingot',
            B: 'butchery:diamond_hacksaw'
        }
    )

    event.shapeless(
        Item.of('neepmeat:asbestos_dust'),
        [
            '#concatenation:hammers',
            'neepmeat:asbestos'
        ]
    )

    event.shaped(
        Item.of('neepmeat:grinder'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'neepmeat:browne_ingot',
            B: 'minecraft:hopper',
            D: 'butchery:meat_grinder',
            C: 'minecraft:repeater',
            E: 'minecraft:copper_ingot',
            F: 'minecraft:piston'
        }
    )
    event.shaped(
        Item.of('neepmeat:stirling_engine'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            B: 'neepmeat:flywheel',
            A: 'minecraft:iron_ingot',
            C: 'minecraft:repeater',
            E: 'minecraft:copper_ingot',
            D: 'minecraft:piston',
            F: 'concatenatedadditionsmachines:boiler'
        }
    )
    event.shaped(
        Item.of('neepmeat:fluid_buffer'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            C: '#forge:glass',
            A: 'minecraft:iron_ingot',
            B: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('neepmeat:small_compressor'),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            E: 'neepmeat:stirling_engine',
            D: 'minecraft:iron_ingot',
            C: 'neepmeat:fluid_buffer',
            A: 'minecraft:copper_ingot',
            B: 'minecraft:piston'
        }
    )
    event.shaped(
        Item.of('neepmeat:drill_chassis'),
        [
            'ABA',
            'CDE',
            'FGF'
        ],
        {
            G: 'neepmeat:stirling_engine',
            C: 'minecraft:comparator',
            F: 'minecraft:iron_ingot',
            E: 'minecraft:repeater',
            D: 'neepmeat:pneumatic_motor',
            A: 'minecraft:copper_ingot',
            B: 'minecraft:diamond_pickaxe'
        }
    )
    event.shaped(
        Item.of('neepmeat:pneumatic_motor'),
        [
            ' AB',
            'ACC',
            ' AC'
        ],
        {
            C: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            A: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('desecratedcore:unfired_refractory_brick', 2),
        [
            'AB ',
            'BA ',
            '   '
        ],
        {
            A: 'minecraft:clay_ball',
            B: 'neepmeat:asbestos_dust'
        }
    )
    event.shaped(
        Item.of('desecratedcore:unfired_refractory_brick'),
        [
            'AB ',
            'BA ',
            '   '
        ],
        {
            B: 'minecraft:clay_ball',
            A: 'neepmeat:asbestos'
        }
    )
    event.shaped(
        Item.of('meatweapons:basic_pistol'),
        [
            'ABA',
            'CDE',
            'FG '
        ],
        {
            E: 'meatweapons:iron_barrel',
            D: 'butchery:lungs',
            B: 'butchery:heart',
            A: 'neepmeat:raw_meat_brick',
            C: 'butchery:stomach',
            F: '#desecrated:trigger_bone',
            G: 'butchery:intestines'
        }
    )

    event.shaped(
        Item.of('neepmeat:charnel_compactor'),
        [
            'ABA',
            'ACA',
            '   '
        ],
        {
            C: 'neepmeat:meat_steel_ingot',
            A: 'neepmeat:browne_ingot',
            B: 'minecraft:composter'
        }
    )

    event.shaped(
        Item.of('vampirism:blood_bottle', '{Damage:9}'),
        [
            'AAA',
            'ABA',
            '   '
        ],
        {
            B: 'minecraft:glass_bottle',
            A: 'neepmeat:blood_bubble'
        }
    )

    event.shaped(
        Item.of('neepmeat:rusty_metal', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'neepmeat:polished_metal',
            B: 'neepmeat:packed_browne'
        }
    )

    event.shaped(
        Item.of('neepmeat:pedestal'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'neepmeat:item_buffer',
            C: 'minecraft:diamond',
            E: 'neepmeat:integration_charge_crude',
            D: 'neepmeat:data_cable'
        }
    )

    event.shaped(
        Item.of('neepmeat:vascular_conduit', 32),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'incision:conductor_nerve',
            C: 'neepmeat:integration_charge_crude'
        }
    )

    event.shaped(
        Item.of('neepmeat:hungry_heterostructure'),
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            C: 'incision:conductor_nerve',
            B: 'minecraft:diamond',
            A: '#desecrated:flesh_circuit'
        }
    )

    event.shaped(
        Item.of('meatweapons:short_phage_ray'),
        [
            'AAB',
            'CDE',
            'AA '
        ],
        {
            A: 'neepmeat:meat_steel_ingot',
            D: 'neepmeat:hungry_heterostructure',
            E: 'neepmeat:divine_organ',
            B: 'neepmeat:breaker',
            C: 'meatweapons:meat_steel_barrel'
        }
    )

    // Clanging Howl

    event.shapeless(
        Item.of('clanginghowl:extraterrestrial_steel_nugget', 9),
        [
            'clanginghowl:extraterrestrial_steel_ingot'
        ]
    )

    event.shaped(
        Item.of('clanginghowl:extraterrestrial_sword'),
        [
            ' A ',
            ' A ',
            'BCB'
        ],
        {
            B: 'clanginghowl:steel_rod',
            C: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shaped(
        Item.of('clanginghowl:extraterrestrial_shovel'),
        [
            ' A ',
            ' B ',
            'BCB'
        ],
        {
            B: 'clanginghowl:steel_rod',
            C: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shaped(
        Item.of('clanginghowl:extraterrestrial_pickaxe'),
        [
            'AAA',
            ' B ',
            'BCB'
        ],
        {
            B: 'clanginghowl:steel_rod',
            C: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shaped(
        Item.of('clanginghowl:extraterrestrial_axe'),
        [
            ' AA',
            ' BA',
            'BCB'
        ],
        {
            B: 'clanginghowl:steel_rod',
            C: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shaped(
        Item.of('clanginghowl:extraterrestrial_hoe'),
        [
            'AA ',
            ' B ',
            'BCB'
        ],
        {
            B: 'clanginghowl:steel_rod',
            C: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shaped(
        Item.of('clanginghowl:extraterrestrial_hammer'),
        [
            'AAA',
            'ABA',
            'BCB'
        ],
        {
            B: 'clanginghowl:steel_rod',
            C: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shaped(
        Item.of('clanginghowl:drill_bit'),
        [
            ' AB',
            'CDA',
            'CC '
        ],
        {
            C: 'clanginghowl:extraterrestrial_steel_nugget',
            B: 'thedulling:dense_copper_ingot',
            D: 'desecratedcore:extraterrestrial_core',
            A: 'clanginghowl:extraterrestrial_steel_ingot'
        }
    )

    event.shapeless(
        Item.of('clanginghowl:battery_panel'),
        [
            'desecratedcore:extraterrestrial_core',
            'clanginghowl:diamond_diode',
            'clanginghowl:diamond_diode',
            'clanginghowl:redstone_wire',
            'clanginghowl:redstone_wire',
            'clanginghowl:energy_battery',
            'clanginghowl:extraterrestrial_steel_plate',
            'thedulling:dense_copper_ingot'
        ]
    )

    event.shaped(
        Item.of('clanginghowl:industrial_adjustable_wrench'),
        [
            'AB ',
            'ACD',
            ' E '
        ],
        {
            B: 'thedulling:ultra_dense_copper_ingot',
            C: 'desecratedcore:extraterrestrial_core',
            E: 'clanginghowl:steel_rod',
            D: 'clanginghowl:battery_panel',
            A: 'clanginghowl:extraterrestrial_steel_plate'
        }
    )

    event.recipes.minecraft.smelting(
        'neepmeat:refractory_brick',
        'desecratedcore:unfired_refractory_brick'
    ).xp(0.1).cookingTime(100);
    event.recipes.minecraft.blasting(
        'neepmeat:refractory_brick',
        'desecratedcore:unfired_refractory_brick'
    ).xp(0.1).cookingTime(50);
});
