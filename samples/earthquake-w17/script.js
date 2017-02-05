$(document).ready(function() {
  // Boilerplate handlebars code
  var template = Handlebars.compile($('#earthquake-entry').html())
  var errorTemplate = Handlebars.compile($('#earthquake-error').html())
  var container = $('#quakes')


  var EARTHQUAKE_API = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson'

  function getEarthquakeData(cb) {
    $.get(EARTHQUAKE_API)
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

  function refresh() {
    getEarthquakeData(function(error, resp) {
      if (error) renderError();
      else renderEarthquakes(resp);
    });
  }

  // First load
  refresh();
});
