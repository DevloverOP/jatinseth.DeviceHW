document.getElementById('vibrate').addEventListener('click',buzz);


function buzz(){


    document.getElementById('vibrate').innerHTML='shoot';
 
 // heartbeat pattern (short vibration (100), short pause(20), longer pause(500))
 window.navigator.vibrate(1000,20,1000,500);
 
    setTimeout(() => {
     document.getElementById('vibrate').innerHTML='stop';
     }, 3000);

     navigator.getUserMedia(
        // constraints
        {
          video: true,
          audio: true
        },
        //successCallback
        function(localMediaStream) {
          // select the 'video' object on the DOM
          var video = document.querySelector('video');
          video.src = window.URL.createObjectURL(localMediaStream);
          video.onloadedmetadata = function(e) {
            // let the video magic begin
          }
        },
        // error!
        function(err) {
          console.log("Oh noes, there was the following error:" + err);
        }
      );

 }
 


