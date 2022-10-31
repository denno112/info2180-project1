/* Add your JavaScript to this file */
window.onload = function(){


    let submit = document.querySelector(".newsletter button");
    let msg = document.querySelector(".message");
    let email = document.getElementById("email");
    var reGex = /^\S+@\S+\.\S+$/i;


    email.textContent = ""


    submit.addEventListener("click",function(a){
        a.preventDefault();
        let confirm = email.Value;
        if (confirm === "" || !reGex.test(confirm)){
            msg.textContent = "Please enter a valid email address"
        }else{
            msg.textContent = "Thank You! Your email address " + confirm.toString() + " has been added to our mailing list!"
        }
    });
};