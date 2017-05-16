$(document).ready(function () {
  // var api = require('http(s)://gateway.marvel.com/')

  // var marvel = api.createClient({
  //   publicKey: '1beea86e559761cbc8bcee0e0aef1ab6',
  //   privateKey: ''
  // $.get("https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=1beea86e559761cbc8bcee0e0aef1ab6")
  //   .then(function (results) {
  //     console.log(results);
  //   })

  $("form").submit(function (event) {
    event.preventDefault();
    // itirate through all children of select menu, find the one which has the selected attribute
    // & then get the value of the selected item. Set that to global variable.
    var characterID = $('select').val();
    console.log(characterID);
    var apiRequest = "https://gateway.marvel.com:443/v1/public/characters/" + characterID + "/comics?apikey=1beea86e559761cbc8bcee0e0aef1ab6"

    $.get(apiRequest)
      .then(function(results) {
        for(var i =0; i <results.data.results.length; i++){
          console.log(results.data.results[i].images[0].path)
          var html = "<img src='" + results.data.results[i].images[0].path + "/portrait_xlarge.jpg'" + "/>";
          $(".results").append(html);
        }

        // for(var i=0; i<results.length; i++){
        // console.log(results.data.results);
        })
        $(".results").empty();
      })
    })



  // $("supers").change(function() {
  //   option = $("supers").val();
  // });
//
