
document.getElementById("btn1").onclick = function() {
    console.log('Været for Ski');
    document.getElementById('1').style.display = "none";
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.1&lon=9.58&altitude=130')
    .then(response => response.json())
    .then(data => console.log(data.properties.timeseries[0].data.instant.details));
}

document.getElementById("btn2").onclick = function() {
    console.log('Været for Oslo');
    document.getElementById('2').style.display = "none";
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.1&lon=9.58&altitude=130')
    .then(response => response.json())
    .then(data => console.log(data.properties.timeseries[0].data.instant.details));
}

document.getElementById("btn3").onclick = function() {
    console.log('Været for Bergen');
    document.getElementById('3').style.display = "none";
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.1&lon=9.58&altitude=130')
    .then(response => response.json())
    .then(data => console.log(data.properties.timeseries[0].data.instant.details));
}

document.getElementById("btn4").onclick = function() {
    console.log('Været for Trondheim');
    document.getElementById('4').style.display = "none";
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.1&lon=9.58&altitude=130')
    .then(response => response.json())
    .then(data => console.log(data.properties.timeseries[0].data.instant.details));
}
