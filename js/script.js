//------------------------------------
//------------------------------------
//--------Last updated on Mar 1, 2017
//--------by Davey T. Knific----------
//------------------------------------
//------------------------------------

$(document).ready(function() {

  var beginButton = $(".begin"),
    introScreen = $(".content__introScreen"),
    testOneScreen = $(".content__testOne"),
    testTwoScreen = $(".content__testTwo"),
    resultsScreen = $(".content__results"),
    testOneSubmit = $(".testOne__submitButton"),
    testTwoSubmit = $(".testTwo__submitButton"),
    resetSubmit = $(".content__results--reset"),
    successMsgOne = $(".testOne__successMessage p"),
    successMsgTwo = $(".testTwo__successMessage p"),
    checkmark = $(".checkmark");

  var userInputPW = $(".testOne__formOne"),
    userInputPWC = $(".testOne__formTwo"),
    randomStringDump = $(".random__highlite"),
    userInputRandom = $(".testTwo__formOne");

  var numericals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = "`~!@#$%^&*()_+=-[]\|}{;;,./?><";
  var hasNumber = false,
    hasSymbol = false;

  var generateRandomString = function() {
    var randomString = "";
    var alphabet = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = ",./;?~!@#$&*_+=-";
    var allCharacters = alphabet + numbers + symbols;
    var result = [];

    for (var i = 0; i < 5; i++) {
      var rng = Math.floor(Math.random() * 84);
      var index = allCharacters[rng];
      result.push(index);
    }

    randomString = result.join("");
    randomStringDump.text(randomString);
  };


  //---------------------
  //-Event handlers for
  //--all submit buttons

  beginButton.click(function() {
    introScreen.animate({
      opacity: 0
    });
    testOneScreen.css("right", "0");
    testOneScreen.delay(700).animate({
      opacity: 1
    });
    $(".testOne__questions").delay(1200).animate({
      opacity: 1
    });
    //Reset the results screen css to default
    //in case the user has already viewed
    //the demo once and has clicked reset.
    resultsScreen.css({
      "z-index": "",
      "bottom": ""
    });
    userInputPW.val("");
    userInputPWC.val("");
    $(".testOne__badge .fail").removeClass("badge__visible");
    $(".testOne__badge .pass").removeClass("badge__visible");
    $(".testOne__badgeTwo .fail").removeClass("badge__visible");
    $(".testOne__badgeTwo .pass").removeClass("badge__visible");
  });

  testOneSubmit.click(function() {
    var firstForm = $(".testOne__badge .pass");
    var secondForm = $(".testOne__badgeTwo .pass");

    if (firstForm.hasClass("badge__visible") && (secondForm.hasClass("badge__visible"))) {
      successMsgOne.animate({
        top: 0
      });
      checkmark.css("z-index", "1");
      checkmark.animate({
        height: "300px",
        width: "300px",
        marginLeft: "-150px",
        lineHeight: "300px",
        fontSize: "140px",
        opacity: "1"
      });
      checkmark.animate({
        opacity: "0"
      });
      setTimeout(function() {
        checkmark.css({
          "height": "",
          "width": "",
          "margin-left": "",
          "line-height": "",
          "font-size": "",
          "opacity": "",
          "z-index": ""
        });
      }, 1000);

      setTimeout(function() {
        testOneScreen.animate({
          opacity: 0
        });
        testOneScreen.css("opacity", "0");

        testTwoScreen.css("top", "0");
        testTwoScreen.delay(700).animate({
          opacity: 1
        });
        $(".testTwo__questions").delay(1200).animate({
          opacity: 1
        });

      }, 1100);


      generateRandomString();

    } else {
      //If the user has entered
      //information resulting in
      //an error-----------------


      $(".testOne__errorWindow").css({
        "opacity": "0.75",
        "z-index": "1"
      });
      $(".testOne__errorWindow--message").css({
        "opacity": "1",
        "z-index": "2"
      });
      $(".testOne__errorWindow--message").animate({
        left: "160px"
      }, 50);
      $(".testOne__errorWindow--message").animate({
        left: "140px"
      }, 50);
      $(".testOne__errorWindow--message").animate({
        left: "150px"
      }, 50);
      $(".errorSubmit").click(function() {
        userInputPWC.val("");
        $(".testOne__badgeTwo .fail").removeClass("badge__visible");



        $(".testOne__errorWindow").css({
          "opacity": "",
          "z-index": ""
        });
        $(".testOne__errorWindow--message").css({
          "opacity": "",
          "z-index": ""
        });




      });


    }
  });

  userInputPWC.keypress(function(e) {
    if (e.which == 13) {
      var firstForm = $(".testOne__badge .pass");
      var secondForm = $(".testOne__badgeTwo .pass");

      if (firstForm.hasClass("badge__visible") && (secondForm.hasClass("badge__visible"))) {
        successMsgOne.animate({
          top: 0
        });
        setTimeout(function() {
          testOneScreen.animate({
            opacity: 0
          });
          testOneScreen.css("opacity", "0");

          testTwoScreen.css("top", "0");
          testTwoScreen.delay(700).animate({
            opacity: 1
          });
          $(".testTwo__questions").delay(1200).animate({
            opacity: 1
          });

        }, 1100);


        generateRandomString();

      } else {
        //First determine error
        //-and assign the proper
        //--error message.
        //--------------------


        $(".testOne__errorWindow").css({
          "opacity": "0.75",
          "z-index": "1"
        });
        $(".testOne__errorWindow--message").css({
          "opacity": "1",
          "z-index": "2"
        });
        $(".testOne__errorWindow--message").animate({
          left: "160px"
        }, 50);
        $(".testOne__errorWindow--message").animate({
          left: "140px"
        }, 50);
        $(".testOne__errorWindow--message").animate({
          left: "150px"
        }, 50);
        $(".errorSubmit").click(function() {
          userInputPWC.val("");
          $(".testOne__badgeTwo .fail").removeClass("badge__visible");



          $(".testOne__errorWindow").css({
            "opacity": "",
            "z-index": "",
            "display": ""
          });
          $(".testOne__errorWindow--message").css({
            "opacity": "",
            "z-index": "",
            "display": ""
          });


        });
      }
    }
  });

  testTwoSubmit.click(function() {

    var userMatch = userInputRandom.val();
    var currentRandomString = randomStringDump.text();

    if (userMatch == currentRandomString) {
      successMsgTwo.animate({
        top: 0
      });
      setTimeout(function() {
        testTwoScreen.animate({
          opacity: 0
        });
        testTwoScreen.css("opacity", "0");
        resultsScreen.css("bottom", "0");
        resultsScreen.delay(700).animate({
          opacity: 1
        });
      }, 1100);
    } else if (userMatch != currentRandomString) {
      $(".testOne__errorWindow").css({
        "opacity": "0.75",
        "z-index": "1"
      });
      $(".testOne__errorWindow--message").css({
        "opacity": "1",
        "z-index": "2"
      });
      $(".testOne__errorWindow--message").animate({
        left: "160px"
      }, 50);
      $(".testOne__errorWindow--message").animate({
        left: "140px"
      }, 50);
      $(".testOne__errorWindow--message").animate({
        left: "150px"
      }, 50);
      $(".errorSubmit").click(function() {
        $(".testOne__errorWindow").css({
          "opacity": "",
          "z-index": ""
        });
        $(".testOne__errorWindow--message").css({
          "opacity": "",
          "z-index": ""
        });


      });
    }
  });

  userInputRandom.keypress(function(e) {
    if (e.which == 13) {
      var userMatch = userInputRandom.val();
      var currentRandomString = randomStringDump.text();

      if (userMatch == currentRandomString) {
        successMsgTwo.animate({
          top: 0
        });
        setTimeout(function() {
          testTwoScreen.animate({
            opacity: 0
          });
          testTwoScreen.css("opacity", "0");
          resultsScreen.css("bottom", "0");
          resultsScreen.delay(700).animate({
            opacity: 1
          });
        }, 1100);
      } else if (userMatch != currentRandomString) {
        $(".testOne__errorWindow").css({
          "opacity": "0.75",
          "z-index": "1"
        });
        $(".testOne__errorWindow--message").css({
          "opacity": "1",
          "z-index": "2"
        });
        $(".testOne__errorWindow--message").animate({
          left: "160px"
        }, 50);
        $(".testOne__errorWindow--message").animate({
          left: "140px"
        }, 50);
        $(".testOne__errorWindow--message").animate({
          left: "150px"
        }, 50);
        $(".errorSubmit").click(function() {
          $(".testOne__errorWindow").css({
            "opacity": "",
            "z-index": ""
          });
          $(".testOne__errorWindow--message").css({
            "opacity": "",
            "z-index": ""
          });


        });
      }
    }
  });

  resetSubmit.click(function() {
    resultsScreen.animate({
      opacity: 0
    });
    testOneScreen.css({
      "opacity": "",
      "right": ""
    });
    testTwoScreen.css({
      "opacity": "",
      "top": ""
    });
    introScreen.delay(700).animate({
      opacity: 1
    });
    resultsScreen.css("z-index", "-1");
    successMsgOne.css("top", "");
    successMsgTwo.css("top", "");
    $(".testOne__opacityTransition").addClass("disabled");
    $(".testOne__questions").css("opacity", "");
    $(".testTwo__questions").css("opacity", "");
    userInputRandom.val("");
  });

  //------------------------
  //-Event handler for first
  //--password test:

  userInputPW.keyup(function() {

    //-Collect user input and verify if it
    //--satisfies criteria:

    hasSymbol = false;
    hasNumber = false;

    var splitUserInfo = userInputPW.val().split("");

    for (var i = 0; i < splitUserInfo.length; i++) {
      if (symbols.indexOf(splitUserInfo[i]) != -1) {
        hasSymbol = true;
      }
    }

    for (var j = 0; j < splitUserInfo.length; j++) {
      if (numericals.indexOf(splitUserInfo[j]) != -1) {
        hasNumber = true;
      }
    }

    if (userInputPW.val() === "") {
      $(".testOne__badge .fail").removeClass("badge__visible");
      $(".testOne__badge .pass").removeClass("badge__visible");
      $(".testOne__badgeTwo .fail").removeClass("badge__visible");
      $(".testOne__badgeTwo .pass").removeClass("badge__visible");
      $(".testOne__opacityTransition").addClass("disabled");
      userInputPWC.val("");
      $(".blocker").removeClass("blockerOff");
    } else if (userInputPW.val().length >= 7 && hasSymbol && hasNumber) {
      $(".testOne__badge .fail").removeClass("badge__visible");
      $(".testOne__badge .pass").addClass("badge__visible");
      setTimeout(function() {
        $(".testOne__opacityTransition").removeClass("disabled");
        $(".blocker").addClass("blockerOff");
      }, 100);
    } else {
      $(".testOne__badge .fail").addClass("badge__visible");
      $(".testOne__badge .pass").removeClass("badge__visible");
      setTimeout(function() {
        $(".testOne__opacityTransition").addClass("disabled");
        $(".blocker").removeClass("blockerOff");
        $(".testOne__badgeTwo .fail").removeClass("badge__visible");
        $(".testOne__badgeTwo .pass").removeClass("badge__visible");
        userInputPWC.val("");
      }, 100);
    }

  });

  userInputPWC.keyup(function() {

    if (userInputPWC.val() === "") {
      $(".testOne__badgeTwo .fail").removeClass("badge__visible");
      $(".testOne__badgeTwo .pass").removeClass("badge__visible");
    } else if (userInputPWC.val() == userInputPW.val()) {
      $(".testOne__badgeTwo .fail").removeClass("badge__visible");
      $(".testOne__badgeTwo .pass").addClass("badge__visible");
    } else if (userInputPWC.val() != userInputPW.val()) {
      $(".testOne__badgeTwo .fail").addClass("badge__visible");
      $(".testOne__badgeTwo .pass").removeClass("badge__visible");
    }

  });

});
