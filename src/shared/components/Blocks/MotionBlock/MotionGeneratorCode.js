import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['motion_sensor_block'] = (block, generator) => {
  let pin = block.getFieldValue(block, 'sensor_mov_pin', Order.ATOMIC);
  let code = `
                new five.Motion(
                    {
                        pin:${pin},
                        custom:{
                            type:'SENSOR-MOTION'
                        }
                    })`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['motion_sensor_fire'] = (block, generator) => {
  let motion = block.getFieldValue(
    block.getFieldValue('current_motion'),
    // Blockly.Variables.NAME_TYPE,
  );
  let motion_code = generator.statementToCode(block, 'code_motion_sensor');
  let code = `
                    ${motion}.on('motionstart',function(){
                        ${motion_code}
                    })`;
  return code;
};

javascriptGenerator.forBlock['motion_sensor_out_fire'] = (block, generator) => {
  let motion = block.getFieldValue(
    block.getFieldValue('current_motion'),
    //  Blockly.Variables.NAME_TYPE,
  );
  let motion_code = generator.statementToCode(block, 'code_motion_sensor');
  let code = `
                ${motion}.on('motionend',function(){
                    ${motion_code}
                })`;
  return code;
};
