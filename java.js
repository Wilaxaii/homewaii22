var attempt = 3; 
function login(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

//admin
if ( username == "admin" && password == "12345"){
alert ("Login successfully");
window.location = "https://sites.google.com/view/vilaxay/%E0%B8%AB%E0%B8%99%E0%B8%B2%E0%B9%81%E0%B8%A3%E0%B8%81?authuser=1"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


//user
if ( username == "user" && password == "12345"){
alert ("Login successfully");
window.location = "user_page.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}


//error
if ( username == "" && password == ""){
    window.location = "error_page.html"; // Redirecting to other page.
    return false;
    }
    else{
    if( attempt == 0){
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
   
    
//incorrect 
if ( username == "" && password == ""){
    return false;
    }
    else{
    alert("Your username or password is incorrect");
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
        

}