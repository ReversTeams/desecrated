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
        'artificers_armory:tuning_fork_diamond',
        'reliquary:void_tear',
        'reliquary:infernal_tear',
        'minecraft:enchanting_table',
        'ascendant_arcana:copper_enchanting_table',
        'celestisynth:celestial_core',
        'ascendant_arcana:infusion_smithing_template',
        'artificers_armory:chime_wood',
        'artificers_armory:chime_stone',
        'artificers_armory:chime_copper',
        'artificers_armory:chime_iron',
        'artificers_armory:chime_gold',
        'artificers_armory:chime_diamond',
        'artificers_armory:blight_wood',
        'artificers_armory:blight_stone',
        'artificers_armory:blight_copper',
        'artificers_armory:blight_iron',
        'artificers_armory:blight_gold',
        'artificers_armory:blight_diamond',
        'artificers_armory:censer_wood',
        'artificers_armory:censer_stone',
        'artificers_armory:censer_copper',
        'artificers_armory:censer_iron',
        'artificers_armory:censer_gold',
        'artificers_armory:censer_diamond',
        'artificers_armory:firebrand_wood',
        'artificers_armory:firebrand_stone',
        'artificers_armory:firebrand_copper',
        'artificers_armory:firebrand_iron',
        'artificers_armory:firebrand_gold',
        'artificers_armory:firebrand_diamond',
        'artificers_armory:oculus_wood',
        'artificers_armory:oculus_stone',
        'artificers_armory:oculus_copper',
        'artificers_armory:oculus_iron',
        'artificers_armory:oculus_gold',
        'artificers_armory:oculus_diamond',
        'artificers_armory:sprig_wood',
        'artificers_armory:sprig_stone',
        'artificers_armory:sprig_copper',
        'artificers_armory:sprig_iron',
        'artificers_armory:sprig_gold',
        'artificers_armory:sprig_diamond',
        'artificers_armory:spirit_candle_wood',
        'artificers_armory:spirit_candle_stone',
        'artificers_armory:spirit_candle_copper',
        'artificers_armory:spirit_candle_iron',
        'artificers_armory:spirit_candle_gold',
        'artificers_armory:spirit_candle_diamond',
        'concatenatedadditionstools:sublime_gold_sword',
        'concatenatedadditionstools:sublime_gold_giant_sword',
        'concatenatedadditionstools:sublime_gold_pickaxe',
        'concatenatedadditionstools:sublime_gold_axe',
        'concatenatedadditionstools:sublime_gold_shovel',
        'concatenatedadditionstools:sublime_gold_hoe',
        'reliquary:angelheart_vial',
        'reliquary:angelic_feather',
        'reliquary:phoenix_down',
        'reliquary:alkahestry_tome',
        'reliquary:serpent_staff',
        'reliquary:rending_gale',
        'reliquary:glacial_staff',
        'reliquary:pyromancer_staff',
        'reliquary:sojourner_staff',
        'reliquary:lantern_of_paranoia',
        'reliquary:interdiction_torch',
        'reliquary:salamander_eye',
        'reliquary:magicbane',
        'reliquary:rod_of_lyssa',
        'reliquary:void_tear',
        'reliquary:salamander_eye',
        'reliquary:hero_medallion',
        'torchmaster:feral_flare_lantern',
        'torchmaster:frozen_pearl',
        'reliquary:shears_of_winter'
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

    event.shaped(
        Item.of('concatenatedadditionstools:kestrel_r'),
        [
            'ABC',
            'DCE',
            'FGA'
        ],
        {
            G: 'reliquary:rending_gale',
            B: 'reliquary:void_tear',
            A: 'concatenatedadditionstools:glowing_gold_block',
            C: 'bloodyhell:rhnull',
            F: 'concatenatedadditionstools:kestrel',
            D: 'reliquary:magicbane',
            E: Item.of('ascendant_arcana:relic', '{RelicStrength:5,RelicType:0}').strongNBT()
        }
    )

    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_hoe'),
        [
            'AA ',
            ' BC',
            ' B '
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'reliquary:midas_touchstone',
            B: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')
    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_sword'),
        [
            ' A ',
            ' AB',
            ' C '
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            B: 'reliquary:midas_touchstone',
            C: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')
    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_giant_sword'),
        [
            ' AA',
            'AAA',
            'BAC'
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'reliquary:midas_touchstone',
            B: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')
    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_pickaxe'),
        [
            'AAA',
            ' BC',
            ' B '
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'reliquary:midas_touchstone',
            B: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')
    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_axe'),
        [
            ' AA',
            ' BA',
            ' BC'
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'reliquary:midas_touchstone',
            B: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')
    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_axe'),
        [
            'AA ',
            'AB ',
            ' BC'
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'reliquary:midas_touchstone',
            B: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')
    event.shaped(
        Item.of('concatenatedadditionstools:sublime_gold_shovel'),
        [
            ' A ',
            ' BC',
            ' B '
        ],
        {
            A: 'concatenatedadditionstools:glowing_gold',
            C: 'reliquary:midas_touchstone',
            B: 'concatenatedadditionstools:gold_stick'
        }
    ).keepIngredient('reliquary:midas_touchstone')

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
            A: '#minecraft:planks',
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
    event.shaped(
        Item.of('artificers_armory:blight_wood'),
        [
            'AAB',
            ' CD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            B: 'minecraft:spider_eye',
            A: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('artificers_armory:blight_stone'),
        [
            'AAB',
            ' CD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            B: 'minecraft:spider_eye',
            A: 'minecraft:cobblestone'
        }
    )
    event.shaped(
        Item.of('artificers_armory:blight_iron'),
        [
            'AAB',
            ' CD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            B: 'minecraft:fermented_spider_eye',
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:blight_copper'),
        [
            'AAB',
            ' CD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            B: 'minecraft:spider_eye',
            A: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:blight_gold'),
        [
            'AAB',
            ' CD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            B: 'minecraft:fermented_spider_eye',
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:blight_diamond'),
        [
            'AAB',
            ' CD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            B: 'butchery:poison_sac',
            A: 'minecraft:diamond'
        }
    )

    // event.shaped(
    //     Item.of('artificers_armory:chime_wood'),
    //     [
    //         'ABA',
    //         ' C ',
    //         ' D '
    //     ],
    //     {
    //         C: 'desecratedcore:brass_ingot',
    //         B: '#minecraft:buttons',
    //         D: 'minecraft:stick',
    //         A: '#minecraft:planks'
    //     }
    // ).stage('Crimson Artificer');

    event.shaped(
        Item.of('desecratedcore:spectral_dust', 12),
        [
            'ABB',
            'BB ',
            '   '
        ],
        {
            B: 'minecraft:glowstone_dust',
            A: 'desecratedcore:artificer_key_item'
        }
    ).keepIngredient('desecratedcore:artificer_key_item')
    event.shaped(
        Item.of('desecratedcore:brass_part'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'desecratedcore:brass_ingot',
            B: 'desecratedcore:spectral_dust'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_wood'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_wood'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_stone'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: 'minecraft:cobblestone'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_iron'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_copper'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_gold'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:chime_diamond'),
        [
            'ABA',
            ' C ',
            ' D '
        ],
        {
            C: 'desecratedcore:brass_part',
            B: '#minecraft:buttons',
            D: 'minecraft:stick',
            A: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_wood'),
        [
            ' AB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_stone'),
        [
            ' AB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: 'minecraft:cobblestone'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_stone'),
        [
            ' AB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: 'minecraft:cobblestone'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_copper'),
        [
            ' AB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_iron'),
        [
            'FAB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: 'minecraft:iron_ingot',
            F: '#forge:resin'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_gold'),
        [
            'FAB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: 'minecraft:gold_ingot',
            F: '#forge:resin'
        }
    )
    event.shaped(
        Item.of('artificers_armory:censer_diamond'),
        [
            'FAB',
            'CBD',
            'C  '
        ],
        {
            D: 'desecratedcore:brass_part',
            C: 'minecraft:stick',
            A: 'minecraft:string',
            B: 'minecraft:diamond',
            F: 'hexalia:spirit_powder'
        }
    )
    event.shaped(
        Item.of('artificers_armory:firebrand_wood'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: 'minecraft:leather',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:torch',
            D: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artificers_armory:firebrand_stone'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: 'minecraft:cobblestone',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:torch',
            D: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artificers_armory:firebrand_copper'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: 'minecraft:copper_ingot',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:torch',
            D: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artificers_armory:firebrand_iron'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: 'minecraft:iron_ingot',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:soul_torch',
            D: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artificers_armory:firebrand_gold'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: 'minecraft:gold_ingot',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:soul_torch',
            D: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artificers_armory:firebrand_diamond'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: 'minecraft:diamond',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'reliquary:interdiction_torch',
            D: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artificers_armory:oculus_wood'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:ender_pearl',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            B: '#minecraft:planks',
            D: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        Item.of('artificers_armory:oculus_stone'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:ender_pearl',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            B: 'minecraft:cobblestone',
            D: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        Item.of('artificers_armory:oculus_copper'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:ender_pearl',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            B: 'minecraft:copper_ingot',
            D: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        Item.of('artificers_armory:oculus_iron'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:ender_eye',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            B: 'minecraft:iron_ingot',
            D: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        Item.of('artificers_armory:oculus_gold'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'minecraft:ender_eye',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            B: 'minecraft:gold_ingot',
            D: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        Item.of('artificers_armory:oculus_diamond'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: 'reliquary:nebulous_heart',
            C: 'desecratedcore:amethyst_reinforced_iron_ingot',
            B: 'minecraft:diamond',
            D: '#minecraft:wooden_slabs'
        }
    )
    event.shaped(
        Item.of('artificers_armory:sprig_wood'),
        [
            'AAB',
            'ACD',
            'C  '
        ],
        {
            B: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: '#forge:seeds',
            C: 'minecraft:stick',
            A: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('artificers_armory:sprig_stone'),
        [
            'AAB',
            'ACD',
            'C  '
        ],
        {
            B: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: '#forge:seeds',
            C: 'minecraft:stick',
            A: 'minecraft:cobblestone'
        }
    )
    event.shaped(
        Item.of('artificers_armory:sprig_copper'),
        [
            'AAB',
            'ACD',
            'C  '
        ],
        {
            B: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: '#forge:seeds',
            C: 'minecraft:stick',
            A: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:sprig_iron'),
        [
            'AAB',
            'ACD',
            'C  '
        ],
        {
            B: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: 'hexalia:lotus_flower',
            C: 'minecraft:stick',
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:sprig_gold'),
        [
            'AAB',
            'ACD',
            'C  '
        ],
        {
            B: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: 'hexalia:lotus_flower',
            C: 'minecraft:stick',
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:sprig_diamond'),
        [
            'AAB',
            'ACD',
            'C  '
        ],
        {
            B: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: 'hexalia:ancient_seed',
            C: 'minecraft:stick',
            A: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('artificers_armory:spirit_candle_wood'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            C: 'supplementaries:candle_holder',
            B: 'minecraft:rotten_flesh',
            F: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:bone',
            D: 'minecraft:string',
            E: 'minecraft:oak_planks'
        }
    )
    event.shaped(
        Item.of('artificers_armory:spirit_candle_wood'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            C: 'supplementaries:candle_holder_light_blue',
            B: 'minecraft:rotten_flesh',
            F: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:bone',
            D: 'minecraft:string',
            E: 'minecraft:cobblestone'
        }
    )
    event.shaped(
        Item.of('artificers_armory:spirit_candle_copper'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            C: 'supplementaries:candle_holder_lime',
            B: 'minecraft:rotten_flesh',
            F: 'desecratedcore:amethyst_reinforced_iron_ingot',
            A: 'minecraft:bone',
            D: 'minecraft:string',
            E: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('artificers_armory:spirit_candle_iron'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            A: 'fracture:fleshy_bone',
            E: 'minecraft:iron_ingot',
            C: 'supplementaries:candle_holder_yellow',
            B: 'minecraft:rotten_flesh',
            F: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: 'minecraft:string'
        }
    )
    event.shaped(
        Item.of('artificers_armory:spirit_candle_gold'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            A: 'fracture:fleshy_bone',
            E: 'minecraft:gold_ingot',
            B: 'minecraft:rotten_flesh',
            F: 'desecratedcore:amethyst_reinforced_iron_ingot',
            C: 'supplementaries:candle_holder_white',
            D: 'minecraft:string'
        }
    )
    event.shaped(
        Item.of('artificers_armory:spirit_candle_diamond'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            C: 'supplementaries:candle_holder_light_blue',
            A: 'fracture:fleshy_bone',
            F: 'desecratedcore:amethyst_reinforced_iron_ingot',
            D: 'incision:blinking_hamstring',
            E: 'minecraft:diamond',
            B: 'fracture:flesh_block'
        }
    )

    // Ascendant Arcana

    event.shaped(
        Item.of('desecratedcore:amethyst_harvesting_wand'),
        [
            ' AB',
            ' CA',
            'C  '
        ],
        {
            C: 'minecraft:iron_ingot',
            A: 'minecraft:amethyst_shard',
            B: 'desecratedcore:amethyst_reinforced_iron_ingot'
        }
    )

    event.shaped(
        Item.of('desecratedcore:amethyst_infusion_smithing_template'),
        [
            ' A ',
            'BBB',
            'AAA'
        ],
        {
            B: 'minecraft:amethyst_shard',
            A: 'minecraft:calcite'
        }
    )

    event.shaped(
        Item.of('minecraft:enchanting_table'),
        [
            ' A ',
            'BCB',
            'CCC'
        ],
        {
            A: 'minecraft:book',
            C: 'minecraft:obsidian',
            B: 'desecratedcore:pure_restorine'
        }
    )

    event.shaped(
        Item.of('ascendant_arcana:infusion_smithing_template'),
        [
            ' A ',
            'BCB',
            'AAA'
        ],
        {
            B: 'ascendant_arcana:restorine',
            C: 'desecratedcore:pure_restorine',
            A: 'minecraft:calcite'
        }
    )

    event.shaped(
        Item.of('ascendant_arcana:copper_enchanting_table'),
        [
            ' A ',
            'BCB',
            'CCC'
        ],
        {
            C: 'minecraft:cut_copper',
            B: 'minecraft:diamond',
            A: 'minecraft:book'
        }
    )

    event.shaped(
        Item.of('ascendant_arcana:relic', '{RelicStrength:3,RelicType:4}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#concatenation:experience_item',
            B: 'minecraft:amethyst_shard',
            C: 'reliquary:infernal_tear'
        }
    )

    event.shaped(
        Item.of('ascendant_arcana:relic', '{RelicStrength:4,RelicType:4}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'minecraft:amethyst_cluster',
            A: 'concatenatedadditionstools:experience_orb',
            C: 'reliquary:alkahestry_tome'
        }
    )

    event.shaped(
        Item.of('ascendant_arcana:relic', '{RelicStrength:1,RelicType:4}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'spectrum:amethyst_powder',
            A: 'minecraft:lapis_lazuli',
            C: 'desecratedcore:pure_restorine'
        }
    )

    // Celestisynth

    event.shaped(
        Item.of('celestisynth:celestial_core'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: Item.of('ascendant_arcana:relic', '{RelicStrength:1,RelicType:4}').strongNBT(),
            A: 'minecraft:amethyst_shard'
        }
    )

    // Reliquary

    event.shapeless(
        Item.of('reliquary:void_tear'),
        [
            'minecraft:ghast_tear',
            'reliquary:slime_pearl',
            'reliquary:nebulous_heart',
            Item.of('ascendant_arcana:relic', '{RelicStrength:1,RelicType:4}').strongNBT(),
            'ascendant_arcana:infusion_smithing_template'
        ]
    )

    event.shapeless(
        Item.of('reliquary:infernal_tear'),
        [
            'reliquary:witch_hat',
            'reliquary:molten_core',
            'reliquary:infernal_claw',
            Item.of('ascendant_arcana:relic', '{RelicStrength:2,RelicType:4}').strongNBT()
        ]
    )

    event.shaped(
        Item.of('reliquary:angelheart_vial', 2),
        [
            'ABA',
            'CDE',
            ' F '
        ],
        {
            D: 'reliquary:witherless_rose',
            F: 'reliquary:empty_potion_vial',
            A: 'minecraft:glow_berries',
            C: 'reliquary:infernal_claw',
            E: 'reliquary:fertile_essence',
            B: 'concatenatedadditionstools:glowing_gold'
        }
    ).keepIngredient('reliquary:witherless_rose')
    event.shaped(
        Item.of('reliquary:angelic_feather'),
        [
            'ABC',
            'DE ',
            '   '
        ],
        {
            E: 'reliquary:witherless_rose',
            A: 'celestisynth:starstruck_feather',
            C: 'reliquary:bat_wing',
            B: 'reliquary:nebulous_heart',
            D: 'reliquary:fertile_essence'
        }
    ).keepIngredient('reliquary:witherless_rose')
    event.shaped(
        Item.of('reliquary:phoenix_down'),
        [
            'AB ',
            '   ',
            '   '
        ],
        {
            A: 'reliquary:angelic_feather',
            B: 'reliquary:angelheart_vial'
        }
    )
event.shaped(
    Item.of('reliquary:alkahestry_tome'),
    [
        'ABC',
        'DEF',
        'GHI'
    ],
    {
        A: 'amendments:dragon_charge',
        I: 'reliquary:fortune_coin',
        E: 'minecraft:writable_book',
        F: 'reliquary:infernal_chalice',
        G: 'reliquary:guardian_spike',
        D: 'reliquary:emperor_chalice',
        H: 'minecraft:wither_skeleton_skull',
        B: 'reliquary:kraken_shell',
        C: 'reliquary:eye_of_the_storm'
    }
)

    event.shaped(
        Item.of('reliquary:rending_gale'),
        [
            'ABC',
            'DEB',
            'FDA'
        ],
        {
            D: 'minecraft:gold_ingot',
            A: 'reliquary:bat_wing',
            B: 'reliquary:void_tear',
            E: 'reliquary:alkahestry_tome',
            F: 'minecraft:stick',
            C: 'reliquary:eye_of_the_storm'
        }
    ).keepIngredient('reliquary:alkahestry_tome')
    event.shaped(
        Item.of('reliquary:glacial_staff'),
        [
            'ABC',
            'DEB',
            'FDA'
        ],
        {
            A: 'reliquary:frozen_core',
            B: 'reliquary:void_tear',
            C: 'reliquary:shears_of_winter',
            D: 'minecraft:diamond',
            E: 'reliquary:alkahestry_tome',
            F: 'reliquary:ice_magus_rod'
        }
    ).keepIngredient('reliquary:alkahestry_tome')
    event.shaped(
        Item.of('reliquary:pyromancer_staff'),
        [
            ' AB',
            'CDE',
            'FC '
        ],
        {
            B: 'reliquary:infernal_claws',
            A: 'reliquary:void_tear',
            E: 'reliquary:infernal_tear',
            D: 'reliquary:alkahestry_tome',
            F: 'reliquary:ice_magus_rod',
            C: 'reliquary:molten_core'
        }
    ).keepIngredient('reliquary:alkahestry_tome')
    event.shaped(
        Item.of('reliquary:sojourner_staff'),
        [
            'ABC',
            'DEB',
            'FDA'
        ],
        {
            A: 'minecraft:gold_ingot',
            F: 'minecraft:blaze_rod',
            B: 'reliquary:void_tear',
            E: 'reliquary:alkahestry_tome',
            D: 'reliquary:molten_core',
            C: 'concatenatedadditionstools:glowing_gold'
        }
    ).keepIngredient('reliquary:alkahestry_tome')
    event.shaped(
        Item.of('reliquary:serpent_staff'),
        [
            'ABC',
            'DEB',
            'FDA'
        ],
        {
            B: 'reliquary:void_tear',
            E: 'reliquary:alkahestry_tome',
            F: 'minecraft:stick',
            A: 'reliquary:chelicerae',
            C: 'celestisynth:eyebomination',
            D: 'reliquary:kraken_shell'
        }
    ).keepIngredient('reliquary:alkahestry_tome')
    event.shaped(
        Item.of('reliquary:lantern_of_paranoia'),
        [
            'AB ',
            ' C ',
            ' D '
        ],
        {
            D: 'sons_of_sins:ether_lantern',
            A: 'reliquary:sojourner_staff',
            B: 'torchmaster:feral_flare_lantern',
            C: 'reliquary:molten_core'
        }
    ).keepIngredient('reliquary:sojourner_staff')
    event.shaped(
        Item.of('reliquary:interdiction_torch', 8),
        [
            'ABC',
            '   ',
            '   '
        ],
        {
            B: 'minecraft:blaze_rod',
            A: 'reliquary:lantern_of_paranoia',
            C: 'reliquary:nebulous_heart'
        }
    ).keepIngredient('reliquary:lantern_of_paranoia')
    event.shaped(
        Item.of('reliquary:magicbane'),
        [
            ' AB',
            'ACA',
            'DA '
        ],
        {
            C: 'reliquary:fortune_coin',
            B: 'asr:golden_giant_sword',
            A: 'sons_of_sins:soul_steel',
            D: 'concatenatedadditionstools:gold_handle'
        }
    )
    event.shaped(
        Item.of('reliquary:rod_of_lyssa'),
        [
            ' A ',
            'BCD',
            'EFE'
        ],
        {
            F: 'reliquary:void_tear',
            A: 'reliquary:bat_wing',
            C: 'minecraft:fishing_rod',
            E: 'concatenatedadditionstools:ice_shard',
            B: '#desecrated:enderman_heart',
            D: 'reliquary:infernal_claw'
        }
    )
    event.shaped(
        Item.of('reliquary:salamander_eye'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            C: 'reliquary:frozen_core',
            D: 'incision:eyebulb',
            E: 'torchmaster:frozen_pearl',
            F: 'reliquary:pyromancer_staff',
            B: 'reliquary:lantern_of_paranoia',
            A: 'reliquary:molten_core'
        }
    )
    event.shaped(
        Item.of('reliquary:hero_medallion'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            C: 'reliquary:fortune_coin',
            D: 'torchmaster:frozen_pearl',
            A: 'sons_of_sins:soul_steel',
            B: 'reliquary:salamander_eye'
        }
    )
    event.shaped(
        Item.of('torchmaster:frozen_pearl'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'minecraft:blue_ice',
            C: 'minecraft:ender_pearl',
            A: 'concatenatedadditionstools:ice_shard'
        }
    )
    event.shaped(
        Item.of('torchmaster:feral_flare_lantern'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            C: 'desecratedcore:brass_part',
            B: 'minecraft:glowstone',
            D: 'sons_of_sins:ether_lantern'
        }
    )

    // Ars Armorer

    event.shaped(
        Item.of('tacz:workbench_b', '{BlockId:"ars_armorer:ars_workbench"}'),
        [
            'ABC',
            'DED',
            ' D '
        ],
        {
            C: 'reliquary:destruction_catalyst',
            B: Item.of('ascendant_arcana:relic', '{RelicStrength:3,RelicType:4}').strongNBT(),
            E: 'concatenatedadditionstools:glowing_gold_block',
            A: 'tacz:ammo',
            D: 'minecraft:stone_bricks'
        }
    )

    // All Ars Armorer Attachment NBT
    // {AttachmentId:"ars_armorer:trigger_high_speed"}
    // {AttachmentId:"ars_armorer:trigger_slow_speed"}
    // {AttachmentId:"ars_armorer:trigger_horizontal_spread"}
    // {AttachmentId:"ars_armorer:trigger_vertical_spread"}
    // {AttachmentId:"ars_armorer:trigger_reckless_rounds"}
    // {AttachmentId:"ars_armorer:trigger_sniper_rounds"}
    // {AttachmentId:"ars_armorer:trigger_close_range_rounds"}
    // {AttachmentId:"ars_armorer:trigger_double_fire"}
    // {AttachmentId:"ars_armorer:mod_rapid_regeneration"}
    // {AttachmentId:"ars_armorer:mod_conflux_accelerator"}
    // {AttachmentId:"ars_armorer:mod_proficient_utilization"}
    // {AttachmentId:"ars_armorer:mod_high_damage"}
    // {AttachmentId:"ars_armorer:mod_instant_renewal"}
    // {AttachmentId:"ars_armorer:mod_low_consume"}
    // {AttachmentId:"ars_armorer:mod_low_damage"}
    // {AttachmentId:"ars_armorer:spell_damage"}
    // {AttachmentId:"ars_armorer:spell_damage_p"}
    // {AttachmentId:"ars_armorer:spell_damage_pp"}
    // {AttachmentId:"ars_armorer:spell_suppression"}
    // {AttachmentId:"ars_armorer:spell_suppression_p"}
    // {AttachmentId:"ars_armorer:spell_crit"}
    // {AttachmentId:"ars_armorer:spell_crit_p"}
    // {AttachmentId:"ars_armorer:spell_crit_pp"}
    // {AttachmentId:"ars_armorer:spell_ignite"}
    // {AttachmentId:"ars_armorer:spell_explode"}
    // {AttachmentId:"ars_armorer:spell_explode_p"}
    // {AttachmentId:"ars_armorer:spell_penetrate"}
    // {AttachmentId:"ars_armorer:spell_penetrate_p"}
    // {AttachmentId:"ars_armorer:spell_penetrate_pp"}
    // {AttachmentId:"ars_armorer:spell_penetrate_incendiary"}
    // {AttachmentId:"ars_armorer:spell_penetrate_incendiary_p"}
    // {AttachmentId:"ars_armorer:spell_penetrate_incendiary_pp"}

})