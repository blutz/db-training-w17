$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1dHoiLCJhIjoiY2lubXRvZ2s4MHpsZ3UybTNjdjEwcjNxciJ9.WPP8vbPgAsqjEeoziI7uYA';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9'
  });
  
  var BASE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/';
  
  $('[data-eq-magnitude]').click(function(e) {
    e.preventDefault();
    var magnitude = $(e.target).data('eq-magnitude')
    console.log(magnitude);
  });
  $('[data-eq-time]').click(function(e) {
    e.preventDefault();
    var time = $(e.target).data('eq-time')
    console.log(time);
  });
});