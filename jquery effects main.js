$(document).ready(function(){
    $(".hide").click(function(){
        $("p").toggle(5000);
    });
    $(".fade").click(function (){
        $("p").fadeToggle(5000);
    });
    $(".slide").click(function(){
        $("p").slideToggle(5000)
    });
    $(".stop").click(function(){
        $("p").stop();
    })


});