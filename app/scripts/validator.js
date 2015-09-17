var landing = $.landing;

$.validator = {
  
  // {Inject field in error} (@field, @err)
  parseRuleMsg: function(field, err, param){
    return err.replace('|', field).replace('$', param).replace('#', $.rules.clues[param]);
  },
  
  // {Parse rule param} (@str)
  parseRuleParams: function(str){
    var rule = {
      name: null,
      param: null
    },
    explode = str.split('|');
    rule.name = explode[0];
    if(explode.length > 1){
      rule.param = explode[1];
    }
    return rule;
  },
  
  // {Validate a field} (@field)
  validateField: function(field){
    var isValidField = true;
    $.each(field.validations, function(k,v) {
      var rule = $.validator.parseRuleParams(v);
      if($.rules[rule.name](field.value, rule.param) !== true){
        isValidField = false;
        $.validator.throwErr(field.element, field.name, $.rules.rules[rule.name].msg, rule.param, field.type);
        return false;
      }else{
        $.validator.hideErr(field.element, field.type);
      }
    });
    return isValidField;
  },
  
  // {Display field error} (@el, @field, @err)
  throwErr: function(el, field, err, param, type){
    if(landing.errors.borderColor === true){
      $(el).parent().addClass('has-error');
    }
    if(landing.errors.displayMsg === true){
      if(type === 'radio'){
        $(el).parent().next().text(this.parseRuleMsg(field, err, param)).show();
      }else if(type === 'checkbox'){
        //$(el).parent().parent().next().text(this.parseRuleMsg(field, err, param)).show();
      }else{
        $(el).next().text(this.parseRuleMsg(field, err, param)).show();
      }
    }
    /* BUG
    ******
    if(landing.errors.displayTootltip === true){
      $(el).next().tooltip({title: this.parseRuleMsg(field, err, param)}).show();
    }
    *****/
  },
  
  // Display field error (@el, @err)
  hideErr: function(el, type){
    if(landing.errors.borderColor === true){
      $(el).parent().removeClass('has-error');
    }
    if(landing.errors.displayMsg === true){
      if(type === 'radio'){
        $(el).parent().next().text('').hide();
      }else if(type === 'checkbox'){
      }else{
        $(el).next().text('').hide();
      }
    }
    /* BUG
    ******
    if(landing.errors.displayTootltip === true){
      $(el).next().hide().tooltip('destroy');
    }
    *****/
  },
  
};