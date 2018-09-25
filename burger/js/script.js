jQuery(document).ready(function(){
    
    

    
    
    
    $('#burger input').click(function(){
        var price = 0;
        var burger = $(this).val();
        
        if( burger == 'maxbugrer') {
            $('#res .img .burger img').remove();
          $('#res .img .burger').prepend('<img src="images/burgerBase.png">'); 
           $('#price p').remove();
            price = 100;
           $('#price').prepend('<p>'+price+'</p>'); 
            
        }
        else if(burger == 'minbugrer') {
            $('#res .img .burger img').remove();
           $('#res .img .burger').prepend('<img src="images/cheese.png">');
            $('#price p').remove();
            price = 50;
           $('#price').prepend('<p>'+price+'</p>');
        }
      
   });
    
    $('#additive input').click(function(){
        var price = 0;
        var additive = $(this).val();
        
        if(additive == 'cheese') {
          $('#res .img .burger img').remove();
          $('#res .img .burger').prepend('<img src="images/cheese.png">');
          $('#price p').remove();
         if( $('#burger input:checked').val() == 'maxbugrer') {
            $('#price p').remove();
            price = 120;
            $('#price').prepend('<p>'+price+'</p>');
         }
            else if($('#burger input:checked').val() == 'minbugrer') {
              $('#price p').remove();  
              price = 70;
              $('#price').prepend('<p>'+price+'</p>');
            }
            
        }
        else if(additive == 'salad') {
          $('#res .img .burger img').remove();
          $('#res .img .burger').prepend('<img src="images/salad.png">');
          $('#price p').remove();
         if( $('#burger input:checked').val() == 'maxbugrer') {
            $('#price p').remove();
            price = 110;
            $('#price').prepend('<p>'+price+'</p>');
         }
            else if($('#burger input:checked').val() == 'minbugrer') {
              $('#price p').remove();  
              price = 60;
              $('#price').prepend('<p>'+price+'</p>');
            }
            
        }
        
        else if(additive == 'potato') {
          $('#res .img .burger img').remove();
          $('#res .img .burger').prepend('<img src="images/potato.png">');
          $('#price p').remove();
         if( $('#burger input:checked').val() == 'maxbugrer') {
            $('#price p').remove();
            price = 105;
            $('#price').prepend('<p>'+price+'</p>');
         }
            else if($('#burger input:checked').val() == 'minbugrer') {
              $('#price p').remove();  
              price = 55;
              $('#price').prepend('<p>'+price+'</p>');
            }
            
        }
        
        
        
        $('#mayonnaise').one('click', function(){
           $('#res  .mayonnaise').prepend('<img src="images/mayo.png">');
             
             var pricemayo = 10;
             $('#mayo').text(pricemayo);
            
            
        });
        $('#condiments').one('click', function(){
           $('#res  .condiments').append('<img src="images/spice.png">');
             
             var pricspice = 10;
             $('#spice').text(pricspice);
            
            
        });
        
       
    });
    
    
    
    
    
    
    
    
    
    
}); // ready