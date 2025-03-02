// Реализовать скрипт, который уведомит о полной загрузке страницы
window.addEventListener('load', () => {
    alert('Страница полностью загружена');
});

// Реализовать кнопку счетчик, которая будет увеличивать счетчик на "1" и вывести его значение на страницу (button onclick)
// Реализовать кнопку счетчик, которая будет уменьшать счетчик на "1" реализовать с помощью listener click
let c = 0;
const counter = document.getElementById('counter');

document.getElementById('incrementBtn').onclick = () => {
    c++;
    counter.textContent = c;
};

document.getElementById('decrementBtn').addEventListener('click', () => {
    if (c - 1 < 0) return;
    c--;
    counter.textContent = c;
});

// Реализовать скрипт очистки данных формы
function clearForm() {
    document.getElementById('authForm').reset();
    document.getElementById('messageCheckAuth').textContent = '';
}

// Реализовать скрипт сохранения учетных данных и автоподстановку оных с помощью localStorage
window.addEventListener('load', () => {
    const savedLogin = localStorage.getItem('login');
    const savedPassword = localStorage.getItem('password');
    if (savedLogin && savedPassword) {
        document.getElementById('login').value = savedLogin;
        document.getElementById('password').value = savedPassword;
    }
});

// Реализовать скрипт отправки данных формы с помощью listener submit.
// Без отправки на сервер провести валидацию введенных данных, если login=="admin" & pass=="admin" вывести сообщение об успехе, иначе сообщение о неуспехе
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const login = formData.get('login');
    const passw = formData.get('password');
    const message = document.getElementById('messageCheckAuth');
    
 
    if (login === 'admin' && passw === 'admin') {
        message.textContent = 'Успешная авторизация!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Неверный логин или пароль';
        message.style.color = 'red';
    }
    

    localStorage.setItem('login', login);
    localStorage.setItem('password', passw);
}); 