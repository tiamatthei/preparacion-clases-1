document.addEventListener("DOMContentLoaded", function() {
  const imagen_respuesta = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
  const imagen_pregunta = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png";

  var magic8Ball = {};
  magic8Ball.listOfAnswers = ["No", "Sí", "No lo creo...", "¡Por supuesto!", "Indudablemente", "En tus sueños."];

  document.querySelector("#answer").style.display = "none";

  magic8Ball.askQuestion = function(question) {
    document.querySelector("#ball").classList.add("shake");

    document.querySelector("#ball").setAttribute("src", imagen_respuesta);

    document.querySelector("#answer").style.display = "block";

    var randomNumber = Math.random();

    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

    var randomIndex = Math.floor(randomNumberForListOfAnswers);

    var answer = this.listOfAnswers[randomIndex];

    document.querySelector("#answer").textContent = answer;

    console.log(question);
    console.log(answer);
  };

  var onClick = function() {

    document.querySelector("#answer").style.display = "none";

    document.querySelector("#ball").setAttribute("src", imagen_pregunta);


    var question = prompt("ASK A YES/NO QUESTION!");
    
    setTimeout(function(){
      magic8Ball.askQuestion(question);
    }, 500);


  };

  document.querySelector("#questionButton").addEventListener("click", onClick);

});
