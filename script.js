document.getElementById('vibrate').addEventListener('click',vibrate);




function vibrate(){
    document.getElementById('vibrate').innerHTML='Zzz';
    let vib =navigator.vibrate;
    vib(1000);
    vib([1000,500,2000]);
setTimeout(() => {
    document.getElementById('vibrate').innerHTML='click';
}, 3000);
}
