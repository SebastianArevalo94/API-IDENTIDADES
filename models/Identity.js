const mongoose = require('mongoose');
const IdentitySchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Identity', IdentitySchema, 'identitys');