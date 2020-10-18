
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

<!-- скрипт, который обработает нажатие на кнопку и отправит данные на сервер -->
  // эта функция сработает при нажатии на кнопку
  function sendJSON() {
    // с помощью jQuery обращаемся к элементам на странице по их именам
    let login = document.getElementById('login');
    let password = document.getElementById('password');
		let email = document.getElementById('email');
    // а вот сюда мы поместим ответ от сервера
    let result = document.getElementById('afterValid');
    // создаём новый экземпляр запроса XHR
    let xhr = new XMLHttpRequest();
    // адрес, куда мы отправим нашу JSON-строку
    let url = "https://alllpim.github.io/Web/json/json.php";
    // открываем соединение
    xhr.open("POST", url, true);
    // устанавливаем заголовок — выбираем тип контента, который отправится на сервер, в нашем случае мы явно пишем, что это JSON
    xhr.setRequestHeader("Content-Type", "application/json");
    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
    xhr.onreadystatechange = function () {
      // если запрос принят и сервер ответил, что всё в порядке
      if (xhr.readyState === 4 && xhr.status === 200) {
        // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
        result.innerHTML = this.responseText;
      }
    };
    // преобразуем наши данные JSON в строку
    var data = JSON.stringify({ "login": login.value, "password": password.value, "email": email.value  });
    // когда всё готово, отправляем JSON на сервер
    xhr.send(data);
  }
