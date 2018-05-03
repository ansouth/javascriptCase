window.onload=function () {
    var lis  = document.querySelectorAll('#notice-title ul li');
    var divs = document.querySelectorAll('#notice-con div');
    if(lis.length != divs.length){
        return;
    }

    for(var i=0; i<lis.length; i++){
        lis[i].id = i ;
        lis[i].onmouseover =function () {
            // alert(this.id);
            //清楚所以li上的class
            for (var j=0;j<lis.length;j++){
                lis[j].className = '';
                divs[j].style.display = 'none';
            }
            //设置当前为高亮显示
            this.className ='select';
            divs[this.id].style.display = 'block';
        }
    }
}