$(function(){
  // Hide cross if option toggle
  $('input[name="optin"]').on('ifClicked', function() {
    $(this).parent().parent().parent().children('i.fa-times').fadeOut();
  });
});