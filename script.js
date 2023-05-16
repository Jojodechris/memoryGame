const gameContainer = document.getElementById("game");
let clickCount = 0;
let flippedCard1 = null;
let flippedCard2 = null;
let flipcount =0;
let score=0;
const scoreElement = document.getElementById('score');
const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
    function startGame(e) {
      e.startButton
      alert("Game started!");
    }

const reStartButton = document.getElementById("reStartButton");
    reStartButton.addEventListener('click',reStartGame);
    function reStartGame(e){
      e.reStartGame
      alert('Game restarted');
      location.reload();
    }


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    var newDiv = document.createElement("div");
    // create an image for the card 
    var img = document.createElement('img');

    // // Set the source (src) attribute of the image
    // img.src = "https://thumbs.dreamstime.com/b/playing-card-back-side-isolated-white-clipping-path-included-playing-card-back-side-isolated-white-172500899.jpg";
    
    // // Set additional attributes if needed
    // img.alt = 'card';
    // img.width = 100;
    // img.height = 100;
    
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.appendChild(img);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // Function to handle button click event
  
  console.log(clickCount);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);

  }
}

function handleCardClick(event) {
  let cardClick = event.target;
  
// Increment the click count

// Disable the third button if more than two buttons are clicked
    if (clickCount < 2) {
      cardClick.style.backgroundColor = cardClick.className;
      clickCount++;
      if (clickCount===1){
        flippedCard1=cardClick;
      }
      if (clickCount===2){
        flippedCard2=cardClick;
        if(flippedCard1.className !== flippedCard2.className){
          setTimeout(function(){
            flippedCard1.style.backgroundColor = '';
            flippedCard2.style.backgroundColor = '';
            flippedCard1 = null;
            flippedCard2 = null;
            clickCount = 0;
          }, 1000)
        } else if(flippedCard1.className===flippedCard2.className) {
         resetCards();
         scoreElement.textContent = `Score: ${score}`;
         if (isGameOver(flipCount)) {
          // store the score
          alert("Game over !!, you won!!")
        }


          // the cards are the same color
          // increment score + 2 
          // remove the click handler from flippedCard1 and flippedCard2
          // reset the flipped cards to null
          // reset the click count to 0
        }
        
      }
    }
}

function resetCards() {
  flippedCard1 = null;
  flippedCard2 = null;
  clickCount = 0;
  flipcount++;
  score++;
}

function isGameOver(flipCount) {
  return flipCount === 5;
}


// when the DOM loads
createDivsForColors(shuffledColors);


const userPreferences = {
  bestScore : '10',
  lowScore: "5"
}

localStorage.setItem('pref',userPreferences)
