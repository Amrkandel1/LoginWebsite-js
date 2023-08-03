var registeryName=document.getElementById("registeryName");
var registeryEmail=document.getElementById("registeryEmail");
var registeryPassword=document.getElementById("registeryPassword");
var signUpButton=document.getElementById("signUpButton");
var errorParag=document.getElementById("errorParag");
var allInformation=[];

if(localStorage.getItem("allInformation") !=null){
    allInformation=JSON.parse(localStorage.getItem("allInformation"))
}

    signUpButton.addEventListener("click" , function(){
        var box=``;
        if(inputsEmpty()){
            box+=`<p class="text-center mt-3 text-danger">All inputs is required</p>`
                errorParag.innerHTML=box;
        }else{
            if(emailNotRepeat() && emailValidation()){
                var userInformation={
                    name:registeryName.value,
                    email:registeryEmail.value,
                    password:registeryPassword.value,
                }       
                allInformation.push(userInformation);               
                localStorage.setItem("allInformation",JSON.stringify(allInformation))                          
                signUpButton.setAttribute("href" , "../index.html");               
            }else{
                box+=`<p class="text-center mt-3 text-danger">email already exists</p>` 
                errorParag.innerHTML=box;  
            }
        }      
    })
    
    function inputsEmpty(){
            if(registeryName.value==""){
                return true
            }else if(registeryEmail.value==""){
                return true
            }else if(registeryPassword.value==""){
                return true
            }
    }

    function emailNotRepeat(){       
        for(var i=0 ; i<allInformation.length ; i++){
            if(registeryEmail.value==allInformation[i].email && registeryEmail.value!=""){
                return false
            }
        }  
        return true;    
    }

    function emailValidation(){
        var regix=/^[a-zA-Z]{3,20}[0-9]{2,4}@(gmail|hotmail|yahoo|outlook|mail|)\.com/;
        return regix.test(registeryEmail.value);
    }