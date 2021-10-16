noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;
function setup(){
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,410);
canvas.position(550,130);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("posenet is initialized");
}
function gotPoses(results){
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+",noseY= "+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("leftwristx= "+leftwristX+",rightwristx= "+rightwristX);
}
}
function draw(){
background("#1ae4ed");
fill('blue');
stroke('red');
text("Connor",noseX,noseY,difference);
textSize(difference);
}