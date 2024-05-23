let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = require('mongodb').ObjectID;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    _id: ObjectId,
    dateDeRendu: Date,
    nom: String,
    matiere: String,
    devoir: String,
    note: Number,
    remarque: String,
    rendu: Boolean
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('assignments', AssignmentSchema);
