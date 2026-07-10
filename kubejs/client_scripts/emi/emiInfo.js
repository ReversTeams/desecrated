//priority: 500
// Adds EMI info to items

JEIEvents.information(event => {
  event.addItem('sons_of_sins:sickle_of_struggle', ['Drops from Betrayed Guzzlers', 'Low Drop Chance'])
  event.addItem('sons_of_sins:bottle_of_blood', ['Drops from creatures killed with the Sickle of Struggle.', 'Requires a glass bottle in the hotbar.'])
  event.addItem('sons_of_sins:ether_ashes', ['Drops from creatures killed with the Osseous Sword', 'Common drop chance.'])

  //event.addItem('eat_yourself:raw_player_meat', ['Harvested from yourself with a knife.', 'Hurts the player for 1 heart on harvesting.'])
  
  event.addItem( 'bloodyhell:chalice_of_the_dammed', ['Find Vesper\'s Hut to complete Vesper\'s quest.', 'Bring 1 essence and 1 sinful bone to Vesper.'])

  event.addItem( 'neepmeat:integrator_egg', ['Obtained by throwing a reanimated heart into lava surrounded by 8 rusted metal.'])

  event.addItem( 'vampirism:blood_bottle', ['Obtained by drinking a creature\'s blood with a glass bottle.', 'You can right click any tank with 1000mb of blood to create a bottle of blood.'])

  event.addItem( 'hexalia:spirit_bloom', ['Generates naturally in the world.'])
  event.addItem( 'hexalia:dreamshroom', ['Generates naturally in the world.'])
  event.addItem( 'hexalia:siren_kelp', ['Generates naturally in the world.'])
  event.addItem( 'hexalia:ghost_fern', ['Generates naturally in the world.'])
  event.addItem( 'hexalia:celestial_bloom', ['Generates naturally in the world.'])
  event.addItem( 'hexalia:witchweed', ['Generates naturally in the world.'])  
  event.addItem( 'hexalia:bottled_moth', ['Obtained by right clicking a moth with a bottle.']) 

  event.addItem( 'ascendant_arcana:budding_restorine', ['Found deep within caves.'])
  event.addItem( 'ascendant_arcana:netherrack_budding_restorine', ['Found within the Nether.'])
  event.addItem( 'ascendant_arcana:massive_restorine_cluster', ['Found deep within caves and within the Nether.']) 
  event.addItem( 'ascendant_arcana:restorine_cluster', ['Found deep within caves and within the Nether.']) 
})