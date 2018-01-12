$(document).ready(function(){

    $("#profile.profile .inputs .min_input .input").keyup(function(){
      var parents = $(this).parents(".min_input").find(this);
      var result  = parents;
      var length  = $(this).length;

      if(parents.val() == false){
        parents.addClass("empty");

      }

   else {
        parents.removeClass("empty");
    }
})

  $('form').submit(function() {

       var result = true;
       $("input[type='text']" ,this).each(function() {
           if($(this).val().trim() == "") {
               result = false;
               console.log(this);
               $(this).css({
                 'background' : 'blue',
               })
           }
           else {
             $(this).css({
               'background' : 'none',
             })
           }
       })
       return result;
  });




});
