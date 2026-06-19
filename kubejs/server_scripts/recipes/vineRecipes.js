//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'hexalia:ritual_table',
        'hexalia:athame'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Hexalia Recipes
    event.shaped(
        Item.of('desecratedcore:vine_key_item'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            F: 'minecraft:twisting_vines',
            G: 'minecraft:lily_pad',
            B: 'minecraft:vine',
            H: 'minecraft:glow_lichen',
            C: 'minecraft:lily_of_the_valley',
            E: '#desecrated:fate_item',
            D: 'minecraft:weeping_vines',
            A: 'hexalia:spirit_bloom',
            I: 'immersive_weathering:moss_clump'
        }
    )

    event.shaped(
        Item.of('hexalia:athame'),
        [
            'AB ',
            'C  ',
            '   '
        ],
        {
            A: 'minecraft:flint',
            C: 'minecraft:stick',
            B: 'desecratedcore:vine_key_item'
        }
    ).keepIngredient('desecratedcore:vine_key_item')

})