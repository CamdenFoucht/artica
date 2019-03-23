let hamburger = document.querySelector('.hamburger');
let sidemenu = document.querySelector('.sidemenu');

hamburger.addEventListener('click', function(e){
    hamburger.classList.toggle('active');
    sidemenu.classList.toggle('active');
});

let arr = Array.from(document.querySelectorAll('.form-control'));

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');

function submitForm(e){
    alert('hi');
    console.log(e);
    for(let i=0; i<arr.length; i++){
        arr[i].value = "";
    }

}


function scrollTopPage(){
    window.scroll(0, 0);
}


function scrollDownPage(){
    window.scroll(0, 600);
}