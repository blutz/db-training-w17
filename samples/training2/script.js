$(document).ready(function() {
	$('.mydiv')
		.css({color: 'red'})
		.click(function() {
			alert('you clicked here');
		});
	var EQURL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
	$.ajax(EQURL)
		.done(function(resp) {
			console.log(resp);
			displayEarthquakes(resp.features);
		})
		.fail(function() {
			alert('failed');
		})
		.always()

	function displayEarthquakes(eqs) {
		var mydiv = $('.mydiv');
		eqs.forEach(function(eq) {
			debugger
			mydiv.append('<span>'+eq.properties.title+'</span>');
		});
	}
});