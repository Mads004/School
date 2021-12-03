fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.1&lon=9.58&altitude=130')
  .then(response => response.json())
  .then(data => console.log(data.properties.timeseries[0].data.instant.details));

  document.getElementById("btn1").onclick = function() {
    console.log('Været for Ski');
  }
