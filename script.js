// const url = "https://api.kanye.rest";
// fetch(url)
// .then(function(response) {
//     return response.json();
// }).then(function(json) {
//     console.log(json);
//     theQuote = json.quote;
// })

var countryName;
document.getElementById("submit1").addEventListener("click", function(event) {
    event.preventDefault();
    var value = document.getElementById("val1").value;
    if (value === "")
        value = "USA";
    console.log(value);

    const url2 = 'https://restcountries.eu/rest/v2/name/' + value;
    fetch(url2)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        var img2 = document.getElementById("img2");
        var imgAdd = document.createElement("img");
        imgAdd.src = json[0].flag;
        imgAdd.style.width = "70%";
        img2.appendChild(imgAdd);

        // document.getElementById("flag").src = json[0].flag;
        countryName = json[0].demonym;
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

document.getElementById("submit1").addEventListener("click", function(event) {
    event.preventDefault();
    var number = document.getElementById("val2").value;
    if (number === "")
        number = getRandomInt(1, 671);
    if (number > 671) {
        document.getElementById("character").innerHTML = "Enter a number smaller than 672";
        return;
    }

    const url3 = 'https://rickandmortyapi.com/api/character/' + number;
    fetch(url3)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        document.getElementById("character").innerHTML = json.name + " is " + countryName;
        var img1 = document.getElementById("img1");
        var imgAdd = document.createElement("img");
        imgAdd.src = json.image;
        imgAdd.style.width = "70%";
        img1.appendChild(imgAdd);

        // document.getElementById("morty").src = json.image;
        document.getElementById("kanyeQuote").innerHTML = "Known for saying, " + '"' + theQuote + '"';
    })
})

var theQuote;
document.getElementById("submit1").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://api.kanye.rest";
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
        theQuote = json.quote;
    })
})


