/* Add your JavaScript to this file */

window.onload = function(){

    var myForm = document.querySelector("div form");
    var theMessage = document.querySelector(".message");


    myForm.addEventListener('submit', e =>{
        e.preventDefault();

        var email = document.getElementById("email").value;

        if(email != ""){
            theMessage.innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }else{
            theMessage.innerHTML = 'Please enter a valid email address';

        }

    })
    
}