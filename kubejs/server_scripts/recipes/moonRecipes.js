//priority: 200
// Recipes

ServerEvents.recipes(event => {

    const remove = [
        'bloodmagic:altar',
        'bloodmagic:sacrificialdagger',
        'perdition:dis',
        'concatenatedadditionstools:kestrel'
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

    event.shaped(
        Item.of('concatenatedadditionstools:kestrel'),
        [
            'A  ',
            'A  ',
            'B  '
        ],
        {
            B: 'concatenatedadditionstools:gold_handle',
            A: 'perdition:corruptite'
        }
    )

    event.shaped(
        Item.of('concatenatedadditionstools:bloody_living_giant_sword'),
        [
            ' AA',
            'ABA',
            'CA '
        ],
        {
            B: 'bloodmagic:weakbloodorb',
            A: 'vampirism:blood_infused_iron_ingot',
            C: 'bloodmagic:soulsword'
        }
    ).replaceIngredient('bloodmagic:weakbloodorb', 'neepmeat:ore_dust')

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
            E: '#desecrated:ender_wish',
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

    // Botany Pots
    event.replaceInput(
        { mod: 'botanypots' },
        'minecraft:flower_pot',
        'perdition:pyrite'
    )

    const oreberries = [
        { berry: 'zinc', result: 'concatenatedadditionsmachines:zinc_nugget', ore: 'concatenatedadditionsmachines:zinc_ore', deepslate: 'create:deepslate_zinc_ore' },
        { berry: 'copper', result: 'concatenatedadditionsmachines:copper_nugget', ore: 'minecraft:copper_ore', deepslate: 'minecraft:deepslate_copper_ore' },
        { berry: 'gold', result: 'minecraft:gold_nugget', ore: 'minecraft:gold_ore', deepslate: 'minecraft:deepslate_gold_ore' },
        { berry: 'iron', result: 'minecraft:iron_nugget', ore: 'minecraft:iron_ore', deepslate: 'minecraft:deepslate_iron_ore' },
        { berry: 'essence', result: 'concatenationcore:experience_orb', ore: 'minecraft:emerald_ore', deepslate: 'minecraft:deepslate_emerald_ore', special: true }
    ];

    oreberries.forEach(entry => {
        const berryItem = entry.special ? `oreberriesreplanted:${entry.berry}_berry` : `oreberriesreplanted:${entry.berry}_oreberry`;
        // const bushItem = entry.special ? `oreberriesreplanted:${entry.berry}_berry_bush` : `oreberriesreplanted:${entry.berry}_oreberry_bush`;

        event.remove({ output: berryItem, type: 'botanypots:crop' });
    });

    const oreberryChance = 0.8;
    const oreberryMinRoll = 0;
    const oreberryMaxRoll = 3;
    const ticks = 1;
    const ticksRequiredT1 = 5000;
    const ticksRequiredT2 = 10000;
    const soilModifier = 1;
    const deepslateSoilModifier = 1.35;

    event.recipes.botanypots.soil('concatenatedadditionsmachines:zinc_ore', { block: 'concatenatedadditionsmachines:zinc_ore' }, ['zi'], ticks, soilModifier);
    event.recipes.botanypots.soil('create:deepslate_zinc_ore', { block: 'create:deepslate_zinc_ore' }, ['zi'], ticks, deepslateSoilModifier);
    event.recipes.botanypots.crop("oreberriesreplanted:zinc_oreberry_bush", ["zi"], { block: "oreberriesreplanted:zinc_oreberry_bush" }, [Item.of("oreberriesreplanted:zinc_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

    event.recipes.botanypots.soil('perdition:silver_ore', { block: 'perdition:silver_ore' }, ['si'], ticks, soilModifier);
    event.recipes.botanypots.crop("oreberriesreplanted:silver_oreberry_bush", ["si"], { block: "oreberriesreplanted:silver_oreberry_bush" }, [Item.of("oreberriesreplanted:silver_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT2, 1);

    event.recipes.botanypots.soil('minecraft:copper_ore', { block: 'minecraft:copper_ore' }, ['co'], ticks, soilModifier);
    event.recipes.botanypots.soil('minecraft:deepslate_copper_ore', { block: 'minecraft:deepslate_copper_ore' }, ['co'], ticks, deepslateSoilModifier);
    event.recipes.botanypots.crop("oreberriesreplanted:copper_oreberry_bush", ["co"], { block: "oreberriesreplanted:copper_oreberry_bush" }, [Item.of("oreberriesreplanted:copper_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

    event.recipes.botanypots.soil('minecraft:gold_ore', { block: 'minecraft:gold_ore' }, ['go'], ticks, soilModifier);
    event.recipes.botanypots.soil('minecraft:deepslate_gold_ore', { block: 'minecraft:deepslate_gold_ore' }, ['go'], ticks, deepslateSoilModifier);
    event.recipes.botanypots.crop("oreberriesreplanted:gold_oreberry_bush", ["gold_ore"], { block: "oreberriesreplanted:gold_oreberry_bush" }, [Item.of("oreberriesreplanted:gold_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

    event.recipes.botanypots.soil('minecraft:iron_ore', { block: 'minecraft:iron_ore' }, ['ir'], ticks, soilModifier);
    event.recipes.botanypots.soil('minecraft:deepslate_iron_ore', { block: 'minecraft:deepslate_iron_ore' }, ['ir'], ticks, deepslateSoilModifier);
    event.recipes.botanypots.crop("oreberriesreplanted:iron_oreberry_bush", ["iron_ore"], { block: "oreberriesreplanted:iron_oreberry_bush" }, [Item.of("oreberriesreplanted:iron_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

    event.recipes.botanypots.soil('minecraft:emerald_ore', { block: 'minecraft:emerald_ore' }, ['em'], ticks, soilModifier);
    event.recipes.botanypots.soil('minecraft:deepslate_emerald_ore', { block: 'minecraft:deepslate_emerald_ore' }, ['em'], ticks, deepslateSoilModifier);
    event.recipes.botanypots.crop("oreberriesreplanted:essence_berry_bush", ["emerald_ore"], { block: "oreberriesreplanted:essence_berry_bush" }, [Item.of("oreberriesreplanted:essence_berry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);
})