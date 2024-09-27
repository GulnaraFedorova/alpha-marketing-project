////// Выпадающее меню для выбора систем

document.getElementById('dropdown-btn').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('#dropdown-menu li').forEach(function(item) {
    item.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        var text = this.textContent;
        document.getElementById('dropdown-btn').textContent = text;
        document.getElementById('dropdown-menu').style.display = 'none';
    });
});

/// Закрытие выпадающего меню при клике вне его
document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown-container');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdown-menu').style.display = 'none';
    }
});



////// Выпадающее меню для выбора услуг
document.getElementById('dropdown-application-btn').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-application-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('#dropdown-application-menu li').forEach(function(item) {
    item.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        var text = this.textContent;
        document.getElementById('dropdown-application-btn').textContent = text;
        document.getElementById('dropdown-application-menu').style.display = 'none';
    });
});

// Закрытие выпадающего меню при клике вне его
document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown-application-container');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdown-application-menu').style.display = 'none';
    }
});



////// Попапы
const orderBtns = document.querySelectorAll('.pagecrm__price-btn');
const popupForm = document.getElementById('popupForm');
const overlay = document.getElementById('overlay');
const mainForm = document.getElementById('mainForm');
const agreeCheckbox = document.getElementById('agree');
const submitBtn = document.getElementById('submitBtn');
const successPopup = document.getElementById('successPopup');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');

// Открытие попапа для каждой кнопки
orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        popupForm.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Закрытие попапа при клике на затемняющий фон
overlay.addEventListener('click', () => {
    popupForm.style.display = 'none';
    overlay.style.display = 'none';
});

// Активация кнопки отправки, когда отмечен чекбокс
agreeCheckbox.addEventListener('change', () => {
    if (agreeCheckbox.checked) {
        submitBtn.classList.add('active');
        submitBtn.disabled = false;
    } else {
        submitBtn.classList.remove('active');
        submitBtn.disabled = true;
    }
});

// Обработка отправки формы
mainForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    popupForm.style.display = 'none';
    successPopup.style.display = 'block';
});

// Закрытие успешного попапа
closeSuccessBtn.addEventListener('click', () => {
    successPopup.style.display = 'none';
    overlay.style.display = 'none';
});



////// Попап об успешной отправки формы
const forms = document.querySelectorAll('.form-popup');

// Обработка отправки формы для всех форм
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Отображаем успешный попап
        overlay.style.display = 'block';
        successPopup.style.display = 'block';
    });
});

// Закрытие попапа при клике на затемняющий фон
overlay.addEventListener('click', () => {
    successPopup.style.display = 'none';
    overlay.style.display = 'none';
});
