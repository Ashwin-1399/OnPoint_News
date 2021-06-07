function validate() {
var name = document.getElementById("nm").value;
var email = document.getElementById("eid").value;
var password = document.getElementById("pwd").value;
var cpassword = document.getElementById("cpass").value;
if(name == "" || email == "" || password=="" ||cpassword==""){
alert("Please complete all the fields");
}
else if((password.length)<8){
alert("Password should be minimum 8 characters in length");
}else if(!(password == cpassword)){
alert("Passwords do not match");
}else{
alert("Account successfully created");
}
}