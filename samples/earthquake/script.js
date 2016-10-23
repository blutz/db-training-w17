$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1dHoiLCJhIjoiY2lubXRvZ2s4MHpsZ3UybTNjdjEwcjNxciJ9.WPP8vbPgAsqjEeoziI7uYA';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9'
  });

  var BASE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/';
  var SELECTED_CLASS = 'btn-primary'
  
  var currentOptions = {
    magnitude: '4.5',
    time: 'month'
  }
  setMagnitude(currentOptions.magnitude);
  setTime(currentOptions.time);

  $('[data-eq-magnitude]').click(function(e) {
    e.preventDefault();
    var magnitude = $(e.target).data('eq-magnitude')
    setMagnitude(magnitude);
  });
  $('[data-eq-time]').click(function(e) {
    e.preventDefault();
    var time = $(e.target).data('eq-time')
    setTime(time);
  });

  function setMagnitude(magnitude) {
    $('[data-eq-magnitude]').removeClass('btn-primary');
    $('[data-eq-magnitude="'+magnitude+'"]').addClass('btn-primary');
    currentOptions.magnitude = magnitude;
  }
  function setTime(time) {
    $('[data-eq-time]').removeClass('btn-primary');
    $('[data-eq-time="'+time+'"]').addClass('btn-primary');
    currentOptions.time= time;
  }
});