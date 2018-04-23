window.onload=function () {
    document.onselectstart = new  Function('event.returnValue=false');
    var rightDiv = document.getElementById('right');
    var mainDiv  = document.getElementById('main');
    var upDiv    = document.getElementById('up');
    var leftDiv    = document.getElementById('left');
    var bottomDiv    = document.getElementById('bottom');
    var leftupDiv = document.getElementById('left_up');
    var rightupDiv = document.getElementById('right_up');
    var leftbtDiv = document.getElementById('left_bt');
    var rightbtDiv = document.getElementById('right_bt');
    var ifKeyDown =false;
    var contact = '';//被按下的是哪个触点
    //鼠标按下事件
    //绑定事件.........
    rightDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = 'right'
    };
    upDiv.onmousedown = function () {
        ifKeyDown =true;
        contact = "up";
    };
    //绑定左边触点
    leftDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = "left";
    };
    //绑定下边触点
    bottomDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = "bottom";
    };
    leftupDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = "left_up";
    };
    rightupDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = "right_up";
    };
    leftbtDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = "left_bt";
    };
    rightbtDiv.onmousedown = function (ev2) {
        ifKeyDown =true;
        contact = "right_bt";
    };



    //鼠标松开事件
    window.onmouseup = function (ev2) {
        ifKeyDown = false;
    };
    //鼠标移动事件
    window.onmousemove = function (ev) {
        if(ifKeyDown == true){
            switch (contact){
                case "right":rightMove(ev);break;
                case "up":upMove(ev);break;
                case "left":leftMove(ev);break;
                case "bottom":bottomMove(ev);break;
                case "left_up":upMove(ev);leftMove(ev);break;
                case "right_up":upMove(ev);rightMove(ev);break;
                case "left_bt":bottomMove(ev);leftMove(ev);break;
                case "right_bt":rightMove(ev);bottomMove(ev);break;
            }
        };
        setChoice();
    };
function rightMove(ev) {
    var x = ev.clientX;//鼠标X坐标
    var widthBefore = mainDiv.offsetWidth - 2;//选取框变化前的宽度
    var addWidth ="";
    addWidth = x - getPosition(mainDiv).left - widthBefore;
    // var addWidth = x - (rightDiv.offsetWidth + mainDiv.offsetLeft);//鼠标移动后选取框增加的宽度
    mainDiv.style.width = addWidth + widthBefore + 'px';//x选取框变化后
};
function upMove(ev) {
    var y =ev.clientY;//鼠标Y坐标
    var mainY = getPosition(mainDiv).top;//选取框相对于屏幕上边的距离
    var addHeight = mainY - y;//增加的高度
    var heightBefore = mainDiv.offsetHeight - 2;//原来的高度  (2位边框的像素)
    mainDiv.style.height = heightBefore + addHeight + 'px';
    mainDiv.style.top = mainDiv.offsetTop - addHeight + 'px';
};
function leftMove(ev) {
    var x = ev.clientX;//鼠标X坐标
    var mainX = getPosition(mainDiv).left;//选取框相对于屏幕zuo边的距离
    var addWidth = mainX - x;//增加的宽度
    var widthBefore = mainDiv.offsetWidth -2;//原来的宽度
    mainDiv.style.width = widthBefore + addWidth + 'px';
    mainDiv.style.left = mainDiv.offsetLeft - addWidth + 'px';
};
function bottomMove(ev) {
    var y = ev.clientY;
    var heightBefore = mainDiv.offsetHeight - 2;//原来的高度
    var mainY = getPosition(mainDiv).top;//选取框相对于父元素的高度
    var addHeight = y -mainY - heightBefore;
    mainDiv.style.height = addHeight + heightBefore + 'px';
  };
};

//获取元素相对于左边的距离 offsetLeft
//获取元素相对于上边的距离 offsetTop
function getPosition(node) {
    var left   = node.offsetLeft;
    var top    = node.offsetTop;
    var parent = node.offsetParent;
    while (parent !=null){
        left  += parent.offsetLeft;
        top   += parent.offsetTop;
        parent = parent.offsetParent;
    }
    // return left;
    return {"left":left,"top":top};
}

//设置高亮可见区域
function setChoice(){
    var top = mainDiv.offsetTop;
    var right = mainDiv.offsetLeft+mainDiv.offsetWidth;
    var bottom = mainDiv.offsetTop+mainDiv.offsetHeight;
    var left = mainDiv.offsetLeft;
    var img2 = document.getElementById("img2");
    img2.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
}
