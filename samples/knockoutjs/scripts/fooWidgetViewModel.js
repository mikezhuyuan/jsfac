register('fooWidgetViewModel', function(eventLog){
	var count = 0;
	return {
		click: function(){
			eventLog.log('Click ' + ++count + ' on fooWidgetViewModel');
		}
	};
});