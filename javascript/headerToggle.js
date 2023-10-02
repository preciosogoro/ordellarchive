var header = document.querySelector('header');

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('second', window.scrollY > 5);
})