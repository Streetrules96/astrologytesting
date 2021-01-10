$(document).ready(function() {

    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    });
    
    
   
});