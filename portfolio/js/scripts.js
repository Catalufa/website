// nav bar handling
document.querySelector("[title='Skills']").addEventListener("click", function() {scroll("Skills")});
document.querySelector("[title='Projects']").addEventListener("click", function() {scroll("Projects")});
document.querySelector("[title='Awards']").addEventListener("click", function() {scroll("Awards")});
document.querySelector("[title='About Me']").addEventListener("click", function() {scroll("About Me")});
document.querySelector("[title='Contact']").addEventListener("click", function() {scroll("Contact")});

function scroll(id) {
  document.getElementById(id.toLowerCase()).scrollIntoView();
  scrollNav(id);
}

function scrollNav(id) {
  if (document.querySelector(".nav-selected")) {
    document.querySelector(".nav-selected").classList.remove("nav-selected");
  }
  if (document.querySelector(`[title='${id.split(" ")[0]}']`)) {
    document.querySelector(`[title='${id.split(" ")[0]}']`).classList.add("nav-selected");
  }
}

function updateNav() {
  if (window.scrollY > document.getElementById("contact").offsetTop + window.innerHeight) {
    scrollNav("Contact");
  } else if (window.scrollY > document.getElementById("about").offsetTop + window.innerHeight) {
    scrollNav("About Me");
  } else if (window.scrollY > document.getElementById("projects").offsetTop) {
    scrollNav("Projects");
  } else if (window.scrollY > document.getElementById("awards").offsetTop + window.innerHeight) {
    scrollNav("Awards");
  } else if (window.scrollY > document.getElementById("skills").offsetTop + window.innerHeight) {
    scrollNav("Skills");
  } else {
    if (document.querySelector(".nav-selected")) {
      document.querySelector(".nav-selected").classList.remove("nav-selected");
    }
  }
}
updateNav();

// set up particles with particles js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 12,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": "#1b1e34"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 160,
      "value_min": 100,
      "random": true
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 8,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

var awards = 0;
// animation scroll effects
document.addEventListener('scroll', function(e) {
  // navbar
  updateNav();
  // skills
  animateScroll = 0-(window.scrollY - window.innerHeight * 1.5)/2
  document.getElementById("move").style.transform = "translateY(" + animateScroll + "px)"
  e = document.querySelector(".javascript")
  if (animateScroll < -250) {
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
  }
  e = document.querySelector(".python")
  if (animateScroll < -1100) {
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
  }
  e = document.querySelector(".html")
  if (animateScroll < -1700) {
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
  }
  e = document.querySelector(".php")
  if (animateScroll < -2400) {
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
  }

  // awards
  if (awards == 0 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[0].offsetTop) {
      awards++;
      trophy(width/2, 1.8)
    }
  }
  if (awards == 1 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[1].offsetTop) {
      awards++;
      trophy(width/2, 1.8)
    }
  }
  if (awards == 2 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[2].offsetTop) {
      awards++;
      trophy(width/2, 1.8)
    }
  }
  if (awards == 3 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[3].offsetTop) {
      awards++;
      trophy(width/2, 1.8)
      trophy(width/4, 1.8)
      trophy(width/1.2, 1.8)
      // setTimeout(function() {trophy(width/2, 1.8)}, 500);
      // setTimeout(function() {trophy(width/2, 1.8)}, 1000);
    }
  }
  if (awards == 4 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[4].offsetTop) {
      awards++;
      trophy(width/2, 1.8)
    }
  }
  if (awards == 5 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[5].offsetTop) {
      awards++;
      trophy(width/1.2, 1.8)
      trophy(width/4, 1.8)
      // setTimeout(function() {trophy(width/2, 1.8)}, 500);
    }
  }
  if (awards == 6 && allowedTrophy) {
    if (window.scrollY > document.querySelector(".awardContent").offsetTop + document.getElementsByClassName("award")[6].offsetTop) {
      awards++;
      trophy(width/2, 1.8)
    }
  }
});


allowedTrophy = true;
function trophyDelay() {
  allowedTrophy = false;
  setTimeout(function() {
    allowedTrophy = true;
  }, 500)
}

// trophy effect setup
var canvas = document.getElementById('matterCanvas');
var engine = Matter.Engine.create(canvas);
var width = canvas.clientWidth;
var height = canvas.clientHeight;
var render = Matter.Render.create({
        element: canvas,
        engine: engine,
        options: {
            width: width,
            height: height,
			color: 'rgba(0,18,32,1)',
			wireframes: false
        }
    });


Matter.World.add(engine.world, Matter.Bodies.rectangle(width/2, height, width, 10, {isStatic: true, render: {fillStyle: 'rgba(0,18,32,1)', strokeStyle: 'rgba(0,18,32,1)', lineWidth: 0}}));
Matter.World.add(engine.world, Matter.Bodies.rectangle(width, height/2, 10, height, {isStatic: true, render: {fillStyle: 'rgba(0,18,32,1)', strokeStyle: 'rgba(0,18,32,1)', lineWidth: 0}}));
Matter.World.add(engine.world, Matter.Bodies.rectangle(0, height/2, 10, height, {isStatic: true, render: {fillStyle: 'rgba(0,18,32,1)', strokeStyle: 'rgba(0,18,32,1)', lineWidth: 0}}));

var pathSVG = document.getElementById("trophy");
var n = 20
  let pathLength = pathSVG.getTotalLength();
  let vtx = [];
  var i = 0;
  while(i < pathLength){
    let arr =  pathSVG.getPointAtLength(i);
    vtx.push({x:arr.x/10, y:arr.y/10});
    i+=n;
  }
  var vertices = vtx;

function trophy(x, scale) {
  trophyDelay();
	colors = ["#FFA115", "#FBAE3C"]
	color = colors[Math.round(Math.random())]
	Math.round(Math.random())
	var body = Matter.Bodies.fromVertices(x, -100, vertices,{
    render: {
       fillStyle: color,
       strokeStyle: color,
       lineWidth: 4
    }
  }, true);
	Matter.Body.scale(body, scale, scale);
	Matter.World.add(engine.world, body);
};


Matter.Runner.run(engine);
Matter.Render.run(render);


// showcase parallax effect
document.onmousemove = function(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
  move();
}

function move() {
  for (x in document.getElementsByClassName("showcase")) {
    if (document.getElementsByClassName("showcase")[x].style) {
      document.getElementsByClassName("showcase")[x].style.backgroundPositionX = (((mouseX/15-window.innerWidth/1.5) + window.innerWidth/2) + document.getElementsByClassName("showcase")[x].getAttribute("offset") * window.innerWidth)+ "px"
    }
  }

}
