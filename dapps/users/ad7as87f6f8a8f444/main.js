// DAPP USER CONTROLLER

Events.subscribe('request', response => {
	// Callback
	Events.publish(system.StrCtrl, 'insert', response.payload);
	
	// NOT Callback
	Events.publish(system.WebCtrl, 'response', response.payload);
	Events.publish(system.LogCtrl, 'debug', response.payload);
});

Events.subscribe('find', response => {
	Events.publish(system.StrCtrl, 'find', response.payload);
})

Events.subscribe('remove', response => {
	Events.publish(system.StrCtrl, 'remove', response.payload);
})

Events.subscribe('update', response => {
	Events.publish(system.StrCtrl, 'update', response.payload);
})