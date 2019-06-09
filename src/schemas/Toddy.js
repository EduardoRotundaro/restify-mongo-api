const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToddySchema = new Schema(
    {
        lote: { type: String, default: null },
        conteudo: { type: String, default: null },
        validade: { type: String, default: null } 
    }
)

module.exports = mongoose.model('toddy', ToddySchema);
