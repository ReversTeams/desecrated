ServerEvents.recipes(event => {

    const remove = [
        'hexalia:ritual_table'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })
    
})