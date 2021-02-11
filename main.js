function preload(){
}

function setup() {
    canvas = createCanvas(640,  480);
    canvas.position(110,  250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 250, 150, 220, 200);


}

function take_snapshot (){
    save('student_name.png');
}

function Filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}