//priority: 500
// World starts at night
ServerEvents.loaded(event => {
    const { server } = event
    if (!server.persistentData.getBoolean('kubejs_night_start')) {
        server.getAllLevels().forEach(level => level.setDayTime(13000))
        server.persistentData.putBoolean('kubejs_night_start', true)
    }
})