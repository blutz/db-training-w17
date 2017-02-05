$(document).ready(function() {
  // Boilerplate UI code
  var template = Handlebars.compile($('#earthquake-entry').html());
  var errorTemplate = Handlebars.compile($('#earthquake-error').html());
  var magnitudeButtonsTemplate = Handlebars.compile($('#magnitude-button-template').html())
  var container = $('#quakes')
  function buttonBindings() {
    $('#refresh-button').click(refresh);
  }


   // Earthquake code
  var EARTHQUAKE_API_BASE = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/'
  var EARTHQUAKE_API_PREFIX = '_day.geojson'
  var MAGNITUDES = [
    { magnitude: 'significant', label: 'Big ones' },
    { magnitude: '4.5', label: '4.5+' },
    { magnitude: '2.5', label: '2.5+' },
    { magnitude: '1.0', label: '1.0+' },
    { magnitude: 'all', label: 'All quakes' }
  ]

  function makeApiUrl(magnitude) {
    magnitude = magnitude || MAGNITUDES[2].magnitude
    return EARTHQUAKE_API_BASE + magnitude + EARTHQUAKE_API_PREFIX
  }
  function getEarthquakeData(magnitude, cb) {
    $.get(makeApiUrl(magnitude))
      .done(function(res) {
        cb(undefined, res.features)
      })
      .fail(function(error) {
        cb(error)
      })
  }
  function renderEarthquakes(resp) {
    var context = {
      quakes: resp
    }
    container.html(template(context))
  }
  function renderError() { container.html(errorTemplate()) }

  function renderMagnitudeButtons() {
    var context = { buttons: MAGNITUDES };
    $('#magnitude-buttons').html(magnitudeButtonsTemplate(context));
    $('#magnitude-buttons a').click(function(e) {
      var newMagnitude = $(e.target).data('magnitude');
      refresh(newMagnitude)
    });
  }

  function refresh(magnitude) {
    getEarthquakeData(magnitude, function(error, resp) {
      if (error) renderError();
      else renderEarthquakes(resp);

      renderMagnitudeButtons();
    });
  }


  // First load
  buttonBindings();
  refresh();
});
