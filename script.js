//variables for the game
var block = document.getElementById('block');
var hole = document.getElementById('hole');
var character = document.getElementById('character');
var jumping = 0;
var score = 0; //for the score

hole.addEventListener('animationiteration', () =>{
    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    score++;
});

setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if(jumping ==0){
        character.style.top = (characterTop + 3) + 'px';

    }
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    //detection for if the bird hits the pipe
    if(characterTop){
        alert('GAME OVER! score: '+score);
        character.style.top = 100 + 'px';
        score= 0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if((characterTop > 6) && (counter < 15)){
        character.style.top = (characterTop - 5) + 'px';
        }
        if (jumpCount > 20){
            clearInterval(jumpInterval)
            jumping =0;
        }
        jumpCount++;
    },10 );
}