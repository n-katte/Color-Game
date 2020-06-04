 var colors = generateRandoomColors(3);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 3;
var mediumBtn = document.querySelector("#mediumBtn");
var scoreDisplay = document.querySelector("#scoreDisplay");
var highScoreDis = document.querySelector("#highScore");
var click = document.querySelector("#container");
score = 0;
var highScore = score;
var gameover = false;
 var colors = generateRandoomColors(3);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 3;
var mediumBtn = document.querySelector("#mediumBtn");
var scoreDisplay = document.querySelector("#scoreDisplay");
var highScoreDis = document.querySelector("#highScore");
var click = document.querySelector("#container");
score = 0;
var highScore = score;
var gameover = false;

$(document).ready(function() {
  $("button").click(function() {
    $(document).scrollTop($(document).height());
  });
});

for (var i = 0; i < squares.length; i++) {
  if (colors[i]) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  } else {
    squares[i].style.display = "none";
  }
}

easyBtn.addEventListener("click", function() {
  gameover = false;
  highScore = score;
  score = 0;
  scoreDisplay.textContent = score;
  highScoreDis.textContent = highScore;
  h1.style.backgroundColor = "#232323";
  hardBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandoomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickColor();
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
});

mediumBtn.addEventListener("click", function() {
  document.querySelector("#container").scrollIntoView();
  gameover = false;
  score = 0;
  scoreDisplay.textContent = score;
  h1.style.backgroundColor = "#232323";
  hardBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  mediumBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandoomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickColor();
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  window.scrollTo();
  gameover = false;
  score = 0;
  scoreDisplay.textContent = score;
  easyBtn.classList.remove("selected");
  mediumBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 9;
  colors = generateRandoomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickColor();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "#232323";
});

resetButton.addEventListener("click", function() {
  gameover = false;
  highScore = score;
  score = 0;
  scoreDisplay.textContent = score;
  highScoreDis.textContent = highScore;
  colors = generateRandoomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New color";
  message.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //initial colors
  squares[i].style.backgroundColor = colors[i];
  //add click
  squares[i].addEventListener("click", function() {
    //grrab color

    var clickedColor = this.style.backgroundColor;

    //comapre

    if (!gameover) {
      score++;
      if (clickedColor === pickedColor) {
        gameover = true;
        resetButton.textContent = "Play again??";
        message.textContent = "correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        scoreDisplay.textContent = "u Won at " + score;
      } else {
        this.style.backgroundColor = "stellblue";
        message.textContent = "Try again";
        console.log(score, scoreDisplay.textContent);
        var ok = (scoreDisplay.textContent = score);
      }
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandoomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  //pick red 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green 0-255
  var g = Math.floor(Math.random() * 256);
  //blue 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}