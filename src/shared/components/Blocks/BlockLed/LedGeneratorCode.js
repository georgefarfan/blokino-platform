import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['led'] = function (block, generator) {
  let pin = generator.valueToCode(block, 'led_pin', Order.ATOMIC);
  let code = `new five.Led({pin:${pin},custom:{type:'LED',blink:0}})`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['blink'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led'));
  let time = 0;
  let blink_period = block.getFieldValue('blink_period');
  let blink_time = block.getFieldValue('time');
  switch (blink_period) {
    case 'miliseconds':
      time = blink_time * 100;
      break;
    case 'seconds':
      time = blink_time * 1000;
      break;
    case 'minutes':
      time = blink_time * 60000;
      break;
    default:
      // nothing
      break;
  }
  let code = `${led}.blink(${time});
                        ${led}.custom.blink=${time};`;

  return code;
};

javascriptGenerator['turn_off_led'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led_off'));
  let code = `${led}.stop().off();`;
  return code;
};

javascriptGenerator['turn_on_led'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led'));
  let code = `${led}.on();`;
  return code;
};

javascriptGenerator['stop_led'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led_stop'));
  let code = `${led}.stop();`;
  return code;
};

// Definir que se necesita un puerto PWA
javascriptGenerator['brightness_led'] = (block, generator) => {
  let grade = block.getFieldValue('grado');
  let led = generator.getVariableName(block.getFieldValue('current_led'));
  let code = `${led}.brightness(${grade});`;
  return code;
};

javascriptGenerator['led_pwa_fade_out'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led'));

  let code = `${led}.fadeOut();`;
  return code;
};

javascriptGenerator['led_pwa_fade_in'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led'));

  let code = `${led}.fadeIn();`;
  return code;
};
javascriptGenerator['led_pwa_pulse'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led'));

  let code = `${led}.pulse();`;
  return code;
};

javascriptGenerator['led_pwa_pulse_time'] = (block, generator) => {
  let led = generator.getVariableName(block.getFieldValue('current_led'));
  let time_value = generator.valueToCode(block, 'current_time', Order.ATOMIC);
  let time_type = block.getFieldValue('current_time');
  let time = 0;
  switch (time_type) {
    case 'miliseconds':
      time = time_value * 100;
      break;
    case 'seconds':
      time = time_value * 1000;
      break;
    case 'minutes':
      time = time_value * 60000;
      break;
    default:
      // nothing
      break;
  }
  let code = `${led}.pulse(
                                {easing: 'linear',
                                duration:${time},
                                cuePoints:[0, 0.2, 0.4, 0.6, 0.8, 1], 
                                keyFrames: [0, 10, 0, 50, 0, 255] 
                            });`;
  return code;
};
