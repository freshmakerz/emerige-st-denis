/*
* Define landing
*/

$.landing = {
  env: null,
  devUrl: 'http://emerige-massy-freshmakerz-1.c9.io',
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
      infiniteLoop: true
    }
  }
};