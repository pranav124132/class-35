var ball;
var position;

function setup(){
    createCanvas(500,500);
 //   ball = createSprite(50,50,10,10);
   // ball.shapeColor = "red";

    database=firebase.database();

    hyball=createSprite(250,250,10,10);
    hyball.shapeColor="red";

    var hyballpos=database.ref('ball/position')
    hyballpos.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position !=undefined) {
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function writePosition(p,q){
    database.ref('ball/position').set({
    'x' :position.x + p,
    'y' :position.y + q
    })
   
}

function readPosition(data) {

     position=data.val();
    hyball.x=position.x;
    hyball.y=position.y;
}

function showError() {
    console.log("Some err reading from db");
}