$(document).ready(function(){
    $('.welcome-content').css({ 'marginLeft':'15%','opacity':'1' });
    
    $('.mail-icon').click(function(){
        $('html, body').animate({ 
            scrollTop: $('.contact').offset().top - 100
        }, 700)
    });
});			
