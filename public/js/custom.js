$('#fetch').click(function() {
	$.get('/fetch-calc').then(function(data) {
		console.log(data);
	});
});