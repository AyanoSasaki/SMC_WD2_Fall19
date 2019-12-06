$(document).ready(function(){
    $(".logo").click(function(){
        $(".navlinks").slideToggle();
    });

    $(".a").click(function(){
        $(".a-p").toggle();
    });
        
    $(".b").click(function(){
            $(".b-p").toggle();
    });
        
    $(".c").click(function(){
            $(".c-p").toggle();
    });
    
    $(".donatebutton").on('click', function () {
        alert("You're PAWSOME!");
    });

    // // // alert("You're PAWSOME!")
});