const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if (target.value.length >2){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('jogador', input.value);
    window.location='pag/game.html';
}

input.addEventListener('input', validateInput); 
form.addEventListener('submit', handleSubmit);  