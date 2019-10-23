// Переменная с кнопкой в контактах
var link = document.querySelector(".contacts__button");

// Переменная с попапом формы
var popup = document.querySelector(".modal__write-us");
// Переменная с кнопкой закрытия попапа
var close = popup.querySelector(".button-close");

// Переменная с формой обратной связи
var form = popup.querySelector(".feedback-form");
// Переменная с полем ввода имени
var clientName = popup.querySelector("[name=client-name]");
// Переменная с полем ввода почты
var clientMail = popup.querySelector("[name=client-mail]");
// Переменная с полем ввода почты
var clientText = popup.querySelector("[name=client-text]");

// Событие по клику на кнопку
link.addEventListener("click", function (evt) {
  // Отменяет стандартное действие ссылки
  evt.preventDefault();
  // Добавляет попапу формы класс, который отвечает за показ блока
  popup.classList.add("modal-show");
  clientName.focus();
});

// Событие по клику на кнопку зыкрытия
close.addEventListener("click", function (evt) {
  // Отменяет стандартное действие кнопки
  evt.preventDefault();
  // Удаляет класс, который отвечает за открытие попапа (изначально он скрыт)
  popup.classList.remove("modal-show");
  // Удаляет класс, который отвечает за тряску форму при невалдином значении
  popup.classList.remove("modal-error");
});

// Отменяет стандартное действие кнопки submit
form.addEventListener("submit", function (evt) {
  // Отменяет отправку формы, если какое-то из полей незаполнено
  if (!clientName.value || !clientMail.value || !clientText.value) {
    evt.preventDefault();
    // Небольшой хак, чтобы анимация ошибки отрабатывала несколько раз, если форма не валидна
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    // Если форма не валидна, добавляется класс ошибки, для которого сделана анимация тряски по горизонтали
    popup.classList.add("modal-error");
  }
});

// Отлавливает нажатие кнопки ESC и в случае, если модальное окно открыто, закрывает его
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

// Переменная с ссылкой-изображением
var mapLink = document.querySelector(".contacts__button-map");

// Переменная с попапом карты
var mapPopup = document.querySelector(".modal__map");
// Переменная с кнопкой закрытия карты
var mapClose = mapPopup.querySelector(".button-close");

// Событие по клику на ссылку-изображение
mapLink.addEventListener("click", function (evt) {
  // Отменяет стандартное действие ссылки
  evt.preventDefault();
  // Добавляет попапу карты класс, который отвечает за показ блока (изначально он скрыт)
  mapPopup.classList.add("modal-show");
});

// Событие по клику на кнопку зыкрытия
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

/* Отлавливает нажатие кнопки ESC и в случае, если модальное окно открыто, закрывает его
   Если начать взаимодействие с картой, то нажатие на esc перестает закрывать карту */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// Переменная на ссылку, которая будет открывать попап
var cartLink = document.querySelector(".catalog-card__button");

// Переменная с попапом добавления товара в корзину
var cartPopup = document.querySelector(".modal__cart");
// Переменная с кнопкой закрытия попапа добавления товара в корзину
var cartClose = cartPopup.querySelector(".button-close");
var cartContinue = cartPopup.querySelector(".modal__button-catalog--continue");

// Событие по клику на ссылку, которая будет открывать попап
cartLink.addEventListener("click", function (evt) {
  // Отменяет стандартное действие ссылки
  evt.preventDefault();
  // Добавляет попапу добавления товара в корзину класс, который отвечает за показ блока (изначально он скрыт)
  cartPopup.classList.add("modal-show");
});

// Событие по клику на кнопку зыкрытия
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

// // Событие по клику на кнопку продолжить покупки
cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

// Отлавливает нажатие кнопки ESC и в случае, если модальное окно открыто, закрывает его
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
