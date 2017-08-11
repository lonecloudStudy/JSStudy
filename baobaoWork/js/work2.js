/**
 * Created by lonecloud on 2017/7/6.
 */
window.onload = function () {
    var now = 0;//设置初始化为0定义全局变量查看现在是多少毫秒
    var timer;//设置全局变量保存setTimeout函数
    var isPause = false;
    var hours = getById("hours");//获取小时的input
    var minutes = getById("minutes");//获取分钟的input
    var seconds = getById("seconds");//获取秒针的input
    var millionseconds = getById("millionseconds");//获取毫秒的input
    var beginBtn = getById("begin");//获取开始按钮
    var pauseBtn = getById("pause");//获取开始按钮
    var stopBtn = getById("stop");//获取停止按钮
    var resumeBtn = getById("resume");//获取停止按钮
    var resetBtn = getById("reset");//获取重置按钮
    /**
     * 设置时间函数
     **/
    function setTime() {
        now++;//设置秒数+1;
        setInputValue();//设置Input值的函数
        timer = setTimeout(setTime, 1000);//设置定时器，然后每隔1毫秒更新一次回调setTime方法
    }

    /**
     *  设置Input框的值
     **/
    function setInputValue() {
        var millSecond = now % 1000;//计算毫秒数
        millionseconds.value = millSecond;//将现在now赋值给毫秒里面
        if (millSecond == 0) {//判断如果是毫秒取余后为0的时候则进行给秒的Input+1
            seconds.value++;
        }
        if (seconds.value > 0 && seconds.value % 60 == 0) {//判断当这个秒的值大于0并且对秒的值对60取余后如果为0则说明为到一分钟了，60S等于1分钟
            seconds.value = 0;//设置秒为0
            minutes.value++;//设置分钟的值+1
        }
        if (minutes.value > 0 && minutes.value % 60 == 0) {
            minutes.value = 0;//设置分钟为0
            hours.value++;//设置小时的值+1
        }
    }

    /**
     * 偷懒写了个函数不想写document长的字母
     * @param id id
     * @returns {Element}
     */
    function getById(id) {
        return document.getElementById(id);
    }

    /**
     * 开始的按钮点击事件
     */
    beginBtn.onclick = function () {
        if (timer != null) {//判断这个定时器是不是启动啦
            alert("您已经启动了一个计时器啦，不要再点哦，我的小心脏会受不了的！^_^")
        } else {
            setTime();//启动定时器
            isPause = false;
        }
    }
    /**
     * 停止按钮点击事件
     */
    stopBtn.onclick = function () {
        if (timer == null) {//判断这个定时器是不是空
            alert("吾皇，您已经关闭了定时器，点烂这个开关也没用哦！^_^");
        } else {
            now = 0;//清除数据
            clearTimeout(timer);//清除定时器
            timer = null;//设置定时器为空
        }
    }
    /**
     * 暂停按钮点击事件
     */
    pauseBtn.onclick = function () {
        if (timer == null) {//判断这个定时器是不是空
            alert("吾皇，您已经关闭了定时器，点烂这个开关也没用哦！^_^");
        }
        if (isPause) {//判断这个定时器是为暂停状态
            alert("吾皇，您已经暂停了定时器，点烂这个开关也没用哦！^_^");
        }
        clearTimeout(timer);//清除定时器
        isPause = true;//设置定时器为暂停状态
    }
    resumeBtn.onclick = function () {
        if (!isPause) {
            alert("吾皇，我已经恢复了定时器啦，不要点我啦！");
        } else {
            setTime();//启动定时器
            isPause = false;//设置判断状态为启用状态
        }
    }
    /**
     * 重置的点击事件
     */
    resetBtn.onclick = function () {
        if (isAllNUll()) {//判断是否重置
            alert("我都已经全是0啦，不要为难微臣啦！")
        }
        now = 0;//清除数据
        clearTimeout(timer);//清除定时器
        /**
         * 对值进行归0
         **/
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        millionseconds.value = 0;
    }
    /**
     * 判断是不是全是0
     * @returns {boolean}
     */
    function isAllNUll() {
        return hours.value == 0 && minutes.value == 0 && seconds.value == 0 && millionseconds.value == 0;
    }
}