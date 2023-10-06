function login() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'username' && password == 'password')

        window.location = "bankMain.html";
    
    else
        alert ("Wrong username or password. Please try again.")

}

document.getElementById('username').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

