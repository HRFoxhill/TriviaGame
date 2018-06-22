// $(document).ready();
// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// Questions and images that user will guess
var imageDir = '../TriviaGame/assets/images/';

var characters = [
jiminyCricket = {
  question: "When you wish upon a star.",
  image:'JiminyCricket.jpg',
  button1: "PeterPan",
  button2: "Mulan",
  button3: "Dumbo",
  button4: "Pinnochio",
  answer: 'Pinnochio'
}, 
heyHey = {
  question: "When you use a bird to write with, its called Tweeting",
  image:'HeyHey.jpg',
  button1: "Anna",
  button2: "Moana",
  button3: "Simba",
  button4: "Belle",
  answer: 'Moana'
}, 
lumiere = {
  question: "I want adventure in the great wide somewhere! I want it more than I can tell!",
  image: 'Lumiere.jpg',
  button1: "Simba",
  button2: "Aladdin",
  button3: "Belle",
  button4: "Mogali",
  answer: 'Belle'
},
genie = {
  question: "10,000 years can give you such a crick in the neck!",
  image: 'Genie.jpg',
  button1: "Bambie",
  button2: "Moana",
  button3: "Alladin",
  button4: "Belle",
  answer: 'Alladin'
},
baloo = {
  question: "Don’t spend your time looking for something you want that can’t be found",
  image: 'Baloo.jpg',
  button1: "Mogali",
  button2: 'Simba',
  button3: 'Bambi',
  button4: 'Marlin',
  answer: 'Mogali'
}, 
thumper = {
  question: "",
  image: 'Thumper.jpg',
  button1: 'Simba',
  button2: 'Bambi',
  button3: 'Mulan',
  button4: 'Alladin',
  answer: 'Bambi'
},
 olaf = {
  question: " Do you want to build a snowman",
  image: 'Olaf.jpg',
  button1: 'Merida',
  button2:'Elsa',
  button3:'Anna',
  button4:'Mulan',
  answer: 'Anna'
},
mushu = {
  question:"The flower that blooms in adversity... is the most rare and beautiful of them all",
  image: 'Mushu.jpg',
  button1:'Mulan',
  button2:'Bambi',
  button3:'Mogali',
  button4:'Ariel',
  answer:'Mulan'
},
flounder = {
  question:"You're not getting cold fins now, are you?",
  image: 'Flounder.jpg',
  button1:'Anna',
  button2:'Ariel',
  button3:'Simba',
  button4:'Aladdin',
  answer:'Ariel'
}, 
];

var timer = 10;
var questionCounter;
var i = 0;
var numCorrect = 0;
var numWrong = 0;



  $("#startGame").click(displayImage);

//display images after start game is clicked
function displayImage (){
  counter = setInterval(decrement, 1000);
    $('#timer').html('Timer: ' + timer);
    $('#question').html(characters[i].question);
    $('#clue').html('<img src='+ imageDir + characters[i].image + ' width="150px">');
    $('#button1').text(characters[i].button1);
    $('#button2').text(characters[i].button2);
    $('#button3').text(characters[i].button3);
    $('#button4').text(characters[i].button4);
    //turn off start button
    $("#startGame").off();    
    game();
    console.log (displayimage);
}

function game (){
  $('#button1,#button2,#button3,#button4').on('click', function(){
    var guess = $(this).text();
    console.log(guess);
    if (guess == characters[i].answer) {
      alert('Correct!');
      numCorrect ++;
      stop();
    } else {
      alert ("Sorry, that was wrong!");
      numWrong ++;
    }
  });
}
  function decrement(){
      timer--;
      $('#timer').html('Timer: ' + timer);    
      if (timer === 0){  
      alert('Time Up!');
      stop();
      }
  }

  function stop (){
    clearInterval(counter);
    timer = 10;
    $('#timer').html('Timer: ' + timer);
    i ++;
    if (i > characters.length) {
    $('#question').html("WOO WOO!");
    $('#clue').html('<img src='+ imageDir + 'crocodile.gif' + ' width="400px">');
    $('#timer').html('Correct Guesses : ' + numCorrect + "  | |  Wrong Guesses: " + numWrong);
    }
    else {displayImage();}
  }


  