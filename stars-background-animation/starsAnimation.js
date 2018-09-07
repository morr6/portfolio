$(document).ready(function(){

    for(i=0;i<200;i++) {
        let left = Math.random() * 2000;
        let top = Math.random() * 1000;
                
        star = '<div class=\'star\' style=\' top:'+ top +'px; left:'+ left +'px; \'  ></div>'
        
        $('#stars-background').append( star )
    }
    
    $('#stars-background, .header').mousemove(function(event) {
    
        var x = event.clientX;
        var y = event.clientY;
                            
        for(i=0;i<$('.star').length;i++) {
            if ( y - parseInt( $('.star')[i].style.top ) < 125 &&  parseInt( $('.star')[i].style.top ) - y < 125 && x - parseInt( $('.star')[i].style.left ) < 125 && parseInt( $('.star')[i].style.left ) - x < 125) {
                $('.star')[i].style.opacity = '1'				
            }
            else { 
                $('.star')[i].style.opacity = '0'
            }
        }
    })    
});			
