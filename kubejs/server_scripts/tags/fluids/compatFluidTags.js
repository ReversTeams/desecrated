//priority: 900
// Compatibility Tags

ServerEvents.tags('fluid', event => {
    const add = (tag, fluids) => fluids.forEach(fluid => event.add(tag, fluid));
    const remove = (tag, fluids) => fluids.forEach(fluid => event.remove(tag, fluid));

    add('forge:blood', [
        'desecratedcore:blood'
    ]);

    add('forge:blood', [
        'bloodyhell:blood'
    ]);
});