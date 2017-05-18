$(document).ready(function () {
  $(".progress").hide();

// ******** Testing for using Local Storage **********

  // if (localStorage.select) {
  //   $('select').val(localStorage.select)
  // }
  // getHero()
  //   .then(addComicsToPage);
  // } <-- Closing bracket of "$(document).ready(function () {" ???

  // function getHero() {
  //   if (localStorage.select) {
  //     const heroResult = JSON.parse(localStorage.select);
  //     console.log('From Local Storage:', heroResult);
  //
  //   }
  //
  // }

  // *********Engage Submit Button ********************
  $("form").submit(function (event) {
    event.preventDefault();
    $("#submit").attr("disabled", "disabled");
    $(".progress").show();

    // ********* Post snarky comment from Comic Store Employee after Submit **********

    var comments = [
      "OMG... that's adorable. I remember my first comic. Is your mom waiting out in the car?",
      "No you can't touch any of these. Your hands look like you've been eating pizza & cheetos... like... All. Day",
      "I can't let you look at these unless you can sing their theme songs. Yes they all have theme songs. Ask anyone here. They'll help you learn the song.",
      "Did Thor give you one of his shirts, or did you think it would actually look cool to cut the sleeves out?",
      "No I don't live in my mom's basement. I live in an 'Underground Lair' that just happens to BE in my mom's basement if you must know, Mr. 'Real Job'",
      "Hey... don't come back here unless you bring Twizzlers & Code Red Mountain Dew... Cypher.",
      "Settle an argument. Who would win in a fight between Wolverine or Chuck Norris? Trick question, 'dude'. The correct answer was, 'all mankind'",
      "Your cargo shorts say you like Code Red Mountain Dew, but your Crossfit tank-top says you drink Coke Zero",
      "Pop quiz... You have a gun pointed at you & have to choose between Code Red Mountain Dew & Wizard powers. What do you do, Jack? What do you do?",
      "Ohhhhh... you're looking for new ideas for a TATTOOOO... then you TOTALLY wanna get one of Jubilee. Yeah, she's like a Crossfit super star.",
      "Before you say anything, I can tell you it is ABSOLUTELY illegal to get a tattoo of Wolverine fighting Taz on your arm.",
      "No. 1) Go back outside. 2) Think about what you just asked. 3) Come back. 4) Ask for forgiveness."
    ];

    var randomIndex = Math.floor(Math.random() * comments.length);

    var randomComment = comments[randomIndex];

    $('.snarkyComment').text(randomComment).fadeIn(500).delay(10000).fadeOut(1000);

    // ****** API Request needs the Character ID & Public API Key ********
    // ****** Get Character ID when Hero is selected + submit button *******

    var characterID = $('select').val();

    console.log(characterID);

    var apiRequest = "https://gateway.marvel.com:443/v1/public/characters/" + characterID + "/comics?apikey=1beea86e559761cbc8bcee0e0aef1ab6"
    // return
    $.get(apiRequest)
      .then(function(results) {
        // console.log('From API:' results);
        // localStorage.select??? = JSON.stringify(results);
        // return results;

        // ******* Itirate through results array for Images to return ********

        for(var i =0; i <results.data.results.length; i++){
          console.log(results.data.results[i].images[0].path)
          var html = "<img src='" + results.data.results[i].images[0].path + "/portrait_uncanny.jpg'" + "/>";
          $(".results").append(html);
          $("#submit").removeAttr("disabled");
          $(".progress").hide();
          }
        })
        $(".results").empty();
      })
    })
