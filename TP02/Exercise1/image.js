let imgInput = document.getElementById('imageInput');
  imgInput.addEventListener('change', function(e) {
    if(e.target.files) {
      let imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image(); 
        myImage.src = e.target.result; 
        myImage.onload = function(ev) {
          var myCanvas = document.getElementById("myCanvas"); 
          var myContext = myCanvas.getContext("2d"); 
          myCanvas.width =myImage.width;
          myCanvas.height = myImage.height; 
          myContext.drawImage(myImage,0,0); 
          let imgData = myCanvas.toDataURL("image/jpeg",0.75); 
        }
      }
    }
  });
