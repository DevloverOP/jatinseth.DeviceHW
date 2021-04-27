document.getElementById('vibrate').addEventListener('click',vibrate);




function vibrate(){
    document.getElementById('vibrate').innerHTML='Zzz';
    // heartbeat pattern (short vibration (100), short pause(20), longer pause(500))
    window.navigator.vibrate(100,20,100,500);
    
//     let vib =navigator.vibrate;
//     vib(1000);
//     vib([1000,500,2000]);
setTimeout(() => {
    document.getElementById('vibrate').innerHTML='click';
}, 3000);
}
