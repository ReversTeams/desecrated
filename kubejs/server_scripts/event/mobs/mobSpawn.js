//priority: 500
// Mob Spawn Events
EntityEvents.spawned(event => {
  if (event.entity.type == "celestisynth:star_monolith") {
    event.entity.potionEffects.add("minecraft:wither", 1250, 0, false, false) 
  }
})