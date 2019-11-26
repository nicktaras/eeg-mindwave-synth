var net = require('net');
let _data = {};
const auth = {
  appName: 'test',
  appKey: '123'
};

var client = net.connect(13854, 'localhost', function () {
  console.log('connected, now we set up the auth');
  client.write(JSON.stringify(auth));
});
client.on('data', function (data) {
  try {
    var input = data.toString();
    // The Data is malformed when it's received
    // We clean it up and then send it.
    if (input.indexOf('poorSignalLev') > -1) {
      _data = input.substring(0, input.indexOf('},"poorSignalLevel'));
      _data += "}}";
    } else {
      _data = input.substring(0, input.indexOf('{"rawEeg'));
      _data += "}}";
    }
    _data = JSON.parse(_data);
    console.log('worked', _data);
  } catch {
    console.log('did not work', data.toString());
    // console.log('could not convert data');
  }
  // console.log(_data);
});
client.on('error', function (err) {
  console.log('Error connecting to ThinkGear client. Try starting the ThinkGear Connector app.\n', err)
  process.exit(1)
});
exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    // Send EEG Data //
    socket.on('eeg-data', function (data) {
      console.log('eeg-data');
      setInterval(() => {
        if (_data && _data.eSense) {
          console.log('lets send data', _data);
          io.emit('eeg-data', _data);
        }
      }, 100);
    });
  });
}

// setInterval(() => {
//   if (_data && _data.eSense) {
//     console.log('lets send data', _data);
//   }
// }, 100);
