//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'reverseeon:dimension_portal'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })
})