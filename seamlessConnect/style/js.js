var oarea = document.getElementById('con');
var liHeight = 27*2;
var speed = 50;
var time;
var delay= 2000;
oarea.scrollTop=0;
oarea.innerHTML+=oarea.innerHTML;
function startScroll(){
    time=setInterval("scrollUp()",speed);
    oarea.scrollTop++;
}
function scrollUp(){
    if(oarea.scrollTop % liHeight==0){
        clearInterval(time);
        setTimeout(startScroll,delay);
    }else{
        oarea.scrollTop++;
        if(oarea.scrollTop >= oarea.scrollHeight/2){
            oarea.scrollTop =0;
        }
    }
}
setTimeout(startScroll,delay);