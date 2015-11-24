showhide = "show"
var login_cd = function(){
if(showhide == "show"){
    document.getElementById('popupbox').style.visibility="visible";
    showhide = "hide"
}else if(showhide == "hide"){
    document.getElementById('popupbox').style.visibility="hidden"; 
    showhide = "show"
}
}