const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => {
    console.log('durante');
})

console.log("antes")

emitter.emit('start');

console.log("depois")
