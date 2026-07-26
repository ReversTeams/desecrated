//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'bloodmagic:altar',
        'bloodmagic:sacrificialdagger',
        'perdition:dis'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    // Perdition Recipes
    event.shaped(
        Item.of('perdition:dis'),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            B: 'perdition:marmor_elevated',
            A: 'minecraft:ghast_tear',
            C: 'desecratedcore:moon_key_item'
        }
    )

    // Blood Magic Recipes
    event.shaped(
        Item.of('desecratedcore:moon_key_item'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            B: 'hexalia:celestial_bloom',
            C: 'concatenatedadditionstools:experience_orb',
            D: '#desecrated:fate_item',
            E: 'minecraft:popped_chorus_fruit',
            A: 'concatenatedadditionstools:glowing_gold_block',
            F: 'hexalia:dreamshroom'
        }
    )
    event.shaped(
        Item.of('bloodmagic:altar'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: 'perdition:pyrite',
            C: 'desecratedcore:moon_key_item',
            D: 'minecraft:polished_blackstone',
            E: 'quark:red_corundum',
            B: 'desecratedcore:blood_bucket'
        }
    ).keepIngredient('desecratedcore:moon_key_item')
    event.shaped(
        Item.of('bloodmagic:sacrificialdagger'),
        [
            ' AA',
            'BCA',
            'DB '
        ],
        {
            A: 'perdition:pyrite',
            B: 'concatenatedadditionstools:experience_orb',
            C: 'minecraft:emerald',
            D: 'minecraft:diamond'
        }
    )


})