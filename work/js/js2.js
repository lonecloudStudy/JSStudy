/**
 * Created by lonecloud on 2017/7/6.
 */

var num1 = prompt("请输入第一个数：", 0);
var operator = prompt("请输入操作符：");
var num2 = prompt("请输入第二个数：", 0);
/**
 * 操作数字
 * @param num1 数字1
 * @param operator +-等操作符号
 * @param num2 数字2
 * @returns {*}
 */
function opertaorNum(num1, operator, num2) {
    //将String转换成数字
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    //+
    if (operator == '+') {
        //返回结果哦
        return num1 + num2;
    }
    //减
    if (operator == '-') {
        return num1 - num2;
    }
    //乘
    if (operator == '*') {
        return num1 * num2;
    }
    //除
    if (operator == '/') {
        //判断除数为0的情况
        if (num2 == 0) {
            alert("除数为0");
            return "计算错误,错误信息：除数为0";
        }
        return num1 / num2;
    }
}
/**
 * 调用opertaorNum函数将输出到页面中
 */
document.write(num1+operator+num2+"="+opertaorNum(num1, operator, num2));