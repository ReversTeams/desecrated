ServerEvents.recipes(event => {

    const remove = [
        'neepmeat:sacrificial_dagger',
        'neepmeat:projector',
        'neepmeat:asbestos'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Butchery

    // Neepmeat
    event.shaped(
        Item.of('neepmeat:sacrificial_dagger'),
        [
            ' AB',
            'CDC',
            'EFF'
        ],
        {
            E: 'minecraft:leather',
            A: 'vampirism:blood_grinder',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:iron_block',
            F: 'minecraft:copper_ingot',
            B: 'butchery:diamond_hacksaw'
        }
    )

    event.shapeless(
        Item.of('neepmeat:asbestos_dust'),
        [
            'concatenatedadditionscore:hammer',
            'neepmeat:asbestos'
        ]
    )
});
