// создаём массив с названиями пива (в этой версии сайта не нужен)
// var beerAr = document.querySelectorAll(".titleType1");

// создаём массив с ценами
var price = document.querySelectorAll(".price");

// ищем значения строк для ответа
var x = document.getElementById('ans1');
var y = document.getElementById('ans2');

//Лочим ввод в поля
document.addEventListener('keydown', e => {
    if (e.target.id === "amBe") {
            e.preventDefault()
    };
});

// создаём массив полей ввода
var amBe = document.querySelectorAll('#amBe');

    
// задаём прибавление/ументшение количества по нажатию кнопок
// создаём массивы кнопок

var min = document.querySelectorAll('#min');
    for (let i = 0; i< min.length; i++) {
        min[i].addEventListener ('click', function(event) {
                if (amBe[i].value > 0) {
                --amBe[i].value;}
        });
    };
    

var plu = document.querySelectorAll('#plu');
    for (let i = 0; i < plu.length; i++) {
        plu[i].addEventListener ('click', function(event) {
                if (amBe[i].value >= 0) {
                ++amBe[i].value;}
        });
    };


// задаём варианты диалога по нажатию "ок"
but.onclick = function() {
    x.innerHTML = ""; //очищаем первую строку для ответа
    y.innerHTML = ""; //очищаем вторую строку для ответа

    let sum = 0;
    let fullPrice = 0;

    // находим сумму бутылок и стоимость этого количества
    for (let i = 0; i < amBe.length; i++){
        fullPrice += Number(price[i].innerHTML) * Number(amBe[i].value);
        sum += Number(amBe[i].value);        
    };
    // диалог
    if (sum == 0) {
        x.innerHTML =`Выберите хоть одну бутылку-то.`;
    }
        else if (sum > 4) {
             x.innerHTML =`${sum} бутылок в одну харю?!`;
             y.innerHTML = `Ну ты и алкаш!`}
        else {
            if (sum >= 3){
                fullPrice = fullPrice * 0.8;
                x.innerHTML = `Вам скидка! С вас ${fullPrice} р.`;
                y.innerHTML = "Приятного вечера!";
            } else{
            x.innerHTML = `С вас ${fullPrice} р.`;
            y.innerHTML = "Приятного вечера!"}
        }
   
};



//КАРУСЕЛЬ
let beerCard = document.querySelector('.beerCard');

let arrCard = document.querySelectorAll('.beerCard');
let carousel = document.querySelector('#carousel');

let first = arrCard[0];
let last = arrCard[arrCard.length-1];

// На будущее - возможность подстраивать количество блоков
// под размер экрана. Пока не работает.
carousel.style.maxWidth = first.getBoundingClientRect().width*3 + 'px';
carousel.style.minWidth = first.getBoundingClientRect().width*3 + 'px';
let bodyWidth = body.getBoundingClientRect().width;
let carouselWidth = carousel.getBoundingClientRect().width;

window.addEventListener(`resize`, e => {
    if (bodyWidth < carouselWidth) {
        carousel.style.maxWidth = first.getBoundingClientRect().width + 'px';
        carousel.style.minWidth = first.getBoundingClientRect().width + 'px';
    } else {
        carousel.style.maxWidth = first.getBoundingClientRect().width*3 + 'px';
        carousel.style.minWidth = first.getBoundingClientRect().width*3 + 'px';};
  });


// ЛИСТАЕМ КАРУСЕЛЬ
let firstWidht = first.getBoundingClientRect().width;
let movIndex = 0;

let butRight = document.querySelector('#butRight');
butRight.addEventListener('click', function() {
    if (movIndex > firstWidht*(arrCard.length-3)*-1){
        movIndex -= firstWidht;
        first.style.marginLeft = movIndex + 'px';
    } else {event.preventDefault();};
        
});

let butLeft = document.querySelector('#butLeft');
butLeft.addEventListener('click', function() {
if (movIndex < 0){
    movIndex += firstWidht;
    first.style.marginLeft = movIndex + 'px';
} else {event.preventDefault();};
});