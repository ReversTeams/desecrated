//priority: 900
// Unique Desecrated Tags

ServerEvents.tags('item', event => {
    const add = (tag, items) => items.forEach(item => event.add(tag, item));
    const remove = (tag, items) => items.forEach(item => event.remove(tag, item));

    // remove('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
    // ]);

    // Concatenation
    // add('concatenation:breaking_tools', [
    //     "minecraft:diamond_pickaxe",
    //     "minecraft:netherite_pickaxe",
    // ]);
    // add('concatenation:mixing_tools', [
    //     "minecraft:diamond_shovel",
    //     "minecraft:netherite_shovel",
    // ]);
    // add('concatenation:sculpting_tools', [
    //     "minecraft:diamond_axe",
    //     "minecraft:netherite_axe",
    // ]);
    // add('concatenation:cutting_tools', [
    //     "minecraft:diamond_sword",
    //     "minecraft:netherite_sword",
    // ]);

    // Purgatorium
    // add('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
    // ]);

    // Desecrated
    add('desecrated:mystical_bone', [
        'fracture:fleshy_bone',
        'sons_of_sins:bloody_bone',
        'butchery:sculk_bone'
    ]);

    add('desecrated:trigger_bone', [
        'butchery:broken_wishbone',
        'butchery:wishbone',
        'fracture:fleshy_bone'
    ]);

    add('desecrated:slime_chunk', [
        'butchery:slime_chunks',
        'reliquary:slime_pearl',
        'sons_of_sins:slime_rear'
    ]);

    add('desecrated:flesh_circuit', [
        'neepmeat:internal_components',
        'clanginghowl:chunk_of_technoflesh'
    ]);

    add('desecrated:advanced_wrenches', [
        'artificers_armory:wrench_copper',
        'artificers_armory:wrench_iron',
        'artificers_armory:wrench_gold',
        'artificers_armory:wrench_diamond',
        'artificers_armory:wrench_netherite',
        'clanginghowl:industrial_adjustable_wrench'
    ]);

    add('desecrated:hammer', [
        'concatenatedadditionscore:hammer',
        'mahoutsukai:hammer'
    ]);

    add('desecrated:crushed_iron', [
        'concatenatedadditionsmachines:crushed_iron',
        'mahoutsukai:powdered_iron'
    ]);

    add('desecrated:crushed_gold', [
        'concatenatedadditionsmachines:crushed_gold',
        'mahoutsukai:powdered_gold'
    ]);

    add('desecrated:celestial_crystals', [
        'celestisynth:lunar_scrap',
        'perdition:scintillating_marble_block',
        'perdition:marmor_exaltatus'
    ]);

    add('desecrated:advanced_tuning_forks', [
        'artificers_armory:tuning_fork_copper',
        'artificers_armory:tuning_fork_iron',
        'artificers_armory:tuning_fork_gold',
        'artificers_armory:tuning_fork_diamond',
        'artificers_armory:tuning_fork_netherite',
        'clanginghowl:industrial_adjustable_wrench'
    ]);

    add('desecrated:enderman_heart', [
        'reliquary:nebulous_heart',
        'butchery:enderman_heart'
    ]);

    add('desecrated:violent_flesh', [
        'fracture:living_flesh',
        'fracture:blood_slime_ball'
    ]);

    // Should be added to core mods
    add('curios:curio', [
        "desecratedcore:moon_key_item"
    ]);
    add('curios:charm', [
        "desecratedcore:exile_key_item"
    ]);

    // Is in core mods but doesn't work
    add('concatenation:raw_meteorite', [
        "clanginghowl:extraterrestrial_stone"
    ]);
});