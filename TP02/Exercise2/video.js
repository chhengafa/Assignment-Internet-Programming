var canvas = document.getElementById('video');
var video = document.createElement('video');
var button = document.getElementById("button");
video.autoplay= true
navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then((stream) =>{
        video.srcObject = stream       
    }).catch(err =>{
    })

button.addEventListener("click", function(){
    if(video.paused){
        video.play();
        button.innerHTML = "Pause";
        (function loop(){
            console.log("called");
            canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height)

            setTimeout(loop, 1000/30);
        })(); 
    } 
    else if (video.played){
        video.pause();
        button.innerHTML = "Play";
    }
});