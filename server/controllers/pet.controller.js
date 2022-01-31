const Pet = require('../models/pet.model');

module.exports.findAllPets = (req, res) => {
    Pet.find().collation({locale:'en'}).sort({petType:1})
        .then(allPets => res.json({ results : allPets }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.createNewPet = (req, res) => {
    //req.body.petName will have info about the name from the form submit
    //pet.find({name: req.body.petName})
    Pet.create(req.body)
        .then(newPet => {
            res.json({ results : newPet })
    })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.SinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then( singlePet => res.json({ results :  singlePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.EditPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id : req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ results: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteExistingPet = (req, res) => {
    Pet.deleteOne({ _id : req.params.id })
        .then(result => res.json({ results: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
