var net = require('net');
var { objectMaker } = require('./util');
let _data = {};
const auth = {
  appName: 'eeg-synthesizer',
  appKey: '435F3G4T5R5H4632'
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
    _data = objectMaker(input);
    console.log('worked', _data);
  } catch {
    // no data found.
  }
});
client.on('error', function (err) {
  console.log('Error connecting to ThinkGear client. Try starting the ThinkGear Connector app.\n', err)
  process.exit(1)
});
exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    setInterval(() => {
      io.emit('eeg-data', _data);
    }, 1000);
  });
}
