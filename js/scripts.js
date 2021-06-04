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

    const javascriptTotal = [
      answer1, answer2, answer3, answer4, answer5
    ];

    let javascriptCount = (javascriptTotal(/javascript1/g) || []).length;


  });
});