
    var x = 1;
    var y = 1;
    var c = 0;
    var EO = 0;
    var x1 = 2;
    var y1 = 2;
    var plus = 5;
    var plus2 = 3;
    var plusA2 = 0;
    var plus22 = plus2;
    var plusMAX = 5;
    var plus2MAX = 3;
    var pointU = 0;
    var pointM = 0;
    var ptw = 15;
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
    magnus.moveTo(xM,yM);
    fruit.moveTo((screen.width / 2),(screen.height / 2));
    function RB(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
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
    default:
      return;
  }
  event.preventDefault();
}, true);
var move = function() {
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
    for(let xx = fruitX; xx < (fruitX + fruit.outerWidth); xx++) {
        for(let yy = fruitY; yy < (fruitY + fruit.outerHeight); yy++) {
            if((xx == x) && (yy == y)) {
                move3();
                pointU++;
            }
        }
    }
    window.moveTo(x,y);
    if(pointM >= 9) {
        window.moveTo((x + RB(-5,5)),(y + RB(-5,5)));
    }
}
var move2 = function() {
    plus22 = plus22 + 0.001;
    plus2 = Math.round(plus22);
    if(xM > x) {
        xM = xM - plus2;
    } else if(xM < x) xM = xM + plus2;
    if(yM > y) {
        yM = yM - plus2;
    } else if(yM < y) yM = yM + plus2;
    for(let i = x; i < (x + window.outerWidth); i++) {
        for(let j = y; j < (y + window.outerHeight); j++) {
            if((i == xM) && (j == yM)) {
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
                x = 0;
                y = 0;
                plus = 2;
                plus2 = plus2MAX;
                plus22 = plus2;
                pointU = 0;
                EO = 0;
                plusA2 = 0;
                xM = screen.width - window.outerWidth;
                yM = screen.height - window.outerHeight;
            }
        }
    }
    magnus.moveTo(xM,yM);
    if(pointU >= ptR) {
        if(EO == 0) {
            plus22 = plus22 * 1.5;
            plus2 = Math.round(plus22);
            EO = 1;
        }
        magnus.moveTo((xM + RB(-10,10)),(yM + RB(-10,10)));
    }
}
var move3 = function() {
    fruitY = RB(0,(screen.height - (fruit.outerHeight * 2)));
    fruitX = RB(0,(screen.width - (fruit.outerWidth * 2)));
    fruit.moveTo(fruitX,fruitY);
}
var title = function() {
    magnus.document.title = plus2;
    document.title = plus;
}
var points = function() {
    pointU++;
}
var hang = function() {
    while(1) open("hang.html");
}
window.focus();
setInterval(points, 10000);
setInterval(title, 500);
setInterval(move, 10);
setInterval(move2, 10);
setInterval(move3, 10000);
