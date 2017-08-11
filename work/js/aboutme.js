var changeInfo=document.getElementById("changeInfo");
var changeEmail=document.getElementById("changeEmail");
var changePwd=document.getElementById("changePwd");
function changeBar(index) {
    if(index==1){
        changeInfo.className="";
        changeEmail.className="hidden";
        changePwd.className="hidden";
    }
    if(index==2){
        changeInfo.className="hidden";
        changeEmail.className="";
        changePwd.className="hidden";
    }
    if(index==3){
        changeInfo.className="hidden";
        changeEmail.className="hidden";
        changePwd.className="";
    }
}