//前台的js简单校验
function checkForm() {
    // 校验用户名
	var nickname = document.getElementById("nickname").value;
	if(nickname == null || nickname == ''){
		alert("昵称不能为空!");
		return false;
	}
    //检验邮箱格式
	var email = document.getElementById("email").value;
	if(email==null||email==""){
		alert("邮箱不能为空!");
		return false;
	}else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)){
		alert("错误的邮箱格式!");
		return false;
	}
    var phone = document.getElementById("phone").value;
	if(phone == null || phone == ''){
		alert("电话不能为空!");
		return false;
	}
    var user_resume = document.getElementById("user_resume").value;
	if(user_resume == null || user_resume == ''){
		alert("个人简介不能为空!");
		return false;
	}
	return true;
}

//当获得焦点时进行用户名提示
function tipNickname(){
    $('#nickname').tooltip('show');
}
//当获得焦点时进行Email提示
function tipEmail(){
    $('#email').tooltip('show');
}
//当获得焦点时进行phone提示
function tipPhone(){
    $('#phone').tooltip('show');
}
//当获得焦点时进行个人简介提示
function tipResume(){
    $('#user_resume').tooltip('show');
}

//当失去焦点检验昵称
function checkNickname(){
	// 获得文件框值:
	var nickname = document.getElementById("nickname").value;
	if(nickname==""){
        $('#s1').tooltip('show');
	}else {
        $('#s1').tooltip('hide');
    }
    
}

//当失去焦点检验邮箱
function checkEmail(){
	var email = document.getElementById("email").value;
	
	if(email==""){
		$('#s2').tooltip('show');
	}else if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)){
		$('#s3').tooltip('show');
	}else{
		$('#s4').tooltip('show');
	}
}

//当失去焦点检验电话
function checkPhone(){
	var phone = document.getElementById("phone").value;
	if(phone==""){
		$('#s5').tooltip('show');
	}else {
        $('#s5').tooltip('hide');
    }
}

//当失去焦点检验个人简介
function checkResume(){
	var user_resume = document.getElementById("user_resume").value;
	if(user_resume==""){
		$('#s6').tooltip('show');
	}else {
        $('#s6').tooltip('hide');
    }
}






