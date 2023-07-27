var cityName = document.getElementById('city-name');
var searchButton = document.getElementById('search-button');






function getApi() {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=b4e27608152eaadfeaf81a63c8d579f6';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var listItem = document.createElement('ul');
                console.log(data[i].name);
                listItem.textContent = data[i].name;
               
            }
        });


}


searchButton.addEventListener('click', getApi);
