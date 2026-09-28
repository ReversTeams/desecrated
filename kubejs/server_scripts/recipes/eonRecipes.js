//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'reverseeon:dimension_portal',
        'reverseeon:myth_mural'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    event.shaped(
        Item.of('reverseeon:myth_mural'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: 'reverseeon:french_blue',
            C: 'minecraft:elytra',
            A: 'minecraft:painting'
        }
    )

    event.shaped(
        Item.of('desecratedcore:knowledge_fruit'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'reverseeon:french_blue',
            E: 'desecratedcore:artificial_life',
            B: 'desecratedcore:enlightened_chrysalis',
            C: 'desecratedcore:primordial_life',
            D: 'desecratedcore:macabre_heart',
            F: 'desecratedcore:bloody_whisper'
        }
    )
})