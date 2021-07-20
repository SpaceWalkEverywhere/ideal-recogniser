function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  img=image(video,0,0,350,300);
}
function draw(){
 img;
}
function on(){
  img=image(video,0,0,350,300);
}
function off(){
  fill("#ffffff")
 none=rect(0,0,350,300);
 img=image(none,0,0,350,300)
}

