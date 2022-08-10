leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(510, 510);
    canvas.position(700, 90);
    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on("pose", gotPoses);
}
function modeLoaded(){
    console.log("posenet is initialized");
}
function draw(){
    background("#white");
    textSize(difference);
    fill("blue")
    text("Aanya",250, 250)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("left " + leftWristX + " right " + rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}