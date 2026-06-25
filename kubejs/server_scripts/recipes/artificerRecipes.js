//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'clockwork:clockwork_gear'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Concatenated Additions
    event.shaped(
        Item.of('desecratedcore:brass_ingot'),
        [
            'ABC',
            'CD ',
            '   '
        ],
        {
            A: '#concatenation:hammers',
            B: '#concatenation:firing_item',
            D: 'concatenatedadditionsmachines:crushed_zinc',
            C: 'concatenatedadditionsmachines:crushed_copper'
        }
    )

    // Artificer Armory Recipes
    event.shaped(
        Item.of('desecratedcore:artificer_key_item'),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            C: 'minecraft:leather_chestplate',
            A: 'concatenatedadditionstools:experience_orb',
            B: 'minecraft:amethyst_shard',
            D: '#desecrated:fate_item',
            E: 'minecraft:chainmail_chestplate'
        }
    )

    event.shaped(
        Item.of('clockwork:clockwork_gear'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'desecratedcore:brass_ingot',
            B: 'desecratedcore:amethyst_imbued_iron_ingot'
        }
    )

})