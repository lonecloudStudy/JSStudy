/**
 * Created by lonecloud on 2017/7/13.
 */
/**
 * 所有游戏点击事件
 */
var bottomLi=document.getElementById("bottomUl").getElementsByTagName("li");//获取菜单所有li
var bottomUl=document.getElementById("bottomGame").getElementsByTagName("ul");//获取内容ul
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