
var app = {
  state: {
    power: 0,
    waveform: 'square',
    inputWaveForm: 'delta',
    baseWaveFrequency: 200,
    secondaryWaveFrequency: 200.5,
  },
  display: function (state) {
    document.getElementById('wave-mode').innerHTML = this.state.inputWaveForm.toUpperCase() + " ";
    document.getElementById('wave-form').innerHTML = this.state.waveform.toUpperCase() + " ";
  },
  power: function (state) {
    if (state === this.state.power) return;
    this.state.power = state;
    if (state === 1) {
      // console.log('turn on', state);
      var ac = new AudioContext();
      var gainNode = ac.createGain();
      var filterNode = ac.createBiquadFilter();
      filterNode.connect(gainNode);
      filterNode.type = "lowpass";
      osc = ac.createOscillator();
      osc2 = ac.createOscillator();
      gainNode.connect(ac.destination);
      osc.type = this.state.waveform;
      osc2.type = this.state.waveform;
      osc.detune.value = 0;
      osc2.detune.value = 0;
      osc.connect(filterNode);
      osc2.connect(filterNode);
      gainNode.gain.value = 1;
      osc.frequency.value = this.state.baseWaveFrequency;
      osc2.frequency.value = this.state.secondaryWaveFrequency;
      osc.start();
      osc2.start();
    } else {
      // console.log('turn off', state);
      osc.stop();
      osc2.stop();
      osc.disconnect();
      osc2.disconnect();
    }
    this.display()
  },
  adjustSound: function (state) {
    var map = [
      {
        type: 'delta',
        value: 0.5
      },
      {
        type: 'theta',
        value: 4
      },
      {
        type: 'alpha',
        value: 7.5
      },
      {
        type: 'beta',
        value: 12
      },
      {
        type: 'gamma',
        value: 30
      }
    ];
    this.state.secondaryWaveFrequency = this.state.baseWaveFrequency + map[state].value;
    this.state.inputWaveForm = map[state].type;
    // console.log('Value', map[state]);
    this.display();
  },
  adjustWaveForm: function (state) {
    var map = ['sine', 'square', 'triangle', 'sawtooth'];
    this.state.waveform = map[state];
    // console.log('Value', map[state]);
    this.display();
  }
};
