var num;
var alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let dashContainer = document.getElementById("dash-container");
let keyContainer = document.getElementById("key-container");
let lives = document.getElementById("lives");
let wrap = document.getElementsByClassName("wrap")[0];
let gameOver = document.getElementById("game-over");
let totalLives = 10;
let playBtn = document.getElementById("play");
let resetBtn = document.getElementById("reset");
let playAgainBtn = document.getElementsByClassName("play-again")[0];
let dashes = document.getElementsByClassName("dash");
var characters;
var guessWord;
var myDropdown = document.getElementById("myDropdown");
let dropbtn = document.getElementsByClassName("dropbtn")[0];
let category = document.getElementsByClassName("category");

// This loop replaces the text of dropdown category menu with the text of select category...
Array.from(category).forEach((value) => {
  value.onclick = function () {
    dropbtn.textContent = value.innerHTML;
  };
});
// This function takes the length of array of words as parameter and generates a random number with respect to the given length of array...
function randomNum(val) {
  num = Math.floor(Math.random() * val);
  return num;
}
function disableKeys(){
  Array.from(allKeys).forEach((val)=>{
    val.classList.add('disabled')
  })
}
function reloadGame(){
playAgainBtn.style.display = "block";
playAgainBtn.onclick = ()=>{
  location.reload(true);
}
}
// On execution, this function displays clicked keyword on their respective dashes...
function addWord(key) {
  key.classList.add("disabled");
  characters.forEach(function (currentValue, i) {
    if (key.innerHTML == currentValue.toUpperCase()) {
      dashes[i].style.fontSize = "50px";
      dashes[i].textContent = characters[i];
    }
  });
  let remainingWords = Array.from(dashes).filter((currentValue, i) => {
    return currentValue.innerHTML != characters[i];
  });
  let remainingLives = characters.filter((x) => {
    return key.innerHTML == x.toUpperCase();
  });
  if (remainingLives.length == 0) {
    totalLives -= 1;
    animate(totalLives);
    lives.innerHTML = `Remaining Lives: ${totalLives}`;
    
  }
  if (remainingWords.length === 0) {
    // wrap.style.display = "block";
    // gameOver.innerHTML = `Congratulations! you won...`;
    lives.innerHTML = `You won...`;
    disableKeys();
    reloadGame();
  }
  if (totalLives <= 0) {
    // gameOver.innerHTML = "Game over! you lost...";
    // wrap.style.display = "block";
    lives.innerHTML = `You lost...`;
    disableKeys();
    reloadGame()
  }
}
// This is the main function which on execution, starts the game. Other functions are nested in this function.
function startGame() {
  if (dropbtn.textContent == "Animal Names") {
    randomNum(animalNames.length);
    guessWord = animalNames[num];
  } else if (dropbtn.textContent == "Fruit Names") {
    randomNum(plantNames.length);
    guessWord = plantNames[num];
  } else if (dropbtn.textContent == "Country Names") {
    randomNum(countryNames.length);
    guessWord = countryNames[num];
  }
  // This filter removes white spaces (if any) from the array of characters...
  characters = guessWord.split("").filter((val) => {
    return val != " ";
  });
  // This loop creates dash elements for all the characters of given word...
  characters.forEach(() => {
    let dash = document.createElement("div");
    dash.classList.add("dash");
    dashContainer.appendChild(dash);
  });
  // This loop creates key buttons for all alphabets...
  alphabets.forEach((currentValue, i) => {
    let key = document.createElement("div");
    key.classList.add("key");
    let textNode = currentValue.toUpperCase();
    key.append(textNode);
    keyContainer.appendChild(key);
    if (i >= 24) {
      key.setAttribute("id", `key${i}`);
    }
    key.addEventListener("click", (event) => {
      addWord(event.target);
    });
  });
}
//  Event listeners start here.....
playBtn.onclick = () => {
  if (
    dropbtn.textContent == "Animal Names" ||
    dropbtn.textContent == "Fruit Names" ||
    dropbtn.textContent == "Country Names"
  ) {
    startGame();
    playBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
  } else {
    alert("Please select a word category...");
  }
};
resetBtn.onclick = function () {
  location.reload(true);
};
dropbtn.addEventListener(
  "click",
  () => {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
  },
  true
);
// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
// Adding event listener for keyboard btns...
let allKeys = document.getElementsByClassName("key");
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    if (name == "A") {
      allKeys[0].click();
    }
    if (name == "B") {
      allKeys[1].click();
    }
    if (name == "c") {
      allKeys[2].click();
    }
    if (name == "D") {
      allKeys[3].click();
    }
    if (name == "E") {
      allKeys[4].click();
    }
    if (name == "F") {
      allKeys[5].click();
    }
    if (name == "G") {
      allKeys[6].click();
    }
    if (name == "H") {
      allKeys[7].click();
    }
    if (name == "I") {
      allKeys[8].click();
    }
    if (name == "J") {
      allKeys[9].click();
    }
    if (name == "K") {
      allKeys[10].click();
    }
    if (name == "L") {
      allKeys[11].click();
    }
    if (name == "M") {
      allKeys[12].click();
    }
    if (name == "N") {
      allKeys[13].click();
    }
    if (name == "O") {
      allKeys[14].click();
    }
    if (name == "P") {
      allKeys[15].click();
    }
    if (name == "Q") {
      allKeys[16].click();
    }
    if (name == "R") {
      allKeys[17].click();
    }
    if (name == "S") {
      allKeys[18].click();
    }
    if (name == "T") {
      allKeys[19].click();
    }
    if (name == "U") {
      allKeys[20].click();
    }
    if (name == "V") {
      allKeys[21].click();
    }
    if (name == "W") {
      allKeys[22].click();
    }
    if (name == "X") {
      allKeys[23].click();
    }
    if (name == "Y") {
      allKeys[24].click();
    }
    if (name == "Z") {
      allKeys[25].click();
    }
  },
  false
);


var animate = function (drawMe) {
    if(drawMe<0){
      return;
    }
    console.log(drawMe);
    drawArray[drawMe]();
};
var context;
var canvas = function () {
   var myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
};
canvas();

 var head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  var draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

 var frame1 = function () {
    draw(0, 150, 150, 150);
  };

 var frame2 = function () {
    draw(10, 0, 10, 600);
  };

  var frame3 = function () {
    draw(0, 5, 70, 5);
  };

  var frame4 = function () {
    draw(60, 5, 60, 15);
  };

 var  torso = function () {
    draw(60, 36, 60, 70);
  };

 var  rightArm = function () {
    draw(60, 46, 100, 50);
  };

 var  leftArm = function () {
    draw(60, 46, 20, 50);
  };

 var  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

 var  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

 var drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];
var myStickman;