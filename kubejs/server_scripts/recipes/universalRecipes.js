//priority: 200
// Recipes

ServerEvents.recipes(event => {
    event.remove({ mod: 'create' })
    event.remove({ mod: 'waystones' })

    const remove = [
        'fracture:infected_core',
        'fishermens_trap:fishtrap',
        'mahoutsukai:hammer',
        'simpleenemymod:recruit_table'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    event.replaceInput(
        { input: 'minecraft:furnace' },
        'minecraft:furnace',
        '#forge:furnaces'
    )

    event.replaceInput(
        { output: 'supplementaries:soap' },
        'minecraft:porkchop',
        '#desecrated:soap_ingredient'
    )

    // event.replaceInput(
    //     { input: '#biomancy:raw_meats' },
    //     '#biomancy:raw_meats',
    //     '#forge:raw_meat'
    // )

    event.shapeless(
        Item.of('desecratedcore:raw_meat_block'),
        [
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat',
            '#forge:raw_meat'
        ]
    )

    event.shaped(
        Item.of('fishermens_trap:fishtrap'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'butchery:hook',
            B: 'farmersdelight:canvas',
            A: 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('supplementaries:lunch_basket'),
        [
            ' A ',
            'ABA',
            'AAA'
        ],
        {
            A: 'farmersdelight:canvas',
            B: '#minecraft:wool_carpets'
        }
    )

    event.shapeless(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}'),
        [
            'create:wrench'
        ]
    )

    event.shapeless(
        Item.of('butchery:witches_clothes_helmet'),
        [
            'reliquary:witch_hat'
        ]
    )

    event.shapeless(
        Item.of('reliquary:witch_hat'),
        [
            'butchery:witches_clothes_helmet'
        ]
    )

    event.shaped(
        Item.of('supplementaries:lunch_basket'),
        [
            ' A ',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:leather',
            B: '#minecraft:wool_carpets'
        }
    )

    event.shaped(
        Item.of('supplementaries:lunch_basket'),
        [
            ' A ',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:rabbit_hide',
            B: '#minecraft:wool_carpets'
        }
    )

    event.shapeless(
        Item.of('oreberriesreplanted:iron_oreberry_bush', 2),
        [
            'concatenatedadditionsmachines:transplant',
            'oreberriesreplanted:iron_oreberry_bush'
        ]
    )

    event.shapeless(
        Item.of('oreberriesreplanted:gold_oreberry_bush', 2),
        [
            'concatenatedadditionsmachines:transplant',
            'oreberriesreplanted:gold_oreberry_bush'
        ]
    )

    event.shapeless(
        Item.of('oreberriesreplanted:copper_oreberry_bush', 2),
        [
            'concatenatedadditionsmachines:transplant',
            'oreberriesreplanted:copper_oreberry_bush'
        ]
    )

    event.shapeless(
        Item.of('oreberriesreplanted:zinc_oreberry_bush', 2),
        [
            'concatenatedadditionsmachines:transplant',
            'oreberriesreplanted:zinc_oreberry_bush'
        ]
    )

    event.shapeless(
        Item.of('oreberriesreplanted:silver_oreberry_bush', 2),
        [
            'concatenatedadditionsmachines:transplant',
            'oreberriesreplanted:silver_oreberry_bush'
        ]
    )

    event.shapeless(
        Item.of('minecraft:pitcher_plant', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:pitcher_plant'
        ]
    )
    event.shapeless(
        Item.of('minecraft:mangrove_propagule', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:mangrove_propagule'
        ]
    )
    event.shapeless(
        Item.of('minecraft:fern', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:fern'
        ]
    )
    event.shapeless(
        Item.of('minecraft:dandelion', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:dandelion'
        ]
    )
    event.shapeless(
        Item.of('minecraft:poppy', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:poppy'
        ]
    )
    event.shapeless(
        Item.of('minecraft:blue_orchid', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:blue_orchid'
        ]
    )
    event.shapeless(
        Item.of('minecraft:allium', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:allium'
        ]
    )
    event.shapeless(
        Item.of('minecraft:azure_bluet', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:azure_bluet'
        ]
    )
    event.shapeless(
        Item.of('minecraft:red_tulip', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:red_tulip'
        ]
    )
    event.shapeless(
        Item.of('minecraft:orange_tulip', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:orange_tulip'
        ]
    )
    event.shapeless(
        Item.of('minecraft:white_tulip', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:white_tulip'
        ]
    )
    event.shapeless(
        Item.of('minecraft:pink_tulip', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:pink_tulip'
        ]
    )
    event.shapeless(
        Item.of('minecraft:oxeye_daisy', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:oxeye_daisy'
        ]
    )
    event.shapeless(
        Item.of('minecraft:lily_of_the_valley', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:lily_of_the_valley'
        ]
    )

    event.shapeless(
        Item.of('minecraft:cornflower', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:cornflower'
        ]
    )
    event.shapeless(
        Item.of('minecraft:torchflower', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:torchflower'
        ]
    )
    event.shapeless(
        Item.of('immersive_weathering:azalea_flowers', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'immersive_weathering:azalea_flowers'
        ]
    )
    event.shapeless(
        Item.of('minecraft:pink_petals', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:pink_petals'
        ]
    )
    event.shapeless(
        Item.of('farmersdelight:wild_cabbages', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_cabbages'
        ]
    )
    event.shapeless(
        Item.of('minecraft:lilac', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:lilac'
        ]
    )
    event.shapeless(
        Item.of('minecraft:sunflower', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:sunflower'
        ]
    )
    event.shapeless(
        Item.of('minecraft:rose_bush', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:rose_bush'
        ]
    )

    event.shapeless(
        Item.of('farmersdelight:wild_onions', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_onions'
        ]
    )
    event.shapeless(
        Item.of('farmersdelight:wild_potatoes', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_potatoes'
        ]
    )

    event.shapeless(
        Item.of('farmersdelight:wild_tomatoes', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_tomatoes'
        ]
    )
    event.shapeless(
        Item.of('farmersdelight:wild_beetroots', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_beetroots'
        ]
    )
    event.shapeless(
        Item.of('farmersdelight:wild_carrots', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_carrots'
        ]
    )
    event.shapeless(
        Item.of('farmersdelight:wild_rice', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'farmersdelight:wild_rice'
        ]
    )

    event.shapeless(
        Item.of('immersive_weathering:moss_clump', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'immersive_weathering:moss_clump'
        ]
    )
    event.shapeless(
        Item.of('minecraft:red_mushroom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:red_mushroom'
        ]
    )
    event.shapeless(
        Item.of('minecraft:brown_mushroom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'minecraft:brown_mushroom'
        ]
    )
    event.shapeless(
        Item.of('minecraft:bone_meal', 64),
        [
            'concatenatedadditionsmachines:transplant'
        ]
    )
    event.shapeless(
        Item.of('immersive_weathering:golden_moss_clump', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'immersive_weathering:golden_moss_clump'
        ]
    )
    event.shapeless(
        Item.of('hexalia:lavender', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:lavender'
        ]
    )
    event.shapeless(
        Item.of('hexalia:dahlia', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:dahlia'
        ]
    )
    event.shapeless(
        Item.of('hexalia:pale_mushroom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:pale_mushroom'
        ]
    )
    event.shapeless(
        Item.of('hexalia:nightshade_bush', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:nightshade_bush'
        ]
    )
    event.shapeless(
        Item.of('hexalia:spirit_bloom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:spirit_bloom'
        ]
    )
    event.shapeless(
        Item.of('hexalia:dreamshroom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:dreamshroom'
        ]
    )
    event.shapeless(
        Item.of('hexalia:siren_kelp', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:siren_kelp'
        ]
    )
    event.shapeless(
        Item.of('hexalia:ghost_fern', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:ghost_fern'
        ]
    )
    event.shapeless(
        Item.of('hexalia:celestial_bloom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:celestial_bloom'
        ]
    )
    event.shapeless(
        Item.of('hexalia:lotus_flower', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:lotus_flower'
        ]
    )
    event.shapeless(
        Item.of('hexalia:lotus_blossom', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:lotus_blossom'
        ]
    )
    event.shapeless(
        Item.of('hexalia:witchweed', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:witchweed'
        ]
    )
    event.shapeless(
        Item.of('hexalia:begonia', 4),
        [
            'concatenatedadditionsmachines:transplant',
            'hexalia:begonia'
        ]
    )

    event.shapeless(
        Item.of('reliquary:nebulous_heart'),
        [
            'reverseeon:liquefied_terror',
            'butchery:heart',
            'minecraft:ender_pearl',
            'minecraft:ender_pearl',
            'minecraft:ender_pearl'
        ]
    )

    event.shapeless(
        Item.of('reliquary:slime_pearl'),
        [
            'reverseeon:liquefied_terror',
            'fracture:blood_slime_ball',
            'minecraft:slime_ball',
            'minecraft:slime_ball',
            'minecraft:slime_ball'
        ]
    )

    event.shapeless(
        Item.of('reliquary:catalyzing_gland'),
        [
            'reverseeon:liquefied_terror',
            'biomancy:volatile_gland',
            'minecraft:gunpowder',
            'minecraft:gunpowder',
            'minecraft:gunpowder'
        ]
    )

    event.shapeless(
        Item.of('reliquary:chelicerae'),
        [
            'reverseeon:liquefied_terror',
            'incision:vile_fang',
            'minecraft:spider_eye',
            'minecraft:spider_eye',
            'minecraft:spider_eye'
        ]
    )

    event.shapeless(
        Item.of('reliquary:bat_wing'),
        [
            'reverseeon:liquefied_terror',
            'butchery:bat_wing',
            'butchery:bat_skin',
            'butchery:bat_skin',
            'butchery:bat_skin'
        ]
    )

    event.shapeless(
        Item.of('clanginghowl:extraterrestrial_energy_crystal', 4),
        [
            'reverseeon:magnesia_crystal',
            'clanginghowl:extraterrestrial_energy_crystal'
        ]
    )

    event.shapeless(
        Item.of('concatenatedadditionsmachines:stickyredstone'),
        [
            'netherman:crimson_web',
            'minecraft:redstone'
        ]
    )

    event.shapeless(
        Item.of('vampirism:blood_bottle', '{Damage:9}'),
        [
            'desecratedcore:blood_bucket',
            'minecraft:glass_bottle'
        ]
    )

    event.shapeless(
        Item.of('create:wrench'),
        [
            Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}').strongNBT()
        ]
    )
});