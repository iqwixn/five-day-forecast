var searchButton = document.getElementById('Search-Button');

var cityName = ""



function getApi() {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=b4e27608152eaadfeaf81a63c8d579f6';
  
    var options = {
       
        }
    };