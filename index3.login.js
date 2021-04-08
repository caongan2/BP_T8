let userName = prompt("who the hell?");
if (userName == 'Admin') {
    let pass = prompt("your password");
    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == "null") {
        alert("canceled");
    } else {
        alert('Wrong password');
    }
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}
