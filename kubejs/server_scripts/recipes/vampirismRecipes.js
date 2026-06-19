//priority: 200
// Recipes

ServerEvents.recipes(event => {

        const remove = [
                'vampirism:blood_sieve',
                'vampirism:blood_grinder'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
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
                        A: 'farmersdelight:diamond_knife'
                }
        )
});
