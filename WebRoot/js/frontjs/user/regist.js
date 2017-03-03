//前台的js简单校验
function checkForm() {
    
    var inputdiv = document.getElementsByClassName("form-group");
    
    // 校验用户名
	var username = document.getElementById("nickname").value;
    
	if(username == null || username == '') {
        alert("用户名不能为空!");
//		inputdiv.className += "has-error";
		return false;
	}
	// 校验密码
	var password = document.getElementById("password").value;
	if(password == null || password == '') {
		alert("密码不能为空!");
		return false;
	}
    
    // 确认密码
	var repassword = document.getElementById("repassword").value;
	if(repassword != password) {
		alert("两次密码不一致!");
		return false;
	}
    
    //检验邮箱格式
	var email = document.getElementById("email").value;
	if(email==null || email==""){
		alert("邮箱不能为空!");
		return false;
	}else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)){
		alert("错误的邮箱格式!");
		return false;
	}
    
    //校验电话格式
    //var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    var isMob=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var phone = document.getElementById("phone").value.trim();
    if(phone == ""){
        alert("电话不能为空!");
		return false;
	}else if(!isMob.test(phone)/*||!isPhone.test(phone)*/){
		alert("错误的电话格式!");
		return false;
	}
    
    //校验地址
    var address = document.getElementById("address").value;
    if(address == null || address == ''){
		alert("地址不能为空!");
		return false;
	}
	return true;
}

//当获得焦点时进行用户名提示
function tipUsername(){
    $('#s2').tooltip('hide');
    $('#s3').tooltip('hide');
    $('#s4').tooltip('hide');
    $('#s5').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#s7').tooltip('hide');
    $('#s8').tooltip('hide');
    $('#s9').tooltip('hide');
    $('#s10').tooltip('hide');
    $('#s11').tooltip('hide');
    $('#s12').tooltip('hide');
    $('#username').tooltip('toggle');
}
//当获得焦点时进行密码提示
function tipPassword(){
    $('#s3').tooltip('hide');
    $('#s4').tooltip('hide');
    $('#s5').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#s7').tooltip('hide');
    $('#s8').tooltip('hide');
    $('#s9').tooltip('hide');
    $('#s10').tooltip('hide');
    $('#s11').tooltip('hide');
    $('#s12').tooltip('hide');
    $('#password').tooltip('toggle');
}
//当获得焦点时进行确认密码提示
function tipPassword2(){
    $('#s1').tooltip('hide');
    $('#s3').tooltip('hide');
    $('#s4').tooltip('hide');
    $('#s5').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#s7').tooltip('hide');
    $('#s8').tooltip('hide');
    $('#s9').tooltip('hide');
    $('#s10').tooltip('hide');
    $('#repassword').tooltip('toggle');
}
//当获得焦点时进行Email提示
function tipEmail(){
    $('#s1').tooltip('hide');
    $('#s2').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#s7').tooltip('hide');
    $('#s8').tooltip('hide');
    $('#s9').tooltip('hide');
    $('#s10').tooltip('hide');
    $('#email').tooltip('toggle');
}
//当获得焦点时进行电话提示
function tipPhone(){
    $('#s1').tooltip('hide');
    $('#s2').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#s10').tooltip('hide');
    $('#s11').tooltip('hide');
    $('#s12').tooltip('hide');
    $('#phone').tooltip('toggle');
}
//当获得焦点时进行地址提示
function tipAddress(){
    $('#s1').tooltip('hide');
    $('#s2').tooltip('hide');
    $('#s3').tooltip('hide');
    $('#s4').tooltip('hide');
    $('#s5').tooltip('hide');
    $('#s6').tooltip('hide');
    $('#s11').tooltip('hide');
    $('#s12').tooltip('hide');
    $('#address').tooltip('toggle');
}

//当失去焦点检验用户名
function checkUsername(){
	// 获得文件框值:
	var nickname = document.getElementById("nickname").value;
	if(nickname==""){
        $('#s1').tooltip('toggle');
	}else{
        $('#s1').tooltip('hide');
    }
    // 1.创建异步交互对象
	var xhr = createXmlHttp();
    // 2.设置监听
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){
            if(xhr.status == 200){
            	document.getElementById("span1").innerHTML = xhr.responseText;
            	
            /*
            	var msg = xhr.responseText;
            	var hintusername = document.getElementById("span1");
            	
            	if(msg == "true") {
    				hintusername.className="glyphicon glyphicon-ok";
    				hintusername.innerHTML = "该用户名可以使用哦~";
    				CKusername=true;
    			}
    			else {
    				hintusername.className="glyphicon glyphicon-remove";
    				hintusername.innerHTML="用户名已存在！";
    				CKusername=false;
    			}
            */
			 }
		}
	}
    // 3.打开连接
    xhr.open("GET","${pageContext.request.contextPath}/user_findByName.action?time="+new Date().getTime()+"&nickname="+nickname,true);
    // 4.发送
    xhr.send(null);   
}

//异步校验用户名
function createXmlHttp(){
    var xmlHttp;
    try{ // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e){
        try{// Internet Explorer
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e){
            try{
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e){}
        }
    }
    return xmlHttp;
}

function change(){
	var img1 = document.getElementById("checkImg");
	img1.src="${pageContext.request.contextPath}/checkImg.action?"+new Date().getTime();
}

//当失去焦点检验密码框
function checkPassword(){
	// 获得文件框值:
	var password = document.getElementById("password").value;
	if(password==""){
		$('#s2').tooltip('toggle');
	}else{
        $('#s2').tooltip('hide');
    }
}

//当失去焦点检验确认密码框
function checkPassword2(){
	// 获得文件框值:
    var password = document.getElementById("password").value;
	var repassword = document.getElementById("repassword").value;
	if(repassword=="") {
		$('#s11').tooltip('toggle');
	}else if(repassword != password){
        $('#s12').tooltip('toggle');
    }else{
        $('#s11').tooltip('hide');
        $('#s12').tooltip('hide');
    }
}

//当失去焦点检验邮箱
function checkEmail(){
	var email = document.getElementById("email").value;
	
	if(email==""){
		$('#s3').tooltip('toggle');
	}else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)){
		$('#s4').tooltip('toggle');
	}else{
		$('#s5').tooltip('toggle');
	}
}

//当失去焦点检验电话
function checkPhone(){
    //var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    var isMob=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var phone = document.getElementById("phone").value.trim();
	//var phone = $.trim(document.getElementById("phone").value);
	if(phone==""){
		$('#s7').tooltip('toggle');
	}else if((!isMob.test(phone))/*||(!isPhone.test(phone))*/){
		$('#s8').tooltip('toggle');
	}else{
		$('#s9').tooltip('toggle');
	}
}

//当失去焦点检验验证码
function checkAddress(){
	var address = document.getElementById("address").value;
	if(address==""){
		$('#s10').tooltip('toggle');
	}else{
        $('#s10').tooltip('hide');
    }
}

$(function () {
    $(".tooltip-options span").tooltip({html : true });
});
