var secCardDiv = document.getElementById("secCardDiv");
var lessBtn = document.getElementById("lessBtn");
var moreBtn = document.getElementById("moreBtn");

function viewMore(){
    secCardDiv.style.display = "flex";
    lessBtn.style.display = "inline";
    moreBtn.style.display = "none";
}
function viewLess(){
    secCardDiv.style.display = "none";
    moreBtn.style.display ="inline";
    lessBtn.style.display = "none";
}

function validator(){
    console.log("validator called");

}
