const Pets = require('../controllers/pet.controller');


module.exports = app => {
    app.get('/api/pets', Pets.findAll);
    app.get('/api/pets/:id', Pets.findOne);
    app.post('/api/pets', Pets.create);
    app.put('/api/pets/:id', Pets.Update);
    app.delete('/api/pets/:id', Pets.delete);
    
}











