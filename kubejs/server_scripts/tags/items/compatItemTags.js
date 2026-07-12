//priority: 900
// Compatibility Tags

ServerEvents.tags('item', event => {
    const add = (tag, items) => items.forEach(item => event.add(tag, item));
    const remove = (tag, items) => items.forEach(item => event.remove(tag, item));

    // remove('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
    // ]);

    // Curios
    add('curios:necklace', [
        'hexalia:sage_pendant'
    ]);

    // Forge
    add('forge:sculk_bone', [
        'philipsruins:sculk_bone',
        'butchery:sculk_bone'
    ]);

    add('forge:flesh_block', [
        'sons_of_sins:flesh_block',
        'fracture:flesh_block'
    ]);

    add('forge:heart', [
        'butchery:heart',
        'sons_of_sins:heart',
    ]);

    add('forge:stomach', [
        'butchery:stomach',
        'macabre:stomach',
        'incision:stomach'
    ]);

    add('forge:intestines', [
        'butchery:intestines',
        'macabre:intestine',
        'incision:intestines'
    ]);

    add('forge:broken_bone', [
        'macabre:bone',
        'philipsruins:broken_bone'
    ]);

    add('forge:hearts', [
        'butchery:heart',
        'sons_of_sins:heart',
        'reliquary:zombie_heart',
        'neepmeat:animal_heart',
        'butchery:rotten_heart',
        'clanginghowl:techno_heart'
    ]);

    add('forge:zombie_heart', [
        'reliquary:zombie_heart',
        'neepmeat:animal_heart',
        'butchery:rotten_heart'
    ]);

    add('forge:blood_bucket', [
        'fracture:blood_bucket',
        'desecratedcore:blood_bucket',
        //'butchery:blood_bucket',
        'neepmeat:blood_bucket',
        'bloodyhell:blood_bucket',
        'vampirism:blood_bucket'
    ]);

    add('forge:furnaces', [
        'minecraft:furnace',
        'quark:blackstone_furnace',
        'quark:deepslate_furnace'
    ]);

    add('forge:knives', [
        'butchery:bone_skinning_knife',
        'butchery:copper_skinning_knife',
        'butchery:iron_skinning_knife',
        'butchery:gold_skinning_knife',
        'butchery:diamond_skinning_knife',
        'butchery:netherite_skinning_knife'
    ]);

    add('forge:tools/knives', [
        'butchery:bone_skinning_knife',
        'butchery:copper_skinning_knife',
        'butchery:iron_skinning_knife',
        'butchery:gold_skinning_knife',
        'butchery:diamond_skinning_knife',
        'butchery:netherite_skinning_knife'
    ]);

    add('forge:knives/iron', [
        'butchery:iron_skinning_knife',
        'farmersdelight:iron_knife'
    ]);

    add('forge:knives/gold', [
        'butchery:gold_skinning_knife',
        'farmersdelight:golden_knife'
    ]);

    add('forge:knives/diamond', [
        'butchery:diamond_skinning_knife',
        'farmersdelight:diamond_knife'
    ]);

    add('forge:knives/netherite', [
        'butchery:netherite_skinning_knife',
        'farmersdelight:netherite_knife'
    ]);

    add('forge:dragon_scale', [
        'quark:dragon_scale',
        'butchery:dragon_scale'
    ]);

    add('forge:resin', [
        'hexalia:tree_resin',
        'minecraft:resin_clump'
    ]);

    add('lychee:lightning_immune', [
        'desecratedcore:forbidden_knowledge',
        'bloodyhell:forbidden_bookshelf_block'
    ]);

    add('lychee:fire_immune', [
        'desecratedcore:forbidden_knowledge',
        'bloodyhell:forbidden_bookshelf_block'
    ]);

    add('biomancy:raw_meats', [
        [
            "butchery:raw_donkey_steak",
            "butchery:raw_sausage",
            "butchery:raw_lamb_loin",
            "butchery:raw_gray_frog_leg",
            "butchery:raw_cat_meat",
            "butchery:raw_sirloin_steak",
            "minecraft:beef",
            "butchery:raw_dragon_meat",
            "butchery:raw_lamb_sirloin",
            "butchery:raw_silverfish_chunks",
            "butchery:raw_villager_steak",
            "butchery:raw_pork_loin",
            "butchery:raw_chicken_wing",
            "butchery:raw_pork_leg",
            "butchery:raw_cave_spider_leg",
            "butchery:raw_rump_steak",
            "butchery:raw_beef_mince",
            "butchery:raw_shulker_meat",
            "butchery:raw_salmon",
            "butchery:raw_cod_fillet",
            "butchery:raw_creeper_leg",
            "butchery:raw_gold_axolotl_fillet",
            "butchery:raw_green_frog_leg",
            "butchery:raw_lamb_shoulder",
            "minecraft:mutton",
            "butchery:raw_fox_meat",
            "butchery:raw_ribeye_steak",
            "butchery:raw_ham",
            "butchery:raw_pork_belly",
            "butchery:raw_spider_leg",
            "butchery:raw_chicken_leg",
            "butchery:raw_polar_bear_meat",
            "butchery:raw_ocelot_meat",
            "butchery:raw_evoker_meat",
            "butchery:raw_turtle_meat",
            "butchery:raw_elder_guardian_meat",
            "butchery:raw_blood_sausage",
            "butchery:raw_leg_of_lamb",
            "butchery:raw_pink_axolotl_fillet",
            "butchery:raw_orange_frog_leg",
            "butchery:raw_cyan_axolotl_fillet",
            "butchery:raw_endermite_chunks",
            "butchery:raw_lamb_rib",
            "butchery:raw_panda_steak",
            "butchery:raw_brown_axolotl_fillet",
            "butchery:raw_guardian_meat",
            "butchery:raw_bat_meat",
            "butchery:raw_dolphin_meat",
            "butchery:raw_chuck_steak",
            "butchery:raw_lamb_mince",
            "butchery:raw_creeper_steak",
            "butchery:raw_pillager_meat",
            "butchery:raw_strider_meat",
            "butchery:raw_tbone_steak",
            "butchery:raw_hoglin_chunk",
            "butchery:raw_llama_steak",
            "butchery:raw_witch_meat",
            "butchery:raw_pork_shoulder",
            "butchery:raw_camel_meat",
            "butchery:raw_pufferfish",
            "butchery:raw_mule_steak",
            "minecraft:porkchop",
            "butchery:raw_vindicator_meat",
            "butchery:raw_blue_axolotl_fillet",
            "butchery:raw_enderman_steak",
            "minecraft:rabbit",
            "farmersdelight:minced_beef",
            "minecraft:chicken",
            "farmersdelight:chicken_cuts",
            "farmersdelight:bacon",
            "farmersdelight:mutton_chops"
        ]
    ]);
    add('butchery:raw_meats', [
        [
            "butchery:raw_donkey_steak",
            "butchery:raw_sausage",
            "butchery:raw_lamb_loin",
            "butchery:raw_gray_frog_leg",
            "butchery:raw_cat_meat",
            "butchery:raw_sirloin_steak",
            "minecraft:beef",
            "butchery:raw_dragon_meat",
            "butchery:raw_lamb_sirloin",
            "butchery:raw_silverfish_chunks",
            "butchery:raw_villager_steak",
            "butchery:raw_pork_loin",
            "butchery:raw_chicken_wing",
            "butchery:raw_pork_leg",
            "butchery:raw_cave_spider_leg",
            "butchery:raw_rump_steak",
            "butchery:raw_beef_mince",
            "butchery:raw_shulker_meat",
            "butchery:raw_salmon",
            "butchery:raw_cod_fillet",
            "butchery:raw_creeper_leg",
            "butchery:raw_gold_axolotl_fillet",
            "butchery:raw_green_frog_leg",
            "butchery:raw_lamb_shoulder",
            "minecraft:mutton",
            "butchery:raw_fox_meat",
            "butchery:raw_ribeye_steak",
            "butchery:raw_ham",
            "butchery:raw_pork_belly",
            "butchery:raw_spider_leg",
            "butchery:raw_chicken_leg",
            "butchery:raw_polar_bear_meat",
            "butchery:raw_ocelot_meat",
            "butchery:raw_evoker_meat",
            "butchery:raw_turtle_meat",
            "butchery:raw_elder_guardian_meat",
            "butchery:raw_blood_sausage",
            "butchery:raw_leg_of_lamb",
            "butchery:raw_pink_axolotl_fillet",
            "butchery:raw_orange_frog_leg",
            "butchery:raw_cyan_axolotl_fillet",
            "butchery:raw_endermite_chunks",
            "butchery:raw_lamb_rib",
            "butchery:raw_panda_steak",
            "butchery:raw_brown_axolotl_fillet",
            "butchery:raw_guardian_meat",
            "butchery:raw_bat_meat",
            "butchery:raw_dolphin_meat",
            "butchery:raw_chuck_steak",
            "butchery:raw_lamb_mince",
            "butchery:raw_creeper_steak",
            "butchery:raw_pillager_meat",
            "butchery:raw_strider_meat",
            "butchery:raw_tbone_steak",
            "butchery:raw_hoglin_chunk",
            "butchery:raw_llama_steak",
            "butchery:raw_witch_meat",
            "butchery:raw_pork_shoulder",
            "butchery:raw_camel_meat",
            "butchery:raw_pufferfish",
            "butchery:raw_mule_steak",
            "minecraft:porkchop",
            "butchery:raw_vindicator_meat",
            "butchery:raw_blue_axolotl_fillet",
            "butchery:raw_enderman_steak",
            "minecraft:rabbit",
            "farmersdelight:minced_beef",
            "minecraft:chicken",
            "farmersdelight:chicken_cuts",
            "farmersdelight:bacon",
            "farmersdelight:mutton_chops"
        ]
    ]);
});