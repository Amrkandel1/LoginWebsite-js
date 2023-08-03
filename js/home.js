var nameOfUserr=document.getElementById("nameOfUser");
var logoutButton=document.getElementById("logoutButton");
var nameOfUser;

nameOfUser=localStorage.getItem("nameOfUser");
nameOfUserr.innerHTML=`welcome ${nameOfUser}`;

logoutButton.addEventListener("click" , function(){
    logoutButton.setAttribute("href" , "../index.html")
})