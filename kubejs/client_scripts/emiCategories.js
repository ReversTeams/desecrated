//priority: 500
//requires: emixx
// EMI++ Categories Registry
// Other categories are found in config

EmiPlusPlusEvents.registerGroups(event => {
    event.register("desecrated:leaf_pile", "#immersive_weathering:leaf_piles")
    event.register("desecrated:spikes", "supplementaries:bamboo_spikes_tipped")
    event.register("desecrated:bunting", "supplementaries:bunting")

    event.register("desecrated:tents", "simplytents:tent")
    event.register("desecrated:wall_tents", "simplytents:wall_tent")
    event.register("desecrated:canopy_tents", "simplytents:roof_tent")
    event.register("desecrated:zip_tents", "simplytents:zip_tent")
    event.register("desecrated:wall_canvas", "simplytents:canvas_wall")
})