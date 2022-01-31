const PetController = require('../controllers/pet.controller');

module.exports = (app) => {

    app.get('/api/pets', PetController.findAllPets)

    app.post('/api/pets/create', PetController.createNewPet)

    app.get('/api/pets/:id', PetController.SinglePet)

    app.put('/api/pets/update/:id', PetController.EditPet)

    app.delete('/api/pets/delete/:id', PetController.deleteExistingPet)
}