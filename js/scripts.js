
$(document).ready(function() {
  $("#survey1").submit(function(event) {
    event.preventDefault();

    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
    const answerBonus1 = $("input:radio[name=questionBonus1]:checked").val();
    const answerBonus2 = $("input:radio[name=questionBonus2]:checked").val();
    const answerBonus3 = $("input:radio[name=questionBonus3]:checked").val();
    
    let tallyJS = 0;
    let tallyPython = 0;
    let tallyCSharp = 0;

    if (answer1 === "javascript1") {
      tallyJS += 1;
    } else if (answer1 === "python1") {
      tallyPython += 1;
    } else if (answer1 === "cSharp1") {
      tallyCSharp += 1;
    }

    if (answer2 === "javascript1") {
      tallyJS += 1;
    } else if (answer2 === "python1") {
      tallyPython += 1;
    } else if (answer2 === "cSharp1")  {
      tallyCSharp += 1;
    }

    if (answer3 === "javascript1") {
      tallyJS += 1;
    } else if (answer3 === "python1") {
      tallyPython += 1;
    } else if (answer3 === "cSharp1")  {
      tallyCSharp += 1;
    }

    if (answer4 === "javascript1") {
      tallyJS += 1;
    } else if (answer4 === "python1") {
      tallyPython += 1;
    } else if (answer4 === "cSharp1")  {
      tallyCSharp += 1;
    }

    if (answer5 === "javascript1") {
      tallyJS += 1;
    } else if (answer5 === "python1") {
      tallyPython += 1;
    } else if (answer5 === "cSharp1")  {
      tallyCSharp += 1;
    }

    if (tallyJS > tallyPython && tallyJS > tallyCSharp) {
      $("#output1").text("You should learn Javascript!").show();
    } else if (tallyPython > tallyJS && tallyPython > tallyCSharp) {
      $("#output1").text("You should learn Python!").show();
    } else if (tallyCSharp > tallyJS && tallyCSharp > tallyPython) {
      $("#output1").text("You should learn C#!").show();
    } else if ((tallyJS === tallyPython) && (tallyJS > tallyCSharp)) {
      $("#hideBonus2 #hideBonus3").hide();
      $("#hideBonus1").show();
      if (answerBonus1 === "javascript1") {
        $("#output1").text("You should learn Javascript!").show();
      } else if (answerBonus1 === "python1") {
        $("#output1").text("You should learn Python!").show();
      }
    } else if ((tallyJS === tallyCSharp) && (tallyJS > tallyPython)) {
      $("#hideBonus1 #hideBonus3").hide();
      $("#hideBonus2").show();
      if (answerBonus2 === "javascript1") {
        $("#output1").text("You should learn Javascript!").show();
      } else if (answerBonus2 === "cSharp1") {
        $("#output1").text("You should learn C#!").show();
      }
    } else if ((tallyPython === tallyCSharp) && (tallyPython > tallyJS)) {
      $("#hideBonus2 #hideBonus1").hide();
      $("#hideBonus3").show();
      if (answerBonus3 === "python1") {
        $("#output1").text("You should learn Python!").show();
    } else if (answerBonus3 === "cSharp1") {
        $("#output1").text("You should learn C#!").show();
      }
    }
  });
});

// Bugs -- bonus question does not hide if original answers changed
