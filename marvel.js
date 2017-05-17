$(document).ready(function () {

  // *********Engage Submit Button ********************
  $("form").submit(function (event) {
    event.preventDefault();

    // ********* Post snarky comment from Comic Store Employee after Submit **********

    var comments = [
      "OMG... that's adorable. I remember my first comic. Is your mom waiting out in the car?",
      "You can't touch ANY of these. Your hands look like you've been eating pizza & cheetos... like all day",
      "I can't let you look at these unless you can sing their theme songs. Yes they all have theme songs. I wouldn't kid about that.",
      "Did Thor give you one of his shirts, or did you think it would actually look cool to cut the sleeves out?",
      "No I don't live in my mom's basement. I live in an Underground Lair that just happens to BE underneath my mom's house.",
      "Hey... don't come back here unless you bring Twizzlers & Code Red Mountain Dew, buddy boy.",
      "Settle an argument. Who would win in a fight between Deadpool & Chuck Norris?",
      "Your eyes say you like Code Red Mountain Dew, but your members-only jacket says you drink Coke Zero",
      "Pop quiz... You have a gun pointed at you & have to choose between Code Red Mountain Dew & Wizard powers. What do you do, Jack? What do you do?"
    ];

    var randomIndex = Math.floor(Math.random() * comments.length);

    var randomComment = comments[randomIndex];

    $('.snarkyComment').text(randomComment).fadeIn(500).delay(10000).fadeOut(1000);

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
          var html = "<img src='" + results.data.results[i].images[0].path + "/portrait_uncanny.jpg'" + "/>";
          $(".results").append(html);
          }
        })
        $(".results").empty();
      })
    })
