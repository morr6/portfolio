$(document).ready(function(){

    for(i=0;i<400;i++) {
        let left = Math.random() * 2000;
        let top = Math.random() * 1000;
                
        star = '<div class=\'star\' style=\' top:'+ top +'px; left:'+ left +'px; \'  ></div>'
        
        $('#starsBackground').append( star )
    }
    
    $('body').mousemove(function(event) {
    
        var x = event.clientX;
        var y = event.clientY;
                            
        for(i=0;i<$('.star').length;i++) {
            if ( y - parseInt( $('.star')[i].style.top ) < 150 &&  parseInt( $('.star')[i].style.top ) - y < 150 && x - parseInt( $('.star')[i].style.left ) < 150 && parseInt( $('.star')[i].style.left ) - x < 150) {
                $('.star')[i].style.opacity = '1'				
            }
            else { 
                $('.star')[i].style.opacity = '0'
            }
        }
    })    
});			
