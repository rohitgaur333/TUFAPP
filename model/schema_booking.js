module.exports = function(db) {
        return db.model('Theater', TheaterSchema());
}

function TheaterSchema () {
        var Schema = require('mongoose').Schema;

        return new Schema({
            title: { type: String, required: true },
            description: { type: String, required: true },
            address: { type: String, required: true },
            latitude: { type: Number, required: false },
            longitude: { type: Number, required: false },
            phone: { type: String, required: false }
    });
}