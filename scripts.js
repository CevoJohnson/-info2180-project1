/* Add your JavaScript to this file */

window.onload = function(){


    document.querySelector("button").addEventListener("click", function(){
        var formData = document.getElementById('email').value;
        let email = formData.email.value;
        var message = document.querySelector(".message")
        
        if(email){
            message.innerHTML = 'Thank you! Your email address <${email}> has been added to your mailing list';
            return false;
        }else{
            message.innerHTML = 'Please enter a valid email';
            return false;
        }

    })
}