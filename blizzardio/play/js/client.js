var me;
var players = [];
var score;
var keysPressed = [];
const width = window.innerWidth*0.5;
const height = width/16*9;
var id;
var pos = new Object;
pos.x = 0-(width/2);
pos.y = 0-(height/2);
pos.speedX = 0;
pos.speedY = 0;

var image = new Image;
image.src = '/play/assets/grass.jpg';


const gameSocket = new WebSocket("wss://blizzardio.leoturnbull.repl.co/");
// waits until got id to start game (line 135 on get msg success)

function startGame() {
    me = new component(30, 30, "#31DED9", width/2, height/2);
    score = new component(30+"px", "Helvetica", "black", width-175, 50, "text");
    game.start();
}

var game = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type, id) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    if (id) {
      this.id = id;
    }
    this.update = function() {
        ctx = game.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.x = Math.round(me.x*100)/100
        this.y += this.speedY;
        this.y = Math.round(me.y*100)/100
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < players.length; i += 1) {
        if (me.crashWith(players[i])) {
            //return;
        }
    }
    game.clear();
    game.frameNo += 1;

    for (i = 0; i < players.length; i += 1) {
        //players[i].x += -1;
        //players[i].update();
    }
    if (keysPressed["ArrowLeft"]) {
      if (pos.speedX > -2) { pos.speedX -= 0.2; }
    };
    if (keysPressed["ArrowRight"]) {
      if (pos.speedX < 2) { pos.speedX += 0.2; }
    };
    if (keysPressed["ArrowUp"]) {
      if (pos.speedY > -2) { pos.speedY -= 0.2; }
    };
    if (keysPressed["ArrowDown"]) {
      if (pos.speedY < 2) { pos.speedY += 0.2; }
    };

    if (pos.speedX > 0) {
      pos.speedX -= 0.05;
    }
    if (pos.speedX < 0) {
      pos.speedX += 0.05;
    }
    if (pos.speedY > 0) {
      pos.speedY -= 0.05;
    }
    if (pos.speedY < 0) {
      pos.speedY += 0.05;
    }

    if (Math.round(pos.speedX*10) == 0) {
      pos.speedX = 0;
    }
    if (Math.round(pos.speedY*10) == 0) {
      pos.speedY = 0;
    }

    pos.x += pos.speedX;
    pos.x = Math.round(pos.x*100)/100
    pos.y += pos.speedY;
    pos.y = Math.round(pos.y*100)/100

    gameSocket.send(JSON.stringify({type: "update", id: id, x: pos.x+me.x, y: pos.y+me.y, speedX: pos.speedX, speedY: pos.speedY}));

    game.context.drawImage(image, 0-pos.x, 0-pos.y);


    for (const p of players) {
      p.x = p.x + p.speedX - pos.speedX;
      p.y = p.y + p.speedY - pos.speedY;
      //players[i].x = p.x - pos.x
      //players[i].y = p.y - pos.y
      p.update();
    }


    score.text=pos.x;
    score.update();
    //me.newPos();
    me.update();

}

function everyinterval(n) {
    if ((game.frameNo / n) % 1 == 0) {return true;}
    return false;
}

gameSocket.onmessage = function (event) {
  data = JSON.parse(event.data);

  if (data.type == "connect") {
    id = data.id;
    startGame();
  }

  if (data.type == "disconnect") {
    i = players.indexOf(players.find(element => element.id == data.id));
    players = arrayRemove(players, players[i]);
  }

  if (data.type == "update") {
    i = players.indexOf(players.find(element => element.id == data.id));
    if (!players[i]) {
      players.push(new component(30, 30, "red", pos.x+data.x, pos.y+data.y, "player", data.id));
      console.log("New player created");
      return;
    }
    players[i].x = data.x - pos.x
    players[i].y = data.y - pos.y
    players[i].speedX = data.speedX
    players[i].speedY = data.speedY
    //players[i].newPos();

  }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;
    keysPressed[key] = true;
});

document.addEventListener('keyup', (event) => {
   delete keysPressed[event.key];
});


function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
}
