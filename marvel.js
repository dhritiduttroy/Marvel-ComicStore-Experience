$(document).ready(function () {

  // *********Engage Submit Button ********************
  $("form").submit(function (event) {
    event.preventDefault();

    // ****** API Request needs the Character ID & Public API Key ********
    // ****** Get Character ID when Hero is selected + submit button *******

    var characterID = $('select').val();

    console.log(characterID);

    var apiRequest = "https://gateway.marvel.com:443/v1/public/characters/" + characterID + "/comics?apikey=1beea86e559761cbc8bcee0e0aef1ab6"

    $.get(apiRequest)
      .then(function(results) {

        // ******* Itirate through results array for Images to return ********

        for(var i =0; i <results.data.results.length; i++){
          console.log(results.data.results[i].images[0].path)
          var html = "<img src='" + results.data.results[i].images[0].path + "/portrait_xlarge.jpg'" + "/>";
          $(".results").append(html);
          }
        })
        $(".results").empty();
      })
    })
