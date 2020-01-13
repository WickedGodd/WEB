
//citire din fisier cu ajutorul AJAX 

function test(){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState==4){
			document.getElementById('result').innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","text.txt",true);
	xmlhttp.send();
}

// DEFINIREA variabelor

 function validate(){
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var select = document.getElementById("select");
  var selectedValue = select.options[select.selectedIndex].value;
  var email = document.getElementById("email").value;
  var checkedYes = document.getElementById('like').checked;
  var checkedNo = document.getElementById('dislike').checked;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var terms =  document.getElementById("terms");
	
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;	
  
  error_message.style.padding = "10px";
  
// verificarea numelui	
	
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  
  // verificarea parolei cu regex
  if(password.length < 4){
    text = "Password length must be at least 4 char";
    error_message.innerHTML = text;
    return false;
  }else if (password.search(/[0-9]/)== -1){
    text = "Password must have 1 number";
    error_message.innerHTML = text;
    return false;
  }else if (password.search(/[a-z]/)== -1){
    text = "Password must have 1 small letter";
    error_message.innerHTML = text;
    return false;
  }else if (password.search(/[A-Z]/)== -1){
    text = "Password must have 1 upper letter";
    error_message.innerHTML = text;
    return false;
  }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\.\,\;\:]/)== -1){
    text = "Password must have 1 special character";
    error_message.innerHTML = text;
    return false;
  }
  
  //verificare slider
	
	if(slider.value == 0){
    text = "Please drag the slider to display Age";
    error_message.innerHTML = text;
    return false;
	}
	
 //verificare nr telefon	
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  
  // verificare oras
  
	if (selectedValue == "SelectCity"){
    text = "Please select City";
    error_message.innerHTML = text;
    return false;
  }
  // verificare email
  
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;  
  }
  
  //verificare radio
  
	if(checkedYes == false && checkedNo == false){
    text = "Please Select Gender";
    error_message.innerHTML = text;
    return false;
  }
  
  //verificare text
  
  if(message.length <= 40){
    text = "Please Enter More Than 40 Characters";
    error_message.innerHTML = text;
    return false;
  }
  
  //verificare bifa
  
	if(!terms.checked) {
    text = "Please accept the Terms and Conditions";
    error_message.innerHTML = text;
    return false;
  }
	
  alert("Form Submitted Successfully!");
  return true;
}// JavaScript Document
