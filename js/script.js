const clearActive = () => {
    tabs.forEach(function (e, i) {
        e.classList.remove('active');
    });
}

const updateTab = () => {
    clearActive();
    document.querySelector(`[data-tab="${mySiema.currentSlide}"]`).classList.add('active');
}

const tabs = document.querySelectorAll('.tab-link');

const mySiema = new Siema({//using Siema library for carousel by Paweł Grzybek github.com/pawelgrzybek
    onChange: updateTab
});

tabs.forEach(function (e, i) {
    e.addEventListener('click', () => {
        clearActive();
        e.classList.add('active');
        mySiema.goTo(i);

    });
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    mySiema.prev(1);
});

next.addEventListener('click', () => {
    mySiema.next(1);
});

