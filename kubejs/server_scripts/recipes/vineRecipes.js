//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'hexalia:ritual_table',
        'hexalia:athame',
        'hexalia:censer',
        'hexalia:small_cauldron'
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

    event.shaped(
        Item.of('hexalia:censer'),
        [
            ' A ',
            'ABA',
            'CDC'
        ],
        {
            A: 'minecraft:bricks',
            C: '#minecraft:logs',
            D: 'minecraft:campfire',
            B: 'hexalia:dreamshroom'
        }
    )

    event.shaped(
        Item.of('hexalia:small_cauldron'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            D: '#minecraft:logs',
            B: '#minecraft:coals',
            A: 'minecraft:cobbled_deepslate',
            E: 'minecraft:cauldron',
            C: 'hexalia:dreamshroom'
        }
    )

})