$(document).ready(function(){
    $('.welcome-content').css({ 'marginLeft':'15%','opacity':'1' })

    $('#menu-home').click(function(){
        $('html, body').animate({ scrollTop: 0 })
    });
    $('#menu-about-me').click(function(){
        $('html, body').animate({ 
            scrollTop:  $('.about-me').offset().top
        })
    });
    $('#menu-skills').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.skills').offset().top
        })
    });
    $('#menu-projects').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.projects').offset().top
        })
    });
    $('#menu-contact').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.contact').offset().top
        })
    });
});			
