
var x = 1;
var y = 1;
var c = 0;
var EO = 0;
var p = 1;
var x1 = 2;
var y1 = 2;
if(localStorage.getItem('one') == null) {
    localStorage.setItem('one',1);
    alert("first time?");
    localStorage.setItem('highscore','0');
}
var highscore = parseInt(localStorage.getItem('highscore'));
var tom = new Audio('gag.mp3');
var bloodscream = new Audio('argh.mp3');
var plus = 2;
var plus2 = 1;
var plusA2 = 0;
var plus22 = plus2;
var plusMAX = 2;
var plus2MAX = 1;
var pointU = 0;
var pointM = 0;
var ptw = 10;
var ptR = 10;
var count = 0;
var fruitY = Math.round(screen.height / 2);
var fruitX = Math.round(screen.width / 2);
var fruit = window.open('','','HEIGHT=' + window.outerHeight + ',WIDTH=' + window.outerWidth);
fruit.document.write('<html><head><link rel="stylesheet" href="magnus.css"></head><body><h2><img class="nono" src="flash.gif"></h2></body></html>')
var magnus = window.open('','','HEIGHT=' + window.outerHeight + ',WIDTH=' + window.outerWidth);
magnus.document.write('<html><head><link rel="stylesheet" href="magnus.css"></head><body><h2><img class="nono" src="magnus.jpg"></h2></body></html>');
var xM = screen.width - magnus.window.outerWidth;
var yM = screen.height - magnus.window.outerHeight;
var sizeXM = magnus.outerWidth;
var sizeYM = magnus.outerHeight;
var sizeXM2 = sizeXM;
var sizeYM2 = sizeYM;
const sizeX = window.outerWidth;
const sizeY = window.outerHeight;
const sizeXF = fruit.outerWidth;
const sizeYF = fruit.outerHeight;
magnus.moveTo(xM,yM);
fruit.moveTo((screen.width / 2),(screen.height / 2));
function RB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
   }
var finish = function() {
    alert("MAGNUS SKA TA DIN CHROMEBOOK");
    if(pointM >= 10) setInterval(hang, 1);
    alert("POINTS IN THIS GAME: " + pointU);
    if(pointU < ptw) {
        alert("YOU CANT GET MORE THAN " + ptw + " POINTS?");
        alert("MAGNUS WINS!!!");
        pointM++;
    } else if(pointU >= ptw) {
        ptw = Math.ceil(ptw * 1.1);
        alert("YOU WON!!!");
        alert("MAGNUS POINTS ARE SINKING!!!!");
        for(let II = 0; II < Math.ceil(pointU / ptw); II++) {
            pointM--;
        }
    }
    alert("MAGNUS= " + pointM);
    if(pointU > highscore) {
        alert("NEW HIGHSCORE: " + pointU);
        highscore = pointU;
        save();
        load();
    }
    x = 0;
    y = 0;
    plus = 2;
    plus2 = plus2MAX;
    plus22 = plus2;
    pointU = 0;
    EO = 0;
    plusA2 = 0;
    p = 1;
    sizeXM = sizeX;
    sizeYM = sizeY;
    sizeXM2 = sizeXM;
    sizeYM2 = sizeYM;
    magnus.resizeTo(sizeXM,sizeYM);
    fruit.resizeTo(sizeXF,sizeYF);
    xM = screen.width - window.outerWidth;
    yM = screen.height - window.outerHeight;
    alert("CURRENT HIGHSCORE: " + highscore);
}
window.addEventListener("keydown", function (event) {
if (event.defaultPrevented) {
return;
}
switch (event.key) {
case "ArrowDown":
    y1 = 1;
    x1 = 2;
  break;
case "ArrowUp":
    y1 = 0;
    x1 = 2;
  break;
case "ArrowLeft":
    x1 = 0;
    y1 = 2;
  break;
case "ArrowRight":
    x1 = 1;
    y1 = 2;
  break;
case "s":
    x1 = 2;
    y1 = 2;
    break;
case "d":
    plus++;
    break;
case "a":
    plus--;
    if(plus <= 0) plus = plusMAX;
    break;
case "e":
    plus = plusMAX;
    break;
case "p":
    if(p == 0) {
        p = 1;
    } else {
        p = 0;
    }
    break;
default:
  return;
}
event.preventDefault();
}, true);
var move = function() {
if(p == 1) return;
if(x >= screen.width - window.outerWidth) {
    x = screen.width - window.outerWidth;
    x1 = 0;
} else if(x <= 0) {
    x = 0;
    x1 = 1;
};
if(y >= screen.height - window.outerHeight) {
    y = screen.height - window.outerHeight;
    y1 = 0;
} else if(y <= 0) {
    y = 0;
    y1 = 1;
};
switch(x1) {
    case 1:
        x = x + plus;
        break;
    case 0:
        x = x - plus;
        break;
}
switch(y1) {
    case 1:
        y = y + plus;
        break;
    case 0: 
    y = y - plus;
    break;
}
//X0
//00
if(x <= fruitX && y <= fruitY) if(((fruitX >= x && fruitX <= (x + window.outerWidth)) && (fruitY >= y && fruitY <= (y + window.outerHeight)))) {
    move3()
}
//0X
//00
if(x >= fruitX && y <= fruitY) if((((fruitX + fruit.outerWidth) >= x && (fruitX + fruit.outerWidth) <= (x + window.outerWidth)) && (fruitY >= y && fruitY <= (y + window.outerHeight)))) {
    move3()
}
//00
//X0
if(x <= fruitX && y >= fruitY) if(((fruitX >= x && fruitX <= (x + window.outerWidth)) && ((fruitY + fruit.outerHeight) >= y && (fruitY + outerHeight) <= (y + window.outerHeight)))) {
    move3()
}
//00
//0X
if(x >= fruitX && y >= fruitY) if((((fruitX + fruit.outerWidth) >= x && (fruitX + fruit.outerWidth) <= (x + window.outerWidth)) && ((fruitY + fruit.outerHeight) >= y && (fruitY + fruit.outerHeight) <= (y + window.outerHeight)))) {
    move3()
}
//king in the castle
window.moveTo(x,y);
if(pointM >= 9) {
    window.moveTo((x + RB(-5,5)),(y + RB(-5,5)));
}
}
var move2 = function() {
if(p == 1) return;
plus22 = plus22 + 0.001;
plus2 = Math.round(plus22);
if(xM > x) {
    xM = xM - plus2;
} else if(xM < x) xM = xM + plus2;
if(yM > y) {
    yM = yM - plus2;
} else if(yM < y) yM = yM + plus2;
if(((x >= xM && x <= (xM + magnus.outerWidth)) && (y >= yM && y <= (yM + magnus.outerHeight))) || ((xM >= x && xM <= (x + window.outerWidth) && (yM >= y && yM <= (y + window.outerHeight))))) {
    finish();
}
magnus.moveTo(xM,yM);
if(pointU >= ptR) {
    if(EO == 0) {
        tom.play();
        plus22 = plus22 * 1.25;
        plus2 = Math.round(plus22);
        EO = 1;
    }
    sizeXM2 = sizeXM2 * 1.0001;
    sizeYM2 = sizeYM2 * 1.0001;
    sizeXM = Math.round(sizeXM2);
    sizeYM = Math.round(sizeYM2);
    magnus.resizeTo(sizeXM,sizeYM);
    magnus.moveTo((xM + RB(-10,10)),(yM + RB(-10,10)));
}
}
var move3 = function() {
if(p == 1) return;
bloodscream.play();
pointU++;
fruitY = RB(0,(screen.height - (fruit.outerHeight * 2)));
fruitX = RB(0,(screen.width - (fruit.outerWidth * 2)));
fruit.moveTo(fruitX,fruitY);
}
var title = function() {
if(p == 1) return;
magnus.document.title = plus2;
document.title = plus;
}
var points = function() {
if(p == 1) return;
pointU++;
}
var hang = function() {
    window.open("hang.html","","HEIGHT=1,WIDTH=1");
}
var save = function() {
localStorage.setItem('highscore',highscore);
}
var load = function() {
highscore = parseInt(localStorage.getItem('highscore'));
}
window.focus();
alert("CURRENT HIGHSCORE: " + highscore);
setInterval(points, 10000);
setInterval(title, 500);
setInterval(move, 10);
setInterval(move2, 10);
setInterval(function() {
    if((sizeXM != magnus.outerWidth) || (sizeYM != magnus.outerHeight) || (sizeX != window.outerWidth) || (sizeY != window.outerHeight) || (sizeXF != fruit.outerWidth) || (sizeYF != fruit.outerHeight)) {
        highscore = highscore - 10;
        save();
        alert("ARE YOU TRYING TO CHEAT? YOUR HIGHSCORE IS 10 POINTS SMALLER");
        magnus.resizeTo(screen.width,screen.height);
        magnus.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        fruit.close();
        location.href = "bakgrund.jpg";
    }
}, 1000);
