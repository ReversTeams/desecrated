//priority: 900
// Unique Purgatorium Tags

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
});