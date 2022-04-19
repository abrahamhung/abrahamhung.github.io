//using jquery

$(document).ready(function(){
    //rtfm
    var area = $("#area");
    var objball = $("#ball");
    var objp1 = $("#pl");
    var objp2 = $("#pr");

    var gBall = function(elem){
        this.x = area.innerWidth()/2;
        this.y = area.innerHeight()/2;
        this.vx = area.innerWidth()/150;
        this.vy = this.vx;

        this.radius = elem.width();

        this.update = function(){
            this.x += this.vx;
            this.y += this.vy;
        }
        this.reset = function(){
            this.x = area.innerWidth()/2;
            this.y = area.innerHeight()/2;
            this.vx *= -1;
        }

        this.yedge = function(){
            if(this.y<0 || this.y>area.innerHeight()){
                this.vy *= -1;
            }
        }

        this.draw = function(){
            elem.css({
                width: this.radius,
                height: this.radius,

                left: this.x,
                top: this.y
            });
        }

    }

    var gPlayer = function(elem){
        this.x = elem.position().left;
        this.y = area.innerHeight()/2;
        this.score = 0;
        this.width = elem.innerWidth();
        this.height = elem.innerHeight();
        this.draw = function(){
            elem.css({
                top: this.y,
                left: this.x
            })
        }
    }

    var collide = function(ball, player){
        this.ball = ball;
        this.player = player;
        this.xrad = this.ball.radius + this.player.width;
        this.yrad = this.ball.radius + this.player.height;
        console.log(this.xrad, this.yrad);
        this.check = function(){
            var yspace = this.ball.y - this.player.y;
            var xspace = this.ball.x - this.player.x;
            if(yspace < 0){yspace *= -1;}
            if(xspace < 0){xspace *= -1;}
            return (yspace < this.yrad && xspace < this.xrad);
        }
    }




    var ball = new gBall(objball)
    var p1 = new gPlayer(objp1)
    var p1c = new collide(ball, p1)
    var p2 = new gPlayer(objp2)
    var p2c = new collide(ball, p2)


    setInterval(function(){
        //persistent game logic
        //let active = (ball.x < area.innerWidth()/2)?p1c:p2c;
        if(p1c.check() || p2c.check()){
            ball.vx = -ball.vx;
        }

        if(ball.x < p1.x){
            p1.score++;
            ball.reset();
            $("#scorel").html(p1.score);
            console.log(p1.score);
        }
        if(ball.x > p2.x){
            p2.score++;
            ball.reset();
            $("#scorer").html(p2.score);
            console.log(p2.score);
        }

        ball.yedge();
        ball.update();
        ball.draw();

    },
    25  //ticklength
    )

    // $("area").mouseenter(function(){
    // })

    //acquire mouse position
    $(document).on('mousemove',function(e){
        p1.y = e.clientY
        p1.draw();
        p2.y = e.clientX
        p2.draw();
    })
});