window.onload=function (ev) {
    var rightDiv = document.getElementById('right');
    var mainDiv  = document.getElementById('main');
    var upDiv    = document.getElementById('up');
    var leftDiv    = document.getElementById('left');
    var bottomDiv    = document.getElementById('bottom');
    var ifKeyDown =false;
    var contact = '';//被按下的是哪个触点
    //鼠标按下事件
    //绑定右边触点
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
    //鼠标松开事件
    window.onmouseup = function (ev2) {
        ifKeyDown = false;
    };
    //鼠标移动事件
    window.onmousemove = function (ev) {
        if(ifKeyDown == true){
            if(contact == 'right'){
                var x = ev.clientX;//鼠标X坐标
                var widthBefore = mainDiv.offsetWidth - 2;//选取框变化前的宽度
                var addWidth ="";
                addWidth = x - getPosition(mainDiv).left - widthBefore;
                // var addWidth = x - (rightDiv.offsetWidth + mainDiv.offsetLeft);//鼠标移动后选取框增加的宽度
                mainDiv.style.width = addWidth + widthBefore + 'px';//x选取框变化后
            }else if(contact == 'up'){
                 var y =ev.clientY;//鼠标Y坐标
                 var mainY = getPosition(mainDiv).top;//选取框相对于屏幕上边的距离
                 var addHeight = mainY - y;//增加的高度
                 var heightBefore = mainDiv.offsetHeight - 2;//原来的高度  (2位边框的像素)
                  mainDiv.style.height = heightBefore + addHeight + 'px';
                  mainDiv.style.top = mainDiv.offsetTop - addHeight + 'px';
            }else if(contact == 'left'){
                  var x = ev.clientX;//鼠标X坐标
                  var mainX = getPosition(mainDiv).left;//选取框相对于屏幕zuo边的距离
                  var addWidth = mainX - x;//增加的宽度
                  var widthBefore = mainDiv.offsetWidth -2;//原来的宽度
                    mainDiv.style.width = widthBefore + addWidth + 'px';
                    mainDiv.style.left = mainDiv.offsetLeft - addWidth + 'px';
            }else if(contact == 'bottom'){
                var y = ev.clientY;
                var heightBefore = mainDiv.offsetHeight - 2;//原来的高度
                var mainY = getPosition(mainDiv).top;//选取框相对于父元素的高度
                var addHeight = y -mainY - heightBefore;
                mainDiv.style.height = addHeight + heightBefore + 'px';
            }
        };
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
