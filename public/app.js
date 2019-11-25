
var app = {
  power: function (state) {
    if (state === 1) {
      console.log('turn on', state);
    } else {
      console.log('turn off', state);
    }
  },
  adjustSound: function (state) {
    var map = ['delta', 'theta', 'alpha', 'beta', 'gamma'];
    // var values = [0.5, 4, 8, 12, 30];
    console.log('Value', map[state]);
  },
  adjustWaveForm: function (state) {
    var map = ['sine', 'square', 'triangle', 'sawtooth'];
    console.log('Value', map[state]);
  }
};
