window.onload=function (ev) {
    var oDiv = document.getElementById('right_ad');
    var oBtn = document.getElementById('close_btn');

    oBtn.onclick=function (ev2) {
        //第一种方法隐藏
        // oDiv.style.display = 'none';
        //第二种方法隐藏
        oDiv.className = 'hidden';
    };
};
// 模拟网页广告弹出，这里用的是时隔30秒刷新一次，既光就弹出
function myrefresh()
{
    window.location.reload();
}
setTimeout('myrefresh()',30000); //指定1秒刷新一次