// countdown
$(document).ready(function(){

    $('#fecha').countdown('2020/09/28', function(event){
        $(this).html(event.strftime('<span>%D</span> Dias <span>%H</span> Horas <span>%M</span> Minutos <span>%S</span> Segundos'))
    });
});

// Navbar cambio de color backgroun
window.onscroll = (event) =>{
    const scroll = window.scrollY;
    const header = document.querySelector('#navegacion-principal')
    if(scroll > 150){
        header.classList.add('bg-secondary')
    }else{
        header.classList.remove('bg-secondary')
    }
};

// Smooth Scrooll 
// document.querySelectorAll('.navbar .nav-link').forEach(enlace =>{
//     enlace.addEventListener('click',(event)=>{
//         event.preventDefault();
//         document.querySelector(enlace.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })

//     })
// });