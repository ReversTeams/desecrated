//priority: 500
//requires: create
// Hide items

JEIEvents.hideItems(event => {
    event.hide(item => item.mod === 'create')
})