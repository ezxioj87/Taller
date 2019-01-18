const mongoose = require('mongoose');

const Cliente  = mongoose.model('Cliente',  { 
                                   nombre: String,
                                   dni: String,
                                   edad: Number, 
                                   apellidos: String  });

const Coche = mongoose.model('Coche', { 
                                   nombre: String,
                                   matricula: String,
                                   NumBastidor: String, 
                                   precio: Number });

module.exports =  {
    Cliente,
    Coche
};