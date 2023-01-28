let questionset = [
  ["", [], ""],
  [
    "How do we get the DOM object in JS",
    ["getElementById()", "getObject()", "getElement()", "getNode()"],
    "getObject()",
  ],
  [
    "Inside which HTML element do we put the JavaScript?",
    ["script", "javascript", "js", "scripting"],
    "script",
  ],
  [
    "JS is an _____________ language?",
    ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    "Object-Oriented",
  ],
  [
    "Which of the following keywords is used to define a variable in JS?",
    ["var", "let", "Both A and B", "None of the above"],
    "Both A and B",
  ],
];
var attempt = document.getElementById("attempt");
var score = document.getElementById("score");
var question = document.getElementById("question");
var option = document.getElementById("option");
var i = 0;
var correct = 0;
function allocate() {
  question.innerHTML = "Q" + i + ") " + questionset[i][0];
  if (i != 0) attempt.innerHTML = `You have attempted ${i - 1} quesions`;

  score.innerHTML = `Your current score is ${correct}`;
  while (option.lastElementChild != null) {
    option.removeChild(option.lastElementChild);
  }
  for (x of questionset[i][1]) {
    var ele = document.createElement("input");
    var ele1 = document.createElement("label");
    var spa = document.createElement("span");
    spa.appendChild(ele);
    spa.appendChild(ele1);
    ele.setAttribute("type", "radio");
    ele.value = x;
    ele.setAttribute("name", "options");
    ele1.setAttribute("for", x);
    ele1.innerHTML = x;
    option.appendChild(spa);
    // option.appendChild(ele1);
  }
}

function clickme() {
  console.log(i);
  if (i == 0) {
    i++;

    document.getElementById("button").innerHTML = "Submit and Next";
  } else if (i == questionset.length - 1) {
    score.innerHTML = `Your current score is ${correct}`;
    document.getElementById("button").innerHTML = "Reload";
    i = 0;
    correct = 0;
  } else {
    var answered = document.querySelector('input[name="options"]:checked');
    if (answered == null) {
      alert("Select one option");
      return;
    }
    if (answered.value == questionset[i][2]) {
      correct++;
    }

    i++;
  }
  allocate();
}
