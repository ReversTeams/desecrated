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
        'artificers_armory:wrench_diamond',
        'clockwork:clockwork_wings',
        'clockwork:clockwork_potion_sprayer',
        'clockwork:clockwork_flamethrower',
        'artificers_armory:tuning_fork_wood',
        'artificers_armory:tuning_fork_stone',
        'artificers_armory:tuning_fork_copper',
        'artificers_armory:tuning_fork_iron',
        'artificers_armory:tuning_fork_gold',
        'artificers_armory:tuning_fork_diamond'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    event.replaceInput(
        { mod: 'clockwork' },
        'minecraft:gold',
        'desecratedcore:brass_ingot'
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

    // Clockwork
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
        Item.of('desecratedcore:brass_whistle'),
        [
            'ABG',
            'CDC',
            'EF '
        ],
        {
            A: 'minecraft:comparator',
            B: 'desecratedcore:brass_ingot',
            F: 'minecraft:redstone',
            D: 'clockwork:clockwork_wings',
            E: 'desecratedcore:brass_block',
            C: 'clockwork:clockwork_gear',
            G: '#desecrated:advanced_wrenches'
        }
    ).damageIngredient("#desecrated:advanced_wrenches");

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
            C: '#desecrated:advanced_wrenches',
            F: 'minecraft:black_wool',
            A: 'minecraft:diamond_pickaxe',
            D: 'clockwork:clockwork_gear'
        }
    ).damageIngredient("#desecrated:advanced_wrenches");

    event.shaped(
        Item.of('clockwork:clockwork_wings'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            C: 'minecraft:phantom_membrane',
            E: 'minecraft:leather',
            F: 'desecratedcore:brass_ingot',
            B: '#desecrated:advanced_tuning_forks',
            D: 'minecraft:elytra',
            A: 'clockwork:clockwork_gear'
        }
    ).damageIngredient("#desecrated:advanced_tuning_forks");

    event.shaped(
        Item.of('clockwork:clockwork_flamethrower'),
        [
            'ABC',
            'DEC',
            'ED '
        ],
        {
            C: 'desecratedcore:brass_ingot',
            D: 'minecraft:iron_ingot',
            E: 'minecraft:blaze_powder',
            A: '#desecrated:advanced_tuning_forks',
            B: 'clockwork:clockwork_gear'
        }
    ).damageIngredient("#desecrated:advanced_tuning_forks");

    event.shaped(
        Item.of('clockwork:clockwork_potion_sprayer'),
        [
            ' A ',
            'BCD',
            'EF '
        ],
        {
            A: '#forge:glass',
            D: 'minecraft:iron_ingot',
            B: 'minecraft:quartz',
            E: '#desecrated:advanced_tuning_forks',
            F: 'minecraft:copper_ingot',
            C: 'clockwork:clockwork_gear'
        }
    ).damageIngredient("#desecrated:advanced_tuning_forks");

    // Artificer Armory Recipes
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

    event.shaped(
        Item.of('artificers_armory:tuning_fork_wood'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            C: 'desecratedcore:amethyst_tuning_wand',
            D: 'minecraft:stick',
            A: 'minecraft:oak_planks',
            B: 'clockwork:clockwork_gear'
        }
    )
    event.shaped(
        Item.of('artificers_armory:tuning_fork_stone'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            C: 'desecratedcore:amethyst_tuning_wand',
            D: 'minecraft:stick',
            A: 'minecraft:cobblestone',
            B: 'clockwork:clockwork_gear'
        }
    )
    event.shaped(
        Item.of('artificers_armory:tuning_fork_copper'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            C: 'desecratedcore:amethyst_tuning_wand',
            D: 'minecraft:stick',
            A: 'minecraft:copper_ingot',
            B: 'clockwork:clockwork_gear'
        }
    )
    event.shaped(
        Item.of('artificers_armory:tuning_fork_iron'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            A: 'minecraft:iron_ingot',
            C: 'desecratedcore:amethyst_tuning_wand',
            D: 'minecraft:stick',
            B: 'clockwork:clockwork_gear'
        }
    )
    event.shaped(
        Item.of('artificers_armory:tuning_fork_gold'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            A: 'minecraft:gold_ingot',
            C: 'desecratedcore:amethyst_tuning_wand',
            D: 'minecraft:stick',
            B: 'clockwork:clockwork_gear'
        }
    )
    event.shaped(
        Item.of('artificers_armory:tuning_fork_diamond'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            C: 'desecratedcore:amethyst_tuning_wand',
            A: 'minecraft:diamond',
            D: 'minecraft:stick',
            B: 'clockwork:clockwork_gear'
        }
    )

})