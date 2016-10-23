$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1dHoiLCJhIjoiY2lubXRvZ2s4MHpsZ3UybTNjdjEwcjNxciJ9.WPP8vbPgAsqjEeoziI7uYA';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9'
  });
});