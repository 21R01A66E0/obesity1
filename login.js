document.addEventListener('DOMContentLoaded',function(){
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit',function(event){
        event.preventDefault();
        const email=document.getElementById('loginEmail').value;
        const password=document.getElementById('loginPassword').value;
        if(localStorage.getItem(email)===password){
            window.location.href="weight.html";
        }
        else if(!localStorage.getItem(email)){
            alert("No email found please register");
        }
        else {
            alert('invalid password.please enter correct password');
            password='';
        }
    });
});
