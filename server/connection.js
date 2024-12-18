require('dotenv').config();
var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.pm8mqj6.mongodb.net/Epitech_irc?retryWrites=true&w=majority`,
    //`mongodb+srv://sirene_desbois:Sirenemongodb@cluster0.pm8mqj6.mongodb.net/Epitech_irc?retryWrites=true&w=majority`,
    options,
    function (err) {
      console.log(err);
    }
    //console.log('Connected to mongodb');
  );
module.exports = mongoose;