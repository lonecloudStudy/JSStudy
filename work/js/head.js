var lis = document.getElementById("tab").getElementsByTagName("li");//获取li
var uls = document.getElementById("content").getElementsByTagName("ul");//获取ul
var bottomLi=document.getElementById("bottomUl").getElementsByTagName("li");//获取菜单所有li
var bottomUl=document.getElementById("bottomGame").getElementsByTagName("ul");//获取内容ul
for (var i = 0; i < lis.length; i++) {//循环给li添加事件
    lis[i].onmouseover = function () {//给li添加鼠标覆盖事件
        var index = 0;
        for (var j = 0; j < lis.length; j++) {
            if (this.isEqualNode(lis[j])) {//获取这个li是哪一个li
                index = j;
            }
            lis[j].className = "";//清除li 的样式
            uls[j].className = "hidden";//清除ul 的样式
        }
        this.className = "active";//添加li样式
        uls[index].className = "show"; //添加ul样式
    }
}
/**
 * 所有游戏点击事件
 */
for (var i=0;i<bottomLi.length;i++){
    var index=0;
    bottomLi[i].onclick=function () {
        for (var j=0;j<bottomUl.length;j++){
            if(this.isEqualNode(bottomLi[j])){
                index=j;
            }
            bottomLi[j].className="";
            bottomUl[j].className="hidden";
        }
        this.className="bottomMenuClick";
        bottomUl[index].className="";
    }
}
