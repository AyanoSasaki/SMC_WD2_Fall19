$(document).ready(function(){
    $('input, label').focus(function(){
        // console.log( $(this) .attr('id') );
        if( $(this).val() == "" ){
            $('main section.notification-area').append('<p class="notification">Please fill out ' + $(this) .attr('id') + ' out</p>');
        };
    });

    $('input, label').blur(function(){
        $('.notification').remove();
    });

    $('select#FX').change(function(){
        var currentSelection = $(this).val();

        if(currentSelection === 'show'){
            $('.box').show(1000);
        }
        if(currentSelection === 'hide'){
            $('.box').hide(1000);
        }
        if(currentSelection === 'fadeIn'){
            $('.box').fadeIn(1000);
        }
        if(currentSelection === 'fadeout'){
            $('.box').fadeout(1000);
        }
        if(currentSelection === 'slideDown'){
            $('.box').slideDown(1000);
        }
        if(currentSelection === 'slideUp'){
            $('.box').slideUp(1000);
        }
    })
});