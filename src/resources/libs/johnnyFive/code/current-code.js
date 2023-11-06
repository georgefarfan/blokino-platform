setTimeout(() => {
  var five = require('johnny-five');
  var board = new five.Board({
    port: '/dev/ttyACM0',
    repl: false,
    debug: false,
  });

  board.on('ready', function () {
    var led = new five.Led(8);
    led.blink(500);
  });
}, 300);
