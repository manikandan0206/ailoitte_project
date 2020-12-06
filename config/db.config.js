const mongoose = require('mongoose');

const URI = "mongodb+srv://manikandan:mani9841381469@cluster0.f28fz.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () =>{
    await mongoose.connect(URI, { useUnifiedTopology: true }, { useNewUrlParser: true });
    console.log('Database has been connected..')
}

module.exports = connectDB;