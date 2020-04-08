$(document).ready(
  function(){
    // Add to do item on the list when the Add button is clicked
      $('.addBtn').click(
          function(){
              var toAdd = $('input[id=myInput]').val();
               $('ul').append('<li>' + toAdd + '</li>');
          });
     // Add to do item on the list when enter key is hit
     $("input[id=myInput]").keyup(function(event){
        if(event.keyCode == 13){
          $(".addBtn").click();
        }         
    });
    // Check the list as completed on click
    $(document).on('click','li', function(ev){
      $(this).toggleClass("checked")
      
    });
    // Delete the item from the list on double-click
    $(document).on('dblclick','li', function(){
      $(this).toggleClass('strike').fadeOut('slow');
    });
    // Empty the text box
    $('input').focus(function() {
      $(this).val('');
    });
    
    
  }
);

