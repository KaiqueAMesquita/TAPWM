const eventos = require('events');


const emitter = eventos.EventEmitter;

var ee = new emitter();

ee.on('dados', (fecha) => {
    console.log(fecha);
    });

//emissão de evento a cada 500 milisegundos
setInterval(function(){
    ee.emit('dados', Date.now());
},0.005)