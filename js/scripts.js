
$(document).ready(function() {
  $("#survey1").submit(function(event) {
    event.preventDefault();

    let tallyJS = 0;
    let tallyPython = 0;
    let tallyCSharp = 0;


    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();
    const answerBonus1 = $("input:radio[name=questionBonus1]:checked").val();
    const answerBonus2 = $("input:radio[name=questionBonus2]:checked").val();
    const answerBonus3 = $("input:radio[name=questionBonus3]:checked").val();
    
    
        
        
        if (answer1 === "javascript1") {
          tallyJS += 1;
        } else if (answer1 === "python1") {
          tallyPython += 1;
        } else {
          tallyCSharp += 1;
        }
    
        if (answer2 === "javascript1") {
          tallyJS += 1;
        } else if (answer2 === "python1") {
          tallyPython += 1;
        } else {
          tallyCSharp += 1;
        }
    
        if (answer3 === "javascript1") {
          tallyJS += 1;
        } else if (answer3 === "python1") {
          tallyPython += 1;
        } else {
          tallyCSharp += 1;
        }
    
        if (answer4 === "javascript1") {
          tallyJS += 1;
        } else if (answer4 === "python1") {
          tallyPython += 1;
        } else {
          tallyCSharp += 1;
        }
    
        if (answer5 === "javascript1") {
          tallyJS += 1;
        } else if (answer5 === "python1") {
          tallyPython += 1;
        } else {
          tallyCSharp += 1;
        }
    
        if (tallyJS > tallyPython && tallyCSharp) {
          $("#answer").show();
          $("#output").text("You should learn Javascript!");
        } else if (tallyPython > tallyJS && tallyCSharp) {
          $("#answer").show();
          $("#output").text("You should learn Python!");
        } else if (tallyCSharp > tallyJS && tallyPython) {
          $("#answer").show();
          $("#output").text("You should learn C#!");
        } else if ((tallyJS === tallyPython) && tallyJS > tallyCSharp) {
          $("#hideBonus1").show();
          if (answerBonus1 === "javascript1") {
            $("#answer").show();
            $("#output").text("You should learn Javascript!");
          } else {
            $("#answer").show();
            $("#output").text("You should learn Python!");
          }
        } else if ((tallyJS === tallyCSharp) && tallyJS > tallyPython) {
          $("#hideBonus2").show();
          if (answerBonus2 === "javascript1") {
            $("#answer").show();
            $("#output").text("You should learn Javascript!");
          } else {
            $("#answer").show();
            $("#output").text("You should learn C#!");
          }
        } else if ((tallyPython === tallyCSharp) && tallyPython > tallyJS) {
          $("#hideBonus3").show();
          if (answerBonus3 === "python1") {
            $("#answer").show();
            $("#output").text("You should learn Python!");
        } else {
          $("#answer").show();
          $("#output").text("You should learn C#!");
          }
        }
    
    
  });
});
