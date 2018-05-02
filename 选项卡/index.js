// function $(id) {
//     return typeof  id==='string'?document.getElementById(id):id;
// }
window.onload=function (ev) {
    //获取鼠标滑过或点击的标签和要切换的内容的元素
    var titles =document.getElementById('notice-title');
    var oUl    = titles.getElementsByClassName('li');
     console.log(titles.length);
};