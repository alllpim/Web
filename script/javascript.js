
function validation(){
var color = "#DC143C";
var login = document.getElementById('login');
var password = document.getElementById('password');
var email = document.getElementById('email');
var text = "";
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(login.value.length >= 10 || login.value.length <= 4){
	login.style.color = color;
	text += "Wrong Login!\n";
}
else{
	login.style.color = "black";
}
if(password.value.length >= 10 || password.value.length <= 4){
	password.style.color = color;
	text += "Wrong Password!\n";
}
else {
	password.style.color = "black";
}
if(re.test(email.value) == false){
	email.style.color = color;
	text += "Wrong E-mail!";
}
else {
email.style.color = "black";
}
if(text ==""){
color = "#32CD32";
text = "Signing up was successful!";
var obj = { login: login.value , password: password.value, email: email.value };
var myJSON = JSON.stringify(obj);
console.log(myJSON);

}
document.getElementById('afterValid').innerText = text;
document.getElementById('afterValid').style.color = color;
}
