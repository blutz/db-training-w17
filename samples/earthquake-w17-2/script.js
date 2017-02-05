$(document).ready(function() {
  // Handlebars boilerplate code
  var content = $('#content');
  var earthquakeTemplate = Handlebars.compile($('#earthquake-template').html());
  var errorTemplate = Handlebars.compile($('#earthquake-error-template').html());
  var magnitudeButtonTemplate = Handlebars.compile($('#magnitude-buttons-template').html());
  var refreshButton = $('#refresh-button');
  refreshButton.click(function() { render(); });


  var EARTHQUAKE_API_BASE = '//earthquake.usgs.gov/earthquakes/feed/v1.0/summary/'
  var EARTHQUAKE_API_SUFFIX = '_day.geojson'
  var MAGNITUDES = [
    { magnitude: 'significant', label: 'Big quakes' },
    { magnitude: '4.5', label: '4.5+' },
    { magnitude: '2.5', label: '2.5+' },
    { magnitude: '1.0', label: '1.0+' },
    { magnitude: 'all', label: 'Everything' },
  ];
  function getUrl(magnitude) {
    magnitude = magnitude || MAGNITUDES[1].magnitude;
    return EARTHQUAKE_API_BASE + magnitude + EARTHQUAKE_API_SUFFIX;
  }
  function updateEarthquakes(magnitude, cb) {
    var myPromise = $.get(getUrl(magnitude))
    console.log(myPromise)
    myPromise.done(function(res) {
        cb(undefined, res)
      })
      .fail(function(error) {
        cb(error)
      })
  }

  function render(newMagnitude) {
    updateEarthquakes(newMagnitude, function(error, res) {
      var context = {
        earthquakes: res.features,
      };
      if (error) { content.html(errorTemplate()); }
      else { content.html(earthquakeTemplate(context)); }

      renderButtons();
    })
  }

  function renderButtons() {
    var context = {
      magnitude: MAGNITUDES
    }
    $('#magnitude-buttons').html(magnitudeButtonTemplate(context))
    $('#magnitude-buttons a').click(function(e) {
      var magnitude = $(e.target).data('magnitude');
      render(magnitude);
    })
  }

  // Initial load
  render();
});
