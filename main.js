function log(){
    const username = document.getElementById('name').value;
    const password = document.getElementById('pass').value;

    if(username == "admin" && password == "user"){
        alert("Zalogowano pomyślnie")
    }else{
        alert("Nie udało się zalogować")
    }
}


function createAcc(){
    const username = document.getElementById('name');
    const password = document.getElementById('pass');
    const secPassword = document.getElementById('pass2');
    const email = document.getElementById('mail');
    const form = document.getElementById('form');
    const error = document.getElementById('error');

    let messages = []

    form.addEventListener('submit', (a)=>{
        if(password.value.length <= 4){
            messages.push("Hasło musi być dłuższe niż 4 litery")
        }

        if(password.value.length >= 28){
            messages.push("Hasło nie może być dłuższe niż 28 znaków")
        }
        
        if(password.value == "haslo"){
            messages.push('Hasło nie może być hasłem')
        }

        if(password.value != secPassword.value){
            messages.push('Hasła muszą być takie same')
        }

        if(messages.length > 0){
            a.preventDefault()
            error.innerText = messages.join(', ')
        }
    })
}