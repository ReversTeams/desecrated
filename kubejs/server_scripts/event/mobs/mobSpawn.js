// priority: 500
// Mob Spawn Events
EntityEvents.spawned(event => {
  if (event.entity.type == "celestisynth:star_monolith") {
    event.entity.potionEffects.add("minecraft:wither", 1250, 0, false, false) 
  }

  if (!event.entity.isLiving()) return

  let dimensionId = event.entity.level.dimension.toString()

  if (dimensionId === "macabre:the_pit") {
    let addAttributeBase = (attributeId, amount) => {
      let instance = event.entity.getAttribute(attributeId)
      if (instance !== null) {
        instance.setBaseValue(instance.baseValue + amount)
      }
    }

    addAttributeBase("minecraft:generic.max_health", 20)
    event.entity.setHealth(event.entity.maxHealth)
    addAttributeBase("minecraft:generic.attack_damage", 5)
  }

  if (dimensionId === "reverseeon:depth_of_myth") {
    let addAttributeBase = (attributeId, amount) => {
      let instance = event.entity.getAttribute(attributeId)
      if (instance !== null) {
        instance.setBaseValue(instance.baseValue + amount)
      }
    }

    addAttributeBase("minecraft:generic.max_health", 50)
    event.entity.setHealth(event.entity.maxHealth)
    addAttributeBase("minecraft:generic.attack_damage", 15)
  }
})