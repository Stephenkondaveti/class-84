 rover_x = 10;
 rover_y = 10;
 rover_width = 100;
 rover_height = 90;

 rover_x1 = 10;
 rover_y1 = 150;
 rover_width1 = 100;
 rover_height1 = 90;

 background_image = "https://giffiles.alphacoders.com/182/182385.gif";
 rover_image = "https://i.postimg.cc/YqdnnNX1/car1.png";

 rover_image1 = "https://i.postimg.cc/YqdnnNX1/car1.png";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image1;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
        if(keyPressed == '40'){
            down();
            console.log("down");
        }
        if(keyPressed == '37'){
            screenLeft();
            console.log("left");
        }
        if(keyPressed == '39'){
            rover_height();
            console.log("right")
        }
}