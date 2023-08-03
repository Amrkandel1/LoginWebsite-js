var emailLogin=document.getElementById("emailLogin");
var passwordLogin=document.getElementById("passwordLogin");
var loginButton=document.getElementById("loginButton");
var errorParagLoginPage=document.getElementById("errorParagLoginPage");
var allInformation=[];
var nameOfUser;

if(localStorage.getItem('allInformation') !=null){
    allInformation=JSON.parse(localStorage.getItem('allInformation'))
}

loginButton.addEventListener("click" , function(){
    var index;
    var box=``;
    if(emailLogin.value=="" || passwordLogin.value==""){    
        box+=`<p class="text-center mt-3 text-danger">All inputs is required</p>`
        errorParagLoginPage.innerHTML=box;
    }else{
        for(var i=0 ; i<allInformation.length ; i++){
            index=i;
            if(emailLogin.value==allInformation[i].email && passwordLogin.value==allInformation[i].name){
                loginButton.setAttribute("href" , "html/home.html")
                box+=`<p class="text-center mt-3 text-success">Success</p>`
                errorParagLoginPage.innerHTML=box;
                localStorage.setItem("nameOfUser" , allInformation[i].name);            
            }
        }
        if(emailLogin.value!=allInformation[index].email && passwordLogin.value!=allInformation[index].name){
            box+=`<p class="text-center mt-3 text-danger">incorrect email or password</p>`
            errorParagLoginPage.innerHTML=box;
        }else{
            box+=``
            errorParagLoginPage.innerHTML=box;

        }
        
    }  
})



 


    
