//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'clockwork:clockwork_gear',
        'clockwork:clockwork_drill',
        'artificers_armory:wrench_wood',
        'artificers_armory:wrench_stone',
        'artificers_armory:wrench_copper',
        'artificers_armory:wrench_iron',
        'artificers_armory:wrench_gold',
        'artificers_armory:wrench_diamond'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    event.replaceInput(
        { mod: 'clockwork' },
        'minecraft:gold',
        'desecratedcore:brass'
    )

    // Concatenated Additions
    event.shaped(
        Item.of('desecratedcore:brass_ingot', 2),
        [
            'ABC',
            'CD ',
            '   '
        ],
        {
            A: '#concatenation:hammers',
            B: '#concatenation:firing_item',
            D: 'concatenatedadditionsmachines:crushed_zinc',
            C: 'concatenatedadditionsmachines:crushed_copper'
        }
    )

    // Artificer Armory Recipes
    event.shaped(
        Item.of('desecratedcore:artificer_key_item'),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            C: 'minecraft:leather_chestplate',
            A: 'concatenatedadditionstools:experience_orb',
            B: 'minecraft:amethyst_shard',
            D: '#desecrated:fate_item',
            E: 'minecraft:chainmail_chestplate'
        }
    )

    event.shaped(
        Item.of('clockwork:clockwork_gear'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'desecratedcore:brass_ingot',
            B: 'desecratedcore:amethyst_reinforced_iron_ingot'
        }
    )

    event.shaped(
        Item.of('desecratedcore:amethyst_tuning_wand'),
        [
            'ABC',
            ' DB',
            'D  '
        ],
        {
            A: 'desecratedcore:artificer_key_item',
            D: 'minecraft:iron_ingot',
            B: 'minecraft:redstone',
            C: 'minecraft:amethyst_shard'
        }
    ).keepIngredient('desecratedcore:artificer_key_item')

    event.shaped(
        Item.of('clockwork:clockwork_drill'),
        [
            'ABC',
            'DED',
            'FGF'
        ],
        {
            E: 'concatenatedadditionsmachines:boiler',
            B: 'ironchest:iron_chest',
            G: 'desecratedcore:brass_ingot',
            C: '#desecrated:advanced_wrench',
            F: 'minecraft:black_wool',
            A: 'minecraft:diamond_pickaxe',
            D: 'clockwork:clockwork_gear'
        }
    ).damageIngredient("#desecrated:advanced_wrench");

    event.shaped(
    Item.of('artificers_armory:wrench_wood'),
    [
        'ABA',
        ' C ',
        ' D '
    ],
    {
        D: 'minecraft:stick',
        A: 'minecraft:oak_planks',
        B: 'clockwork:clockwork_gear',
        C: 'supplementaries:wrench'
    }
)
event.shaped(
    Item.of('artificers_armory:wrench_stone'),
    [
        'ABA',
        ' C ',
        ' D '
    ],
    {
        D: 'minecraft:stick',
        A: 'minecraft:cobblestone',
        B: 'clockwork:clockwork_gear',
        C: 'supplementaries:wrench'
    }
)
event.shaped(
    Item.of('artificers_armory:wrench_copper'),
    [
        'ABA',
        ' C ',
        ' D '
    ],
    {
        D: 'minecraft:stick',
        A: 'minecraft:copper_ingot',
        B: 'clockwork:clockwork_gear',
        C: 'supplementaries:wrench'
    }
)
event.shaped(
    Item.of('artificers_armory:wrench_iron'),
    [
        'ABA',
        ' C ',
        ' D '
    ],
    {
        A: 'minecraft:iron_ingot',
        D: 'minecraft:stick',
        B: 'clockwork:clockwork_gear',
        C: 'supplementaries:wrench'
    }
)
event.shaped(
    Item.of('artificers_armory:wrench_gold'),
    [
        'ABA',
        ' C ',
        ' D '
    ],
    {
        A: 'minecraft:gold_ingot',
        D: 'minecraft:stick',
        B: 'clockwork:clockwork_gear',
        C: 'supplementaries:wrench'
    }
)
event.shaped(
    Item.of('artificers_armory:wrench_diamond'),
    [
        'ABA',
        ' C ',
        ' D '
    ],
    {
        A: 'minecraft:diamond',
        D: 'minecraft:stick',
        B: 'clockwork:clockwork_gear',
        C: 'supplementaries:wrench'
    }
)

})