var app = {
  state: {
    power: 0,
    waveform: 'square',
    inputWaveForm: 'delta',
    baseWaveFrequency: 200,
    secondaryWaveFrequency: 200.5,
  },
  soundModule: {
    ac: null,
    gainNode: null,
    filterNode: null,
    osc: null,
    osc2: null,
  },
  display: function () {
    document.getElementById('wave-mode').innerHTML = this.state.inputWaveForm.toUpperCase() + " ";
    document.getElementById('wave-form').innerHTML = this.state.waveform.toUpperCase() + " ";
  },
  power: function (state) {
    if (state === this.state.power) return;
    this.state.power = state;
    if (state === 1) {
      this.ac = new AudioContext();
      this.gainNode = this.ac.createGain();
      this.filterNode = this.ac.createBiquadFilter();
      this.filterNode.connect(this.gainNode);
      this.filterNode.type = "lowpass";
      this.osc = this.ac.createOscillator();
      this.osc2 = this.ac.createOscillator();
      this.gainNode.connect(this.ac.destination);
      this.osc.type = this.state.waveform;
      this.osc2.type = this.state.waveform;
      this.osc.detune.value = 0;
      this.osc2.detune.value = 0;
      this.osc.connect(this.filterNode);
      this.osc2.connect(this.filterNode);
      this.gainNode.gain.value = 1;
      this.osc.frequency.value = this.state.baseWaveFrequency;
      this.osc2.frequency.value = this.state.secondaryWaveFrequency;
      this.osc.start();
      this.osc2.start();
    } else {
      // console.log('turn off', state);
      this.osc.stop();
      this.osc2.stop();
      this.osc.disconnect();
      this.osc2.disconnect();
    }
    this.display()
  },
  adjustBaseInput: function (val) {
    console.log(val);
    // this.state.baseWaveFrequency = 100;
    // this.adjustSound(this.)
    // this.osc.frequency.value = this.state.baseWaveFrequency;
    this.osc2.frequency.value = val / 1000;// this.state.secondaryWaveFrequency;
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
