ServerEvents.recipes(event => {

    const remove = [
        'neepmeat:sacrificial_dagger',
        'neepmeat:projector',
        'neepmeat:asbestos',
        'neepmeat:grinders',
        'neepmeat:stirling_engine',
        'neepmeat:fluid_buffer',
        'neepmeat:small_compressor',
        'neepmeat:drill_chassis'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Butchery

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
            C: 'minecraft:iron_ingot',
            D: 'minecraft:iron_block',
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
            A: 'minecraft:iron_ingot',
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
            F: 'minecraft:blast_furnace'
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
            C: 'minecraft:glass',
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

    event.recipes.minecraft.smelting(
        'neepmeat:refractory_brick',
        'desecratedcore:unfired_refractory_brick'
    ).xp(0.1).cookingTime(100);
    event.recipes.minecraft.blasting(
        'neepmeat:refractory_brick',
        'desecratedcore:unfired_refractory_brick'
    ).xp(0.1).cookingTime(50);
});
