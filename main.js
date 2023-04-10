function preload(){}
function setup(){
    canvas = createCanvas(1165, 500);
    canvas.position(100, 200)
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("model loaded")
}

var fontSize = 25;

function draw(){
    noStroke();
    image(video, 0, 0, 582, 500);
    fill(200, 200, 200);
    rect(582, 0, 582, 500);
    textSize(fontSize);
    fill(0, 0, 0)
    text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Duis aute irure dolor in reprehenderit in voluptate\nvelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\ncupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\nest laborum.", 600, 100)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}