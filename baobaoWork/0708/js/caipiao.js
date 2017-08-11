/**
 * Created by lonecloud on 2017/7/8.
 */
var redBallIndex = 0;
var blueBallIndex = 0;
var isChangeClick = true;
var redBalls = document.getElementsByClassName("redBall");
var blueBalls = document.getElementsByClassName("blueBall");
var countNum = document.getElementById("countNum");
var money = document.getElementById("money");
var confirmBtn = document.getElementById("confirm");
var dataUl = document.getElementById("data");
var redCount = document.getElementById("redCount");
var blueCount = document.getElementById("blueCount");
var redBallCount = document.getElementById("redBallCount");
var redRandomBtn = document.getElementById("redRandomBtn");
var blueBallCount = document.getElementById("blueBallCount");
var blueRandomBtn = document.getElementById("blueRandomBtn");
/**
 * 确定选择的号码
 */
confirmBtn.onclick = function () {
    //判断红球球数不足6个
    if (document.getElementsByClassName("choseRedBall").length < 6) {
        alert("请选择6个或6个以上的红球");
        return;
    }
    //判断蓝球不足1个
    if (document.getElementsByClassName("choseBlueBall") < 1) {
        alert("请选择1个或一个以上的蓝球");
        return;
    }
    var redBallValue = getBallString("choseRedBall");
    var blueBallValue = getBallString("choseBlueBall");
    dataUl.innerHTML += "<li><div><span class='red'>" + redBallValue +
        "</span><span class='blue'>" + blueBallValue +
        "</span><button id='changeBall' onclick='changeBall(this)'>修改</button><button onclick='delData(this)'>删除</button></div></li>"
    redBallIndex = 0;
    blueBallIndex = 0;
    setCountNum();
    isChangeClick=true;//设置可以修改
}
/**
 * 选择出某个类的值
 * @param className
 * @returns {string}
 */
function getBallString(className) {
    var activeBall = document.getElementsByClassName(className);//筛选某个类
    var ballString = "";
    while (activeBall.length != 0) {
        ballString += activeBall[0].innerHTML;
        ballString += "   ";
        activeBall[0].className = activeBall[0].className.substring(0, activeBall[0].className.indexOf(className));//移除样式
    }
    return ballString;
}

/**
 * 生成随机数
 * @param min
 * @param max
 * @returns {Number}
 */
function getRan(min, max) {
    return parseInt((Math.random() * (max - min) + min + 1));
}

/**
 * 获取同数量的随机数
 * @param min
 * @param max
 * @param count
 */
function getAllRan(min, max, count) {
    var arr = new Array(count);
    var index = 0;
    while (index < count) {
        var ran = getRan(min, max)
        if (containtsValue(arr, ran)) {
            continue;
        }
        arr[index++] = ran;
    }
    return arr;
}

/**
 * 判断数组是不是存在该数字
 * @param arr
 * @param target
 * @returns {boolean}
 */
function containtsValue(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            return true;
    }
    return false;
}
/**
 * 需要在option设置Value值
 * @param select
 * @returns {number|string|*|Number}
 */
function getSelectValue(select) {
    var index = select.selectedIndex;
    return select.options[index].value;
}

/**
 * 清除某个className属性
 * @param selector
 * @param className
 */
function clearClassName(selector, className) {
    var index = selector.className.indexOf(className)
    if (index == -1)
        return;
    selector.className = selector.className.substring(0, index);//移除样式
}

/**
 * 将随机数赋值给球，给球加class
 * @param select
 * @param balls
 * @param className
 */
function randomBall(select, balls, className) {
    var red = getSelectValue(select);
    var ranArr = getAllRan(1, balls.length, red);
    //清除原来的球的样式
    for (var i = 0; i < balls.length; i++) {
        clearClassName(balls[i], className);
    }
    for (var i = 0; i < ranArr.length; i++) {
        var index = ranArr[i] - 1;//从0开始
        balls[index].className = balls[index].className + " " + className;
    }
    if (className == 'choseRedBall') {
        redBallIndex = red;
    } else {
        blueBallIndex = red;
    }
    setCountNum();
}
/**
 * 随机生成球数
 */
redRandomBtn.onclick = function () {
    randomBall(redBallCount, redBalls, "choseRedBall");

}
blueRandomBtn.onclick = function () {
    randomBall(blueBallCount, blueBalls, "choseBlueBall");
}

/**
 * 红球的点击事件
 */
for (var i = 0; i < redBalls.length; i++) {
    redBalls[i].onclick = function () {
        if (this.className.indexOf("choseRedBall") != -1) {
            this.className = "ball redBall";
            redBallIndex--;
            setCountNum();
            return
        }
        this.className = "ball redBall choseRedBall";
        redBallIndex++;
        setCountNum();
    }
}
/**
 * 蓝球的点击事件
 */
for (var i = 0; i < blueBalls.length; i++) {
    blueBalls[i].onclick = function () {
        if (this.className.indexOf("choseBlueBall") != -1) {
            this.className = "ball blueBall";
            blueBallIndex--;
            setCountNum();
            return
        }
        this.className = "ball blueBall choseBlueBall";
        blueBallIndex++;
        setCountNum();
    }
}
/**
 * 删除字符串
 * @param str
 * @param delStr
 * @returns {*}
 */
function deleteString(str, delStr) {
    if (str == null) {
        return "";
    }
    if (str.indexOf(delStr) != -1) {
        return str.substring(0, str.indexOf(delStr) - 1) + str.substring(str.indexOf(delStr) + 1 + delStr.length - 1);
    } else {
        return str;
    }
}

/**
 * 将数据更新到span里面
 */
function setCountNum() {
    var count = calCount(redBallIndex, blueBallIndex, 6);
    countNum.innerHTML = count;
    money.innerHTML = count * 2;
    redCount.innerHTML = redBallIndex;
    blueCount.innerHTML = blueBallIndex;
}

/**
 *  计算注数
 * @param red 红
 * @param blue 蓝
 * @param count 红数
 * @returns {number}
 */
function calCount(red, blue, count) {
    //判断如果没有选够红球和蓝球的情况
    if (red < 6 || blue == 0) {
        return 0;
    }
    return getRedNum(red, count) * blue;
}

/**
 * 计算需要的注数
 * @param red
 * @param count
 * @returns {number}
 */
function getRedNum(red, count) {
    var muplly = 1;
    var index = 1;
    var sum = 1;
    for (var i = red; i > count; i--) {
        muplly *= index;
        sum *= i;
        index++;
    }
    return sum / muplly;
}
/**
 * 删除点击事件
 * @param target
 */
function delData(target) {
    var li = target.parentNode.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
/**
 * 修改
 * @param target
 */
function changeBall(target) {
    if (isChangeClick) {
        var li = target.parentNode.parentNode;
        var spans = li.getElementsByTagName("span");
        //红球
        var activeRedBall = spans[0].innerText.split(" ");
        //篮球
        var activeBlueBall = spans[1].innerText.split(" ");
        for (var i = 0; i < activeRedBall.length; i++) {
            if (activeRedBall[i] == "")continue;
            redBallIndex++;
            var index = activeRedBall[i] - 1;//从0开始
            redBalls[index].className = redBalls[index].className + " choseRedBall";
        }
        for (var i = 0; i < activeBlueBall.length; i++) {
            if (activeRedBall[i] == "")continue;
            blueBallIndex++;
            var index = activeBlueBall[i] - 1;//从0开始
            blueBalls[index].className = blueBalls[index].className + " choseBlueBall";
        }
        setCountNum();
        isChangeClick=false;
    }
}
