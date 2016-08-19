var s = function(p) {
    var ball;
    var xpos;
    var movingfloor;
    var jump;
    var inair;
    var rand;
    var xposclone;
    var score = 0;
    var endscreen = false;
    var count = 0;
    var placeholder;
    var what = true;
    var x;
    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        ball = p.loadImage("assets/pkred.png");
        ballback = p.loadImage("assets/pkred.png");
        ball2 = p.loadImage("assets/pkblue.png");
        ball3 = p.loadImage("assets/pkblack.png");
        thefloor = p.loadImage("assets/floor.png");
        blob = p.loadImage("assets/pk1.png");
        blobback = p.loadImage("assets/pk1.png");
        blob2 = p.loadImage("assets/pk2.png");
        bad = p.loadImage("assets/bad.png");
        grass = p.loadImage("assets/grass.png");
        balloon = p.loadImage("assets/balloon.png");
        xpos = p.width;
        xposclone = p.width;
        ypos = p.height - 103;
        movingfloor = 0;
        grassfloor = p.width - 10;
        balloonmove = p.width;
        setInterval(function() {
            count = count + .5
        }, 100);
    }
    p.draw = function() {
        p.background('#00bff3');
        if (placeholder == true) {
            p.fill(p.random(255), p.random(255), p.random(255))
            p.text("Caught!", 50, 30)
        } else if (placeholder == false) {
            p.fill(255)
            p.text("It ran away...", 60, 30)
        }
        if (score >= 10) {
            ball = ball2;
        }
        if (score >= 50) {
            ball = ball3;
        }
        p.textSize(32);
        p.fill(255)
        p.stroke(0)
        p.strokeWeight(5)
        p.textFont("Source Sans Pro");
        p.text(score, 10, 30)
        p.image(bad, xposclone + 80, p.height - 150, 70, 70)
        balloonmove = balloonmove - .3;
        p.image(balloon, balloonmove, p.height - 300, 20, 20)
        if (balloonmove < 0) {
            balloonmove = p.width + 30;
        }
        if (jump === true) {
            ypos = ypos - 7
        }
        if (jump === false) {
            ypos = ypos + 5
        }
        if (ypos > p.height - 103) {
            ypos = p.height - 103
        }
        if (xposclone < -40 & xposclone > -70 & inair === false) {
            xposclone = p.width;
            endscreen = true
            p.noLoop()
            p.background('#00bff3');
            p.text("     Pidgey Caught: " + score +
                "\n      Press Anywhere\n           to Restart \n",
                10, 30)
            p.textSize(16);
            p.text(
                "\n\n\n\n\n\n\n\nUse the spacebar or tap the screen (mobile)\n                  to move your character\n             Game by: Shane Brunswick",
                10, 10)
            window.setTimeout(function() {
                parent.document.getElementById('fuck')
            }, 1000);
        } else if (xposclone < -40 & inair === false) {
            xposclone = p.width;
        }
        for (i = 1; i < 100; i++) {
            p.image(thefloor, (movingfloor - 1) + (991 * i), p.height -
                89)
        }
        movingfloor = movingfloor - 2
        grassfloor = grassfloor - 2
        p.image(grass, grassfloor, p.height - 129, 40, 40)
        if (score < 10) {
            xpos = xpos - 4
            xposclone = xposclone - 4
        }
        if (xposclone <= 0) {
            x = Math.random()
        }
        if (score > 9 & x > 0.50) {
            xpos = xpos - 7
            xposclone = xposclone - 6
        } else if (score > 9 & x < 0.51) {
            xpos = xpos - 7
            xposclone = xposclone - 7
        }
        if (isEven(count) == true) {
            blob = blob2
        } else {
            blob = blobback
        }
        p.image(blob, xpos, p.height - 139, 50, 50)
        p.image(thefloor, movingfloor, p.height - 89)
        if (grassfloor < -30) {
            grassfloor = p.width + 20;
        }
        if (xpos < 40 & xpos > 0 & inair === false) {
            xpos = p.width;
            if (Math.random() > 0.58 & score < 10) {
                score += 1;
                placeholder = true;
            } else if (Math.random() > 0.45 & score > 9 & score < 50) {
                score += 1;
                placeholder = true;
            } else if (Math.random() > 0.1 & score > 49) {
                score += 1;
                placeholder = true;
            } else {
                placeholder = false;
            }
        } else if (xpos < 30 & inair === false) {
            xpos = p.width;
        }
        p.translate(30, ypos);
        p.rotate(p.frameCount / 5.0);
        p.image(ball, -15, -15, 30, 30);
        if (ypos != p.height - 103) {
            inair = true;
        } else {
            inair = false
        }
    }
    document.onkeypress = function(e) {
        e = e || window.event;
        if (e.keyCode == "32" & ypos == p.height - 103) {
            jump = true;
            setTimeout(function() {
                jump = false;
            }, 500);
        }
    };
    p.touchStarted = function() {
        if (ypos == p.height - 103) {
            if (endscreen === false) {
                jump = true;
                setTimeout(function() {
                    jump = false;
                }, 600);
            }
            if (endscreen === true) {
                score = 0
                p.loop()
                endscreen = false
            }
        }
    }

    function isEven(n) {
        return n % 2 == 0;
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
new p5(s, 'my');
$(document).on('click', 'canvas', function() {
    $('.container').fadeOut()
})

$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    $('.container').fadeOut()
  }
});