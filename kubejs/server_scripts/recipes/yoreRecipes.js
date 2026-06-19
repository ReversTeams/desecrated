//priority: 200
// Recipes

ServerEvents.recipes(event => {

    // Mahou Tsoukai Recipes
    event.shaped(
        Item.of('desecratedcore:yore_key_item'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            F: 'reliquary:frozen_core',
            A: 'concatenatedadditionstools:ice_shard',
            D: '#desecrated:fate_item',
            E: 'minecraft:feather',
            B: 'sons_of_sins:ice_heart',
            C: 'fracture:boreas_key'
        }
    )
    event.shaped(
        Item.of('concatenatedadditionstools:ice_shard'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:blue_ice',
            B: 'reliquary:frozen_core'
        }
    )

})