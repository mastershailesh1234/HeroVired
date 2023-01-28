let questionset = [
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

var content = document.getElementById("content");
var container = document.getElementById("container");
var i = -1;
var correct = 0;

function addcontent() {
  while (content.lastElementChild != null) {
    content.removeChild(content.lastElementChild);
  }

  var attempt = document.createElement("h2");
  attempt.innerHTML = `You have attempted ${i} questions`;
  attempt.setAttribute("id", "attempt");
  content.appendChild(attempt);

  var score = document.createElement("p");
  score.innerHTML = `Your current score is ${correct}`;
  score.setAttribute("id", "score");
  content.appendChild(score);

  var question = document.createElement("h3");
  question.innerHTML = "Q" + (i + 1) + ") " + questionset[i][0];
  question.setAttribute("id", "question");
  content.appendChild(question);

  var option = document.createElement("form");
  option.setAttribute("id", "option");
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
  }
  content.appendChild(option);
}

function clickme() {
  console.log(i, questionset.length);
  content.style.display = "flex";
  if (i == -1) {
    i++;
    document.getElementById("button").innerHTML = "Submit and Next";
  } else if (i == questionset.length - 1) {
    document.getElementById("button").innerHTML = "Restart";
    while (content.lastElementChild != null) {
      content.removeChild(content.lastElementChild);
    }
    var ele = document.createElement("h3");
    ele.innerHTML = `Final score is ${correct}/${questionset.length}`;
    content.append(ele);
    i = -1;
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
  if (i >= 0 && i < questionset.length) addcontent();
}
