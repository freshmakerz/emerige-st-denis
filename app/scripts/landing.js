/*
* Define landing
*/

$.landing = {
  env: null,
  devUrl: 'http://emerige-saint-denis-freshmakerz.c9.io',
  submitType: 'AJAX',
  submitUrl: {
    DEV: '../app/php/handler.php',
    PROD: '../php/handler.php'
  },
  origineTag: 'utm_source',
  origine: null,
  trackFormSuccess: true,
  submitUrlType: 'POST',
  callback: 'popup',
  redirectUrl: '/confirmation',
  fields: {
    souhait: {
      element: 'input[name="souhait"]',
      name: 'Souhait',
      value: 'brochure',
      defaultValue: 'brochure',
      type: 'radio',
      validations: [
        'required',
      ]
    },
    civilite: {
      element: 'input[name="civilite"]',
      name: 'Civilité',
      value: 'Mme',
      defaultValue: 'Mme',
      type: 'radio',
      validations: [
        'required',
      ]
    },
    nom: {
      element: '#nom',
      name: 'Nom',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        'required',
        'regex|alpha',
        'max|100'
      ]
    },
    prenom: {
      element: '#prenom',
      name: 'Prénom',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        'required',
        'regex|alpha',
        'max|50'
      ]
    },
    email: {
      element: '#email',
      name: 'Email',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        'required',
        'regex|mail',
        'max|250'
      ]
    },
    telephone: {
      element: '#telephone',
      name: 'Téléphone',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        'required',
        'regex|tel',
        'max|25'
      ]
    },
    adresse: {
      element: '#adresse',
      name: 'Adresse',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        //'required',
        //'regex|alphaNum',
        //'max|250'
      ]
    },
    cp: {
      element: '#cp',
      name: 'Code postal',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        'required',
        'regex|cp'
      ]
    },
    ville: {
      element: '#ville',
      name: 'Ville',
      value: null,
      defaultValue: null,
      type: 'text',
      validations: [
        'required',
        'regex|alpha'
      ]
    },
    optin: {
      element: 'input[name="optin"]',
      name: 'Optin',
      value: null,
      defaultValue: '0',
      type: 'radio',
      validations: [
        'required',
      ]
    },
    'recherche[]': {
      element: 'input[name="recherche[]"]',
      name: 'Recherche',
      value: [],
      defaultValue: null,
      type: 'checkbox',
      validations: [
      
      ]
    },
    projet: {
      element: 'input[name="projet"]',
      name: 'Projet',
      value: 'inconnu',
      defaultValue: 'inconnu',
      type: 'radio',
      validations: [

      ]
    }
  },
  errors: {
    displayMsg: true,
    borderColor: true,
    displayTootltip: true
  },
  plugins: {
    icheck: {
      checkboxClass: 'icheckbox_square-pink',
      radioClass: 'iradio_square-pink',
    },
    placeholder: {},
    bxslider: {
      pager: false,
      auto: true,
      infiniteLoop: true,
      autoStart: true,
      autoControls: true
    }
  }
};