/**
 * Created by lonecloud on 17/4/13.
 */
/**
 * ajax 封装
 * @param url url
 * @param param 参数
 * @param method GET还是POST
 * @param successMethod 成功后执行的方法
 */
function ajax(url,param,method,successMethod){
    var request=new XMLHttpRequest();
    request.open(method,url);
    request.send(param);
    request.onreadystatechange =function () {
        if(request.readyState==4){
            if(request.status==200||request.status==304){
                successMethod(request.responseText);
            }
        }
    };
}