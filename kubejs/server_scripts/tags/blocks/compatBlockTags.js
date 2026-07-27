//priority: 900
// Compatibility Tags

ServerEvents.tags('block', event => {
    const add = (tag, blocks) => blocks.forEach(block => event.add(tag, block));
    const remove = (tag, blocks) => blocks.forEach(block => event.remove(tag, block));

    // remove('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
    // ]);

    add('minecraft:stone_ore_replaceables', [
        'subwild:wet_stone',
        'subwild:hot_andesite',
        'subwild:mossy_sand',
        'subwild:hot_smooth_red_sandstone',
        'subwild:hot_sandstone',
        'subwild:hot_smooth_sandstone',
        'subwild:mossy_red_sand',
        'subwild:mossy_stone',
        'subwild:mossy_andesite',
        'subwild:molten_red_sandstone',
        'subwild:mossy_red_sandstone',
        'subwild:molten_smooth_red_sandstone',
        'subwild:mossy_smooth_sandstone',
        'subwild:hot_stone',
        'subwild:wet_andesite',
        'subwild:molten_sandstone',
        'subwild:molten_smooth_sandstone',
        'subwild:mossy_smooth_red_sandstone',
        'subwild:molten_stone',
        'subwild:molten_andesite',
        'subwild:hot_red_sandstone',
        'subwild:mossy_sandstone'
    ]);
});