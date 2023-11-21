const mongoose = require ("mongoose")
mongoose.connect("mongodb://database/mydatabase")
    .then(db=>console.log("DB esta corriendo",db.connection.host))
    .catch(err=>console.err(err));