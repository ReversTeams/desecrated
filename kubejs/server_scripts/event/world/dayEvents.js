//priority: 500
// Day-based events
ServerEvents.loaded(event => {
    const { server } = event
    let level = event.server.getLevel('minecraft:overworld');
    let time = level.getDayTime();

    if (!server.persistentData.getBoolean('kubejs_night_start')) {
        server.getAllLevels().forEach(level => level.setDayTime(13000)) // World starts at night
        server.persistentData.putBoolean('kubejs_night_start', true)
    }

    if (!server.persistentData.getBoolean('kubejs_day7')) {
        if (time >= 144000 && time < 144020) {
            event.server.tell(Text.red('The hunters will arrive soon!'));
            server.persistentData.putBoolean('kubejs_day7', true)
        }
    }
})