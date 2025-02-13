function authenticate(){
    
    console.log("Correct Authenticated");
    let email=document.getElementById("email").ariaValueMax;
    let password=document.getElementById("password").ariaValueMax;
    validate(email,password);
}