var numColors = 6;
var colors = randomColor(numColors);
var butt = document.querySelector("#butt"); 
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");



var pickedColor = random();
var messageContent = document.getElementById("message");
var he = document.querySelector("h1");

var desiredColor = document.getElementById("desiredColor");
desiredColor.textContent = pickedColor;


butt.addEventListener("click" , function(){
    randomColorGenerator();
    butt.textContent = "New Colors!";
    he.style.backgroundColor = "steelblue";
    messageContent.textContent = null;

})
easy.addEventListener("click" , function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numColors = 3;
    colors = randomColor(numColors);
    pickedColor = random();
    desiredColor.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    he.style.backgroundColor = "steelblue";
    messageContent.textContent = null;
});

hard.addEventListener("click" , function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numColors = 6;
    colors = randomColor(numColors);
    pickedColor = random();
    desiredColor.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";  
    }
    he.style.backgroundColor = "steelblue";
    messageContent.textContent = null;
})




var squares = document.querySelectorAll(".square");
for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click" , function(){
        var colour = this.style.backgroundColor;
        if(colour === pickedColor){
         messageContent.textContent = "Correct!";
            messageContent.style.color = "green";
         change(colour);
         he.style.backgroundColor = colour;
         butt.textContent = "Play Again!"
            /*butt.addEventListener("click", function () {
                randomColorGenerator();
            });*/
            
            }
        else {
            messageContent.textContent = "Try Again!";
            this.style.backgroundColor = "#262626";
            messageContent.style.color = "red";

        }
    });
}

function randomColorGenerator(){
    colors = randomColor(numColors);
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    pickedColor = random();
    desiredColor.textContent = pickedColor;
}

function change(collar){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = collar;
    }
}

function random(){
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function randomColor(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColorPicker());
    }
    return arr;
}               

function randomColorPicker(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";    

}