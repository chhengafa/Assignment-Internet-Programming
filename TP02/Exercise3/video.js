var canvas = document.getElementById('viewport');
var video = document.createElement('video');
var button = document.getElementById("button");
video.autoplay= true
navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then((stream) =>{
        video.srcObject = stream       
    }).catch(err =>{
    })

function setXY(x1,y1,x2,y2,name){

    let src = cv.imread('viewport');
    let dst = new cv.Mat();
    let rect = new cv.Rect(x1, y1, x2, y2);
    dst = src.roi(rect);
    cv.imshow(name, dst);
}

button.addEventListener("click", function(){
    if(video.paused){
        video.play();
        button.innerHTML = "Pause";
        (function loop(){ 

            canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);

            setXY(0,0,100,75,'small-canvas1');
            setXY(100,0,100,75,'small-canvas2');
            setXY(200,0,100,75,'small-canvas3');
            setXY(0,75,100,75,'small-canvas4');
            setXY(100,75,100,75,'small-canvas5');
            setXY(200,75,100,75,'small-canvas6');

            setTimeout(loop, 1000/30);

        })(); 
    } 
    else if (video.played){
        video.pause();
        button.innerHTML = "Play";
    }
});