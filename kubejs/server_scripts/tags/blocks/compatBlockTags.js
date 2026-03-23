//priority: 900
// Compatibility Tags

ServerEvents.tags('block', event => {
    const add = (tag, blocks) => blocks.forEach(block => event.add(tag, block));
    const remove = (tag, blocks) => blocks.forEach(block => event.remove(tag, block));

    // remove('concatenation:tech_cards', [
    //     'tarotcards:the_hierophant',
    //     'tarotcards:the_hermit'
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