$(document).ready(function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1dHoiLCJhIjoiY2lubXRvZ2s4MHpsZ3UybTNjdjEwcjNxciJ9.WPP8vbPgAsqjEeoziI7uYA';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9'
  });
  
  var listTemplate = Handlebars.compile($('#list-template').html());

  var BASE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/';
  var SELECTED_CLASS = 'btn-primary'
  
  var currentOptions = {
    magnitude: '4.5',
    time: 'month'
  }
  var currentData = {}
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
    updateData();
  }
  function setTime(time) {
    $('[data-eq-time]').removeClass('btn-primary');
    $('[data-eq-time="'+time+'"]').addClass('btn-primary');
    currentOptions.time= time;
    updateData();
  }
  
  function updateData() {
    var url = BASE_URL + currentOptions.magnitude + '_' + currentOptions.time + '.geojson';
    $.get(url)
    .done(function(resp) {
      if(typeof resp == 'string') {
        currentData = {error: resp}
        return;
      }
      currentData = resp;
    }).always(function() {
      updateList();
      updateMap();
    })
  }
  
  function updateList() {
    var context = {}
    context.earthquakes = currentData.features.map(function(el) {
      return {
        title: el.properties.title
      }
    });
    $('#sidebar-list').html(listTemplate(context));
  }
  var markers = []
  function updateMap() {
    markers.forEach(function(m) {
      m.remove();
    })
    markers = [];
    currentData.features.forEach(function(quake) {
      var el = document.createElement('div');
      $(el).addClass('marker');
      var marker = new mapboxgl.Marker(el)
        .setLngLat([quake.geometry.coordinates[0], quake.geometry.coordinates[1]])
        .addTo(map);
       markers.push(marker);
    });
  }
});