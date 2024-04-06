const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    college: String,
    year: String,
    department: String,
    cgpa: Number,
});




const FreherSelectionSchema = mongoose.model('FreherSelectionSchema', schema);

module.exports = FreherSelectionSchema;
