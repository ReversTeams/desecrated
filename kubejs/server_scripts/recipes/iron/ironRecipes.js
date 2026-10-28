//priority: 200
// Recipes
//requires: modestmining

ServerEvents.recipes(event => {

    const remove = [
        'modestmining:forge'
    ]

    const removeForge = [
        "minecraft:iron_shovel",
        "minecraft:iron_pickaxe",
        "minecraft:iron_axe",
        "minecraft:iron_hoe",
        "minecraft:golden_shovel",
        "minecraft:golden_pickaxe",
        "minecraft:golden_axe",
        "minecraft:golden_hoe",
        "minecraft:diamond_shovel",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_axe",
        "minecraft:diamond_hoe",
        "minecraft:netherite_shovel",
        "minecraft:iron_sword",
        "minecraft:golden_sword",
        "minecraft:diamond_sword",
        "minecraft:netherite_sword",
        "minecraft:iron_helmet",
        "minecraft:iron_chestplate",
        "minecraft:iron_leggings",
        "minecraft:iron_boots",
        "minecraft:golden_helmet",
        "minecraft:golden_chestplate",
        "minecraft:golden_leggings",
        "minecraft:golden_boots",
        "minecraft:diamond_helmet",
        "minecraft:diamond_chestplate",
        "minecraft:diamond_leggings",
        "minecraft:diamond_boots"
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    removeForge.forEach(item => {
        event.remove({ output: item, type: 'modestmining:forging_shaped' })
    })

    // Modest Mining Recipes
    event.shaped(
        Item.of('modestmining:forge'),
        [
            'ABA',
            'ACA',
            'DDD'
        ],
        {
            D: 'minecraft:iron_ingot',
            B: 'desecratedcore:iron_key_item',
            A: 'minecraft:cobbled_deepslate',
            C: 'minecraft:blast_furnace'
        }
    )

    event.shaped(
        Item.of('modestmining:copper_screw'),
        [
            'DD ',
            'D  ',
            '   '
        ],
        {
            D: 'minecraft:copper_ingot'
        }
    )

    // Restored Vanilla Recipes
    event.shaped(
        Item.of('minecraft:iron_pickaxe'),
        [
            'AAA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_axe'),
        [
            ' AA',
            ' BA',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_shovel'),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_hoe'),
        [
            ' AA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_shovel'),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_hoe'),
        [
            ' AA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_axe'),
        [
            ' AA',
            ' BA',
            ' B '
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_pickaxe'),
        [
            'AAA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_shovel'),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_hoe'),
        [
            ' AA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_axe'),
        [
            ' AA',
            ' BA',
            ' B '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_pickaxe'),
        [
            'AAA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_sword'),
        [
            ' A ',
            ' A ',
            ' B '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_sword'),
        [
            ' A ',
            ' A ',
            ' B '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_sword'),
        [
            ' A ',
            ' A ',
            ' B '
        ],
        {
            A: 'minecraft:diamond',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_helmet'),
        [
            'AAA',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_boots'),
        [
            'A A',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_leggings'),
        [
            'AAA',
            'A A',
            'A A'
        ],
        {
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:iron_chestplate'),
        [
            'A A',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_boots'),
        [
            'A A',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_helmet'),
        [
            'AAA',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_leggings'),
        [
            'AAA',
            'A A',
            'A A'
        ],
        {
            A: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('minecraft:diamond_chestplate'),
        [
            'A A',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_boots'),
        [
            'A A',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_helmet'),
        [
            'AAA',
            'A A',
            '   '
        ],
        {
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_leggings'),
        [
            'AAA',
            'A A',
            'A A'
        ],
        {
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:golden_chestplate'),
        [
            'A A',
            'AAA',
            'AAA'
        ],
        {
            A: 'minecraft:gold_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:chain', 6),
        [
            ' A ',
            ' B ',
            ' A '
        ],
        {
            A: 'minecraft:iron_nugget',
            B: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('minecraft:compass'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone'
        }
    )
    event.shaped(
        Item.of('minecraft:compass'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:redstone'
        }
    )
    event.shaped(
        Item.of('minecraft:brush'),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            C: 'minecraft:stick',
            A: 'minecraft:feather',
            B: 'minecraft:copper_ingot'
        }
    )

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