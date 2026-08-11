//priority: 200
// Recipes

ServerEvents.recipes(event => {

        const remove = [
                'vampirism:blood_sieve',
                'vampirism:blood_grinder',
                'vampirism:umbrella'
        ]

        const removeCraftingShapeless = [
                'vampirism:blood_infused_iron_ingot',
                'vampirism:blood_infused_enhanced_iron_ingot'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })
        removeCraftingShapeless.forEach(item => {
                event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
        })

        event.shaped(
                Item.of('vampirism:blood_sieve'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        C: 'minecraft:iron_ingot',
                        E: '#minecraft:planks',
                        A: 'minecraft:quartz_block',
                        B: 'minecraft:cauldron',
                        D: 'butchery:blood_grate',
                        F: 'vampirism:blood_container'
                }
        )
        event.shaped(
                Item.of('vampirism:blood_grinder'),
                [
                        ' A ',
                        'BCB',
                        'BDB'
                ],
                {
                        B: '#minecraft:planks',
                        C: 'butchery:meat_grinder',
                        D: 'minecraft:iron_block',
                        A: 'butchery:diamond_skinning_knife'
                }
        ).replaceIngredient('butchery:diamond_skinning_knife', 'minecraft:stick')
        event.shaped(
                Item.of('vampirism:umbrella'),
                [
                        'AAA',
                        'BCB',
                        'DCE'
                ],
                {
                        C: 'vampiresneedumbrellas:diamond_umbrella_rod',
                        D: 'biomancy:exotic_dust',
                        B: 'vampirism:vampire_orchid',
                        E: 'biomancy:stone_powder',
                        A: 'minecraft:black_wool'
                }
        )
});
