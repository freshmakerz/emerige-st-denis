$.rules = {
  
  // define rules
  rules: {
    required: {
      msg: '| obligatoire'
    },
    min: {
      msg: 'Le champ | doit contenir au moins $ caractères'
    },
    max: {
      msg: 'Le champ | doit contenir maximum $ caractères'
    },
    regex: {
      msg: '#',
    },
    requiredArray: {
      msg: 'Vous devez choisir au moins une valeur'
    },
    regexTester: {
      alpha: /^[a-zA-Z- \.œàâîïéçèêëŒÀÂÎÏÉÇÈÊË\-\']+$/,
      alphaNum: /^[a-zA-Z- 0-9 \.œàâîïéçèêëŒÀÂÎÏÉÇÈÊË\-\']+$/,
      num: /^[0-9]{1,10}$/,
      str: /^[a-zA-Z- 0-9 ?,! \.œàâîïéçèêëŒÀÂÎÏÉÇÈÊË\-\']+$/,
      mail: /^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$/,
      tel: /^0[1-9]([-. ]?[0-9]{2}){4}$/,
      cp: /^[0-9]{5}$/
    }
  },
  clues: {
    alpha: 'Chiffres et caractères spéciaux interdits',
    mail: 'Email invalide',
    str: 'Seules les chaines de caractères sont autorisés',
    tel: 'Téléphone invalide',
    cp: 'Code postal invalide'
  },
  
  // [REQUIRED]
  required: function(val){
    if(val !== null && val !== ''){
      return true;
    }
  },
  
  // [MIN]
  min: function(val, param){
    if(val.length >= param){
      return true;
    }
  },
  
  // [MAX]
  max: function(val, param){
    if(val.length <= param){
      return true;
    }
  },
  
  // [REGEX]
  regex: function(val, param){
    if(this.rules.regexTester[param].exec(val)){
      return true;
    }
  },
  
  // [REQUIRED ARRAY]
  requiredArray: function(param){
    if(param.length > 0){
      return true;
    }
  }
  
};