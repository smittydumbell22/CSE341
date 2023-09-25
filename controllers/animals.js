const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Animals']
    const result = await mongodb.getDatabase().db().collection('animals').find();
    result.toArray().then((animals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(animals);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Animals']
    const animalId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('animals').find({_id: animalId});
    result.toArray().then((animals) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(animals[0]);
    });
};

const createAnimal = async (req, res) => {
    //#swagger.tags=['Animals']
    // const animalId = new ObjectId(req.params.id);
    const animal = {
    species: req.body.species,
    name: req.body.name,
    idNumber: req.body.idNumber,
    enclosure: req.body.age,
    age: req.body.birthday
  };
  const response= await mongodb.getDatabase().db().collection('animals').insertOne(animal);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'some error occured while updating the animal.');
  }
};

const updateAnimal = async (req, res) => {
    //#swagger.tags=['Animals']
    const animalId = new ObjectId(req.params.id);
const animal = {
    animalname: req.body.animalname,
    email: req.body.email,
    name: req.body.name,
    ipaddress: req.body.ipaddress
}};
const deleteAnimal = async (req, res) => {
    //#swagger.tags=['Animals']
    const animalID = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('animals').deleteOne({ _id: animalId });
    if (response.deletedCount > 0) {
            res.status(204).send();
    } else {
          res.status(500).json(response.error || 'Some error occured while deleting the animal.');
    }    
};

module.exports = {
    getAll,
    getSingle,
    createAnimal,
    updateAnimal,
    deleteAnimal
};