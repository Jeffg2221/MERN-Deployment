const Pets = require('../models/pet.model');

// const Products = require('../models/pirates.models');
// // ----FULL CRUD ----
module.exports = {
    // // Read All
    findAll: (req, res) => {
        Pets.find().sort({type:"asc"})
            .then(allPets => {
                res.json(allPets)
            })

            .catch(err => res.json(err));
    },
    // Read One
    findOne: (req, res) => {
        //http://localhost:8000/api/pets/3
        Pets.findById(req.params.id)
            .then(oneMovie => res.json(oneMovie))
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        console.log(req.body)
        Pets.create(req.body)
            .then(newPet => {
                console.log("Server Success")
                res.json(newPet)
            })
            .catch(err => {
                console.log("SERVER ERROR", err)
                res.status(400).json(err)
            })
    },

    // Update
    Update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        Pets.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedPet => res.json(updatedPet))
            .catch(err => {
                console.log("SERVER ERROR", err)
                res.status(400).json(err)
            })
},

    //  // Delete
    delete : (req, res) => {
        Pets.findByIdAndDelete( req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }





}













