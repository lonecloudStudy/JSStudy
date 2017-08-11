/**
 * Created by lonecloud on 2017/7/7.
 */
var numsBtn = document.getElementsByClassName("num");
var result = document.getElementById("result");
var dotBtn = document.getElementById("dot");
var operBtns=document.getElementsByClassName("oper");
var equalBtn=document.getElementById("equal");
var clearBtn=document.getElementById("clear");
var backBtn=document.getElementById("back");
var isoper=false;
var isDot = false;
var isResult=false;
/**
 * 数字点击事件
 */
for (var i = 0; i < numsBtn.length; i++) {
    numsBtn[i].onclick = function () {
        result.innerHTML += this.innerText;
        isoper=false;
    }
}
/**
 * 小数点点击事件
 */
dotBtn.onclick = function () {
    result.innerHTML += dotBtn.innerText;
}
for(var i=0; i<operBtns.length; i++){
    operBtns[i].onclick=function () {
        if(!isoper){
            result.innerHTML += this.innerText;
            isoper=true;
        }
    }
}
/**
 * 点击等号的点击事件
 */
equalBtn.onclick=function () {
    if(!isResult){
        var rel=eval(result.innerHTML)
        result.innerHTML=result.innerHTML+"="+rel;
    }
}
/**
 * 清空函数
 */
clearBtn.onclick=function () {
    result.innerHTML="";
}
backBtn.onclick=function () {
    var str=result.innerHTML;
    if(str!=null&&str.length!=0){
        result.innerHTML=str.substring(0,str.length-1);
        //优化判断是不是操作符，.号等
    }
}
