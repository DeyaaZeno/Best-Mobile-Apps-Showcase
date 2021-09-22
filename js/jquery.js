// ready function
$(function(){
    $('.preloader').delay(1000).fadeOut('slow',function(){
        $('body').css("overflow","auto");
    });
    var li = [$('.num-first'), $('.num-second'), $('.num-third'), $('.num-four')]; 
    var waypoint = new Waypoint({
        element: document.getElementById('section-2'),
        handler: function(down){
            $.each(li, function (k,val){
                var value = val.attr('data-nums');
                var options = {};
                options ['toValue'] = value;
                options ['duration'] = 5000;
                val.numerator(options);
            });      
        }, offset: '70%'
    });
});


let navColor = () =>{
    const navbar = document.querySelector('.page-header .navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
}

window.addEventListener('scroll', navColor);


let goUp = () => {
    const upBtn = document.querySelector('.up-btn');
    upBtn.classList.toggle('active', window.scrollY > 50);
}

window.addEventListener('scroll', goUp)

const menuToggle = document.querySelector('.navbar .btn.menu');
const navigation = document.querySelector('.navbar .navigation');
let toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu)