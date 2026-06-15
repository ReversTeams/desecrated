//priority: 500
// Adds EMI info to items

JEIEvents.information(event => {
  event.addItem('sons_of_sins:sickle_of_struggle', ['Drops from Betrayed Guzzlers', 'Low Drop Chance'])
  event.addItem('sons_of_sins:bottle_of_blood', ['Drops from creatures killed with the Sickle of Struggle.', 'Requires a glass bottle in the hotbar.'])
  event.addItem('sons_of_sins:ether_ashes', ['Drops from creatures killed with the Osseous Sword', 'Common drop chance.'])

  event.addItem('eat_yourself:raw_player_meat', ['Harvested from yourself with a knife.', 'Hurts the player for 1 heart on harvesting.'])
})