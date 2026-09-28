//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'modestmining:forge'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Modest Mining Recipes
    event.shaped(
        Item.of('modestmining:forge'),
        [
            'ABA',
            'ACA',
            'DDD'
        ],
        {
            D: 'minecraft:iron_ingot',
            B: 'desecratedcore:iron_key_item',
            A: 'minecraft:cobbled_deepslate',
            C: 'minecraft:blast_furnace'
        }
    )

    event.shaped(
        Item.of('modestmining:copper_screw'),
        [
            'DD ',
            'D  ',
            '   '
        ],
        {
            D: 'minecraft:copper_ingot'
        }
    )

    // Tetra Recipes
    event.shaped(
        Item.of('desecratedcore:iron_key_item'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            C: '#desecrated:fate_item',
            B: 'minecraft:obsidian'
        }
    )

})