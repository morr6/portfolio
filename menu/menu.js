$(document).ready(function(){
    $('#menu-home').click(function(){
        $('html, body').animate({ scrollTop: 0 })
    });
    $('#menu-about-me').click(function(){
        $('html, body').animate({ 
            scrollTop:  $('.about-me').offset().top - 100
        })
    });
    $('#menu-technologies').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.technologies').offset().top - 100
        })
    });
    $('#menu-projects').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.projects').offset().top - 100
        })
    });
    $('#menu-contact').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.contact').offset().top - 100
        })
    });
});			
