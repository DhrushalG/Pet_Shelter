const mongoose = require('mongoose'); // import mongoose
const db_name = 'DBNAME';

mongoose.connect(``, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
