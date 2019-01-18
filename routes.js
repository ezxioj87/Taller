const express = require('express');
const { Cliente, Coche } = require('./models');

const router = express.Router();

// ver todos los Clientes
router.get('/clientes', (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un Cliente
router.get('/clientes/:id', (req, res) => {
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un Cliente
router.delete('/clientes/:id', (req, res) => {
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// actualizar un Cliente
router.put('/clientes/:id', (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            dni:req.body.dni,
            edad:req.body.edad } },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// insertar un Cliente
router.post('/clientes', (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        dni:req.body.dni,
        edad:req.body.edad
    });
    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});


// ver todos los Coche
router.get('/coches', (req, res) => {
    Coche.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un Coche
router.get('/coches/:id', (req, res) => {
    Coche.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// eliminar un Coche
router.delete('/coches/:id', (req, res) => {
    Coche.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data)
    }); Cliente
});

// actuClientear un Coche
router.put('/coches/:id', (req, res) => {
    Coche.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                nombre: req.body.nombre,
                matricula: req.body.matricula,
                NumBastidor: req.body.NumBastidor,
                precio: req.body.precio
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

// insertar un Coche
router.post('/coches', (req, res) => {
    const coche = new Coche({
        nombre: req.body.nombre,
        matricula: req.body.matricula,
        NumBastidor: req.body.NumBastidor,
        precio: req.body.precio
    });
    coche.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

module.exports = router;

