 var cl= console.log;
const passwordField = document.getElementById('password');



passwordField.addEventListener('click',handler)

let handler =(hand)=>{
    if (hand.checked) {
        // If checkbox is checked, show the password
        hand.type = 'text';
    } else {
        // If checkbox is unchecked, hide the password
        hand.type = 'password';
    }
};

cl(handler)