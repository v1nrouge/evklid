let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    loopedSlides: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

const tabBtns = document.querySelectorAll('.tab__btn');

function handleTabClick (event) {
    tabBtns.forEach(function (tabBtn) {
        tabBtn.classList.remove('tab__btn_active');
    });

    event.currentTarget.classList.add('tab__btn_active');
    const path = event.currentTarget.dataset.path;

    document.querySelectorAll('.tab-item').forEach(function(tabItem) {
        tabItem.classList.remove('tab-item_active');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-item_active');
}

tabBtns.forEach(function(tabBtn) {
    tabBtn.addEventListener('click', handleTabClick);
});

$("#accordion").accordion({
    active: false,
    classes: {
        "ui-accordion": "section-faq__list",
        "ui-accordion-header": "faq-item__header",
        "ui-accordion-header-collapsed": "faq-item__header-collapsed",
        "ui-accordion-content": "faq-item__content"
    },

    header: ".faq-item__header",
    collapsible: true,
    heightStyle: "content"
});

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', function() {
    console.log('menu');
    menu.classList.toggle('is-shown');
})

