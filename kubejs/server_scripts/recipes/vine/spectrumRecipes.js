//priority: 200
// Recipes
//requires: spectrum

ServerEvents.recipes(event => {

    const remove = [
        'spectrum:pedestal_basic_amethyst',
        'spectrum:pedestal_basic_citrine',
        'spectrum:pedestal_basic_topaz',
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Spectrum

    event.shaped(
        Item.of('spectrum:pedestal_basic_citrine'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            C: 'hexalia:ritual_table',
            E: 'desecratedcore:all_node',
            D: 'spectrum:polished_basalt',
            B: 'spectrum:planed_calcite',
            A: 'spectrum:citrine_shard'
        }
    )

    event.shaped(
        Item.of('spectrum:pedestal_basic_topaz'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            C: 'hexalia:ritual_table',
            E: 'desecratedcore:all_node',
            A: 'spectrum:topaz_shard',
            D: 'spectrum:polished_basalt',
            B: 'spectrum:planed_calcite'
        }
    )

    event.shaped(
        Item.of('spectrum:pedestal_basic_amethyst'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            C: 'hexalia:ritual_table',
            E: 'desecratedcore:all_node',
            A: 'minecraft:amethyst_shard',
            D: 'spectrum:polished_basalt',
            B: 'spectrum:planed_calcite'
        }
    )

})