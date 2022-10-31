/* Add your JavaScript to this file */
window.onload = function(){


    let container = document.getElementsByClassName("newsletter")[0];
    let sub = container.getElementsByTagName("button")
    let msg = document.querySelector(".message");
    let email = document.getElementById("email");
    var reGex = /^\S+@\S+\.\S+$/i;


    email.textContent = ""
    sub[0].addEventListener('click', function(a){
        a.preventDefault()
        let confirmemail = email.value

        if (confirmemail === "" || !reGex.test(confirmemail)) {
            msg.innerHTML  = "Please enter a valid email address"
        }else{
            msg.innerHTML = `Thank You! Your email address ${confirmemail} has been added to our mailing list!`
        }
    })

};