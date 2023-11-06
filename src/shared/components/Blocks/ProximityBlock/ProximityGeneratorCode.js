import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['proximity_block'] = (block, generator) => {
  let pin = generator.valueToCode(block, 'sensor_prox_pin', Order.ATOMIC);
  let code = `
                    new five.Proximity(
                        {controller:'GP2Y0A21YK',
                        pin:${pin},
                        freq:1000,
                        custom:{
                            type:'SENSOR-PROXIMITY',
                            pin: ${pin}
                        }
                    })
            `;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['proximity_block_with_freq'] = (block, generator) => {
  let pin = generator.valueToCode(block, 'sensor_prox_pin', Order.ATOMIC);
  let time = 0;
  let dropdown_time_period = block.getFieldValue('current_time');
  let number_time = generator.valueToCode(block, 'frecuency', Order.ATOMIC);
  switch (dropdown_time_period) {
    case 'miliseconds':
      time = number_time * 100;
      break;
    case 'seconds':
      time = number_time * 1000;
      break;
    case 'minutes':
      time = number_time * 60000;
      break;

    default:
      break;
  }

  let code = `new five.Proximity({
                controller:'GP2Y0A21YK',
                pin:${pin},
                freq:${time}
            })`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['proximity_capture_distances'] = (block, generator) => {
  let sensor_proximity = block.getFieldValue(
    block.getFieldValue('current_sensor_proximity'),
    // Blockly.Variables.NAME_TYPE,
  );
  let proximity_code = generator.statementToCode(block, 'code_capture_distances');
  let code =
    `${sensor_proximity}.on('data',function(){ 
                    let cm = Math.round(this.cm);` +
    `${proximity_code}
            })`;
  return code;
};
javascriptGenerator.forBlock['proximity_capture_very_close'] = (block, generator) => {
  let proximity_code = generator.statementToCode(block, 'code_capture_very_close');
  let code = `if(cm > 0 && cm < 12){
                ${proximity_code}
            }`;
  return code;
};

javascriptGenerator.forBlock['proximity_capture_near'] = (block, generator) => {
  let proximity_code = generator.statementToCode(block, 'code_capture_near');
  let code = `if(cm > 12 && cm < 20){
                ${proximity_code}
            }`;
  return code;
};
javascriptGenerator.forBlock['proximity_capture_far'] = (block, generator) => {
  let proximity_code = generator.statementToCode(block, 'code_capture_far');
  let code = `if(cm > 20 && cm < 35){
                ${proximity_code}
            }`;
  return code;
};
javascriptGenerator.forBlock['proximity_capture_far_away'] = (block, generator) => {
  let proximity_code = generator.statementToCode(block, 'code_capture_far_away');
  let code = `if(cm > 35 && cm < 70){
                ${proximity_code}
            }`;
  return code;
};
