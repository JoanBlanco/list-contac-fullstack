const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  cod: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
