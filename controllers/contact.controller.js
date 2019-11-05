const contactView = require('../views/contact.view')
const { check, validationResult } = require('express-validator');

// GET
const renderContact = (req, res) => contactView.getView(req.session);

const validateContactForm = ([
  check('email', 'El email es requerido.').not().isEmpty(), // Chequea que campo no esté vacío
  check('email', 'El email no es válido.').isEmail(), // Chequea que lo ingresado por el usuario corresponda a una dirección email
  check('subject', 'El asunto es requerido.').not().isEmpty(), // Chequea que el campo no esté vacío
  check('message', 'El mensaje es requerido.').not().isEmpty(), // Chequea que el campo no esté vacío
  check('numberTel', 'El numero es requerido').not().isEmpty(), // Chequea que el campo no esté vacío
  check('numberTel', 'El numero no es valido').isNumeric() // chequea que lo ingresado por el usuario corresponda a una cadena de numeros
]);

// POST
const sendMessageContact = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.session.errors = errors.array();
  } else {
    req.session.messageSent = true;
  }
  res.redirect('/contacto');
}

module.exports = {
  renderContact,
  validateContactForm,
  sendMessageContact
}