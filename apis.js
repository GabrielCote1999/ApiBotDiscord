var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();

const url = 'https://dog.ceo/api/breeds/image/random'

Http.open('GET', url);


Http.onload= function(){

    //from text to json object
    var data = JSON.parse(Http.responseText);

    console.log(data.message)
}

Http.send();
