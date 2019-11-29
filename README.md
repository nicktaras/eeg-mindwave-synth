# brain-to-sound

Converts brain waves to sound

## Summary

This is a small project to look at how the brain wave data received from
the Neurosky Mindwave 2 headset sounds like, using the Web Audio Context API.

You can listen to the sound your brain is making and which type of brain frequency you wish to listen to; Gamma, Delta, Theta and more.

![alt text](https://github.com/nicktaras/brain-to-sound/blob/master/demo.png?raw=true)


## Usage

run, `yarn` to gather dependencies.
run, `node index.js` to run the application
open `localhost:3000` in your browser

## Caveat to using this lib

At the moment the Application does not authorise a connection with Mind Wave.
To get around this, you can open an official application in the background,
then run this application.

## What does this app do

The application receives brain wave data in the form of Delta, Theta, Alpha, Beta, Gamma frequencies then plays in the same frequency in; either sine, square, triangle or sawtooth waveform.

## Frequencies

Delta (0 to 4 Hz):

Delta brainwaves are slow, loud brainwaves (low frequency and deeply penetrating, like a drum beat). They are generated in deepest meditation and dreamless sleep. Delta waves suspend external awareness and are the source of empathy.

Theta (4 to 7.5 Hz):

Theta brainwaves occur most often in sleep but are also dominant in deep meditation. Theta is our gateway to learning, memory, and intuition. ... In theta we are in a dream; vivid imagery, intuition and information beyond our normal conscious awareness.

Alpha: (7.5 to 12 Hz):

Alpha brainwaves are dominant during quietly flowing thoughts, and in some meditative states. Alpha is 'the power of now', being here, in the present. Alpha is the resting state for the brain. Alpha waves aid overall mental coordination, calmness, alertness, mind/body integration and learning.

Beta (12-30 Hz):

Beta waves (12-30 Hz) typically dominate our normal waking states of consciousness and occur when attention is directed towards cognitive and other tasks. Beta is a 'fast' wave activity that is present when we are alert, attentive, focused, and engaged in problem solving or decision making.

Gamma: (30+ Hz):

Gamma brainwaves are the fastest of brain waves (high frequency, like a flute), and relate to simultaneous processing of information from different brain areas. ... The most subtle of the brainwave frequencies, the mind has to be quiet to access gamma.

## Developer notes

This application uses Websocket.io, HTML, CSS, JS, Express.js, Web Audio Context API.

The data is received from a buffer on `port 13854`, which is deserialised a string which is in the format of JSON.

The JSON is typically malformed, where there is an effort to collect the data from the string and convert it into a readable Javascript object - ready for the app to use.

Please share any of the work you do with this tool. I'd be really interested to see what can be done, converting brain waves into musical instruments, medical tools and more.
