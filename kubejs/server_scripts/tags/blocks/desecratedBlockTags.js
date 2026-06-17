//priority: 900
// Unique Purgatorium Tags

ServerEvents.tags('block', event => {
    const add = (tag, blocks) => blocks.forEach(block => event.add(tag, block));
    const remove = (tag, blocks) => blocks.forEach(block => event.remove(tag, block));

    // remove('minecraft:mineable/pickaxe', [
    //     'neepmeat:asbestos'
    // ]);

    // remove('cucumber:mineable/paxel', [
    //     'neepmeat:asbestos'
    // ]);

    // Concatenation
    // add('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
    // ]);

    // Purgatorium
    // add('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
    // ]);
});