const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: { 
        type: String,
        // unique: [true, 'Name must be unique'],
        required: [true, 'Name is required!'],
        minlength: [3, 'Name must be atleast 3 chars.']
    },
    petType: { 
        type: String,
        required: [true, 'Type is required!'],
        minlength: [3, 'Type must be atleast 3 chars.']
    },
    petDescription: { 
        type: String,
        required: [true, 'Description is required!'],
        minlength: [3, 'Description must be atleast 3 chars.']
    },
    skill1: { 
        type: String,
    },
    skill2: { 
        type: String,
    },
    skill3: { 
        type: String,
    }

});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;