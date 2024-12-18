const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    
  });
const Room = mongoose.model('Room', channelSchema);
//const Channel = mongoose.model('Channel', channelSchema);

module.exports = Room;