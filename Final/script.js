$(document).ready(function(){
    $(".logo").click(function(){
        $(".navlinks").slideToggle();
    });

    $(".aa").click(function(){
        $(".a-p").toggle();
    });
        
    $(".bb").click(function(){
        $(".b-p").toggle();
    });
        
    $(".cc").click(function(){
        $(".c-p").toggle();
    });

    $(".dd").click(function(){
        $(".d-p").toggle();
    }); 

    $(".ee").click(function(){
        $(".e-p").toggle();
    });

    $(".donatebutton").on('click', function () {
        alert("You're PAWSOME!");
    });
});