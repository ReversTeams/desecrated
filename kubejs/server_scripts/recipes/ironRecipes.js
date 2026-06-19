//priority: 200
// Recipes

ServerEvents.recipes(event => {

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