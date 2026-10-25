//priority: 500
// Checks if the player is a vampire at start
//requires: vampirism

PlayerEvents.loggedIn(event => {
    const { server } = event
    let player = event.player;
    let VampirismAPI = Java.loadClass('de.teamlapen.vampirism.api.VampirismAPI');

    let vampirePlayer = VampirismAPI.getVampirePlayer(player).orElse(null);

    if (!server.persistentData.getBoolean('kubejs_vampire_check')) {
        if (!vampirePlayer || vampirePlayer.getLevel() == 0) {
            player.runCommandSilent('vampirism level vampirism:vampire 1 @s');
            server.persistentData.putBoolean('kubejs_vampire_check', true)
        }
    }

});