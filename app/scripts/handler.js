(function($){
  
  $(function(){
    
    var landing = $.landing;

    // launch core
    $.core.init(landing);

    var landingForm = $('#landingForm'),
        textInputs = $('input[type="text"].set-input, textarea'),
        radioInputs = $('input[type="radio"]'),
        checkboxInputs = $('input[type="checkbox"]');
    
    // Submit landing
    landingForm.on('submit', function() {
      if($.core.submitForm(false)) {
        return true;
      }else {
        return false;
      }
    });
    
    // set var on text input blur event
    textInputs.on('blur', function() {
      var input = $(this).attr('id'),
          value = $(this).val();
      $.core.setInputText(input, value);
    });
    
    radioInputs.change(function() {
      $.core.setInputText(this.name, this.value);
    });
    
    checkboxInputs.click(function() {
      $.core.setInputArray(this.name, this.value);
    });
    
  });
})(jQuery);
