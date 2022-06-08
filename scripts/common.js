localStorage.setItem("username","admin");
localStorage.setItem("password","admin");
var loggedin = false;
var logoutBtn = document.getElementById("logoutBtn");
var loginBtn = document.getElementById("loginBtn");
function login(){
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;

    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");

    if(uname==username && password==pass){
        alert("successfully loggedin");
       
        loggedin= true;
    }
    else{
        alert("invalid credentials");
    }

    
if(loggedin==true){
    logoutBtn.style.display = "inline";
    loginBtn.style.display = "none";
}

}

function logout(){
    logoutBtn.style.display  ="none";
    loginBtn.style.display = "inline";
}