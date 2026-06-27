//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'mahoutsukai:pestle',
        'mahoutsukai:mortar',
        'mahoutsukai:dagger'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

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

    event.shaped(
        Item.of('mahoutsukai:pestle'),
        [
            ' AB',
            'ACA',
            'BA '
        ],
        {
            B: 'mahoutsukai:powdered_quartz',
            A: '#desecrated:celestial_crystals',
            C: 'mahoutsukai:attuned_diamond'
        }
    )
    event.shaped(
        Item.of('mahoutsukai:mortar'),
        [
            'A A',
            'BCB',
            'ABA'
        ],
        {
            B: 'mahoutsukai:powdered_quartz',
            A: '#desecrated:celestial_crystals',
            C: 'mahoutsukai:attuned_diamond'
        }
    )
    event.shaped(
        Item.of('mahoutsukai:dagger'),
        [
            'A B',
            'CB ',
            'DC '
        ],
        {
            A: 'desecratedcore:yore_key_item',
            C: 'minecraft:blaze_rod',
            D: 'concatenatedadditionstools:glowing_gold',
            B: 'minecraft:crying_obsidian'
        }
    )

})