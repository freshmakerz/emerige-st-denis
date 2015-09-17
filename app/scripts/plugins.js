(function($){
  
  $(function(){
    
    var landing = $.landing;

    // ICHECK
    if(landing.plugins.icheck !== undefined){
      $('input[type="radio"]')
      .parent().addClass('icheck')
      .iCheck({
        radioClass: landing.plugins.icheck.radioClass
      })
      .on('ifClicked', function() {
        $.core.setInputText(this.name, this.value);
      });
      
      $('input[type="checkbox"]')
      .parent().addClass('icheck')
      .iCheck({
        checkboxClass: landing.plugins.icheck.checkboxClass
      })
      .on('ifChecked', function() {
        $.core.addInputToArray(this.name, this.value);
      })
      .on('ifUnchecked', function() {
        $.core.removeInputFromArray(this.name, this.value);
      });
    }

    // BXSLIDER
    if(landing.plugins.bxslider !== undefined){
      $('.bxslider').bxSlider(landing.plugins.bxslider);
    }
    
    // PLACEHOLDER
    if(landing.plugins.placeholder !== undefined){
      $('input, textarea').placeholder();
    }
    
  });
})(jQuery);