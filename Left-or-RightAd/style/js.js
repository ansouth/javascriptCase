// 底部广告关闭

    var oDiv = document.getElementById('right_ad');
    var oBtn = document.getElementById('close_btn');

    oBtn.onclick=function (ev2) {
        //第一种方法隐藏
        // oDiv.style.display = 'none';
        //第二种方法隐藏
        oDiv.className = 'hidden';
    };
    setTimeout(function () {
        oDiv.className = '';
    },3000);

// Right侧边栏广告提示?
var oright_float = document.getElementById('right_float');
var oclose_btn1 = document.getElementById('close_btn1');

oclose_btn1.onclick=function (ev2) {
    //第一种方法隐藏
    // oDiv.style.display = 'none';
    //第二种方法隐藏
    oright_float.className = 'hidden';
};
setTimeout(function () {
    oDiv.className = '';
},3000);

// LEFT侧边栏广告提示?

    var oDiv1 = document.getElementById('left_ad');
    oDiv1.onmouseover = function () {
        startMove(50,0);
    };
    oDiv1.onmouseout = function () {
        startMove(-50,-150);
    };

var timer = null;
function startMove(speed,iTarget) {
    var oDiv1 = document.getElementById('left_ad');
    clearInterval(timer);
    timer = setInterval(function () {
        if(oDiv1.offsetLeft == iTarget){
            clearInterval(timer);
        }else {
            oDiv1.style.left = oDiv1.offsetLeft + speed + 'px';
        }
    },30);
 }

 // 右侧浮动栏
window.onscroll = function () {
      var oDiv2 = document.getElementById('right_float');

     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //计算机的可视高度 减去 div的高度
    //  oDiv.style.top = document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop + 'px';

    startMove3(parseInt(document.documentElement.clientHeight - oDiv2.offsetHeight)/2 + scrollTop);
};
var timer = null;
function startMove3(iTarget) {
    var oDiv2 = document.getElementById('right_float');
    // var oText = document.getElementById('text');
    clearInterval(timer);
    timer = setInterval(function () {
        var speed = (iTarget - oDiv2.offsetTop)/6;

        speed = speed>0?Math.floor(speed):Math.ceil(speed);

        if(oDiv.offsetTop == iTarget){
            clearInterval(timer);
        }else {
           // document.getElementById('text').value = oDiv2.offsetTop;
            oDiv2.style.top = oDiv2.offsetTop + speed + 'px';
        }
    },30);
 }