var area = document.getElementById('area_ul');
var aUl1 = document.getElementById('ul1');
var aUl2 = document.getElementById('ul2');

aUl2.innerHTML = aUl1.innerHTML;
area.scrollTop = 0;
function starMove() {
    if(area.scrollTop >= aUl1.offsetHeight){
        area.scrollTop = 0;
    }else {
       area.scrollTop++;
    }
};
var myScroll = setInterval('starMove()',20);

area.onmouseover = function (ev) {
    clearInterval(myScroll);
};
area.onmouseout = function (ev) {
    myScroll = setInterval('starMove()',20);
};















