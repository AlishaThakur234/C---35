var ball;
var dataBase
var pos

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,30,30);
    ball.shapeColor = "red";

    dataBase = firebase.database ();

    var posDb = dataBase.ref ("position");

    posDb.on("value",readPosition)
}

function draw(){
    background("lightgrey");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    // ball.x = ball.x + x;
    // ball.y = ball.y + y;

    dataBase.ref ("position").set({
        x: pos.x + x,
    
        y:pos.y + y
    })

}


function readPosition (x){
//x is the trigger
pos = x.val()

ball.x = pos.x
ball.y = pos.y

}