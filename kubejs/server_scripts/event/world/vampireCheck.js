//priority: 500
// Checks if the player is a vampire at start
//requires: vampirism

PlayerEvents.loggedIn(event => {
    let player = event.player;
    let VampirismAPI = Java.loadClass('de.teamlapen.vampirism.api.VampirismAPI');
    
    // Resolve the LazyOptional to get the actual IVampirePlayer object
    let vampirePlayer = VampirismAPI.getVampirePlayer(player).orElse(null);
    
    if (!vampirePlayer || vampirePlayer.getLevel() == 0) {
        player.runCommandSilent('vampirism level vampirism:vampire 1 @s');
    }
});