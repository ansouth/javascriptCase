function getStyle(obj,name) {
    if(obj.currenStyle){
        return obj.currenStyle[name];
    }else {
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,atrr,iTarget) {
    clearInterval(obj.time);
    obj.time=setInterval(function () {
        var cur =0;
        if(atrr=='opacity'){
            cur=Math.round(parseFloat(getStyle(obj,atrr))*100);
            //Math.round去近视值,取整数
        }else {
            cur = parseInt(getStyle(obj,atrr));
        }
        var speed =(iTarget - cur)/6;
        speed =speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.time);
        }else {
            if(atrr=='opacity'){
                obj.style.filter = 'alpha(opcity:'+(cur + speed)+')';
                obj.style.opacity = (cur + speed)/100;
                // document.getElementById('text').value = obj.style.opacity;
                //在IE7里会打印出无限小数
            }else {
                obj.style[atrr] = cur + speed + 'px';
            }
        }
    },30);
}