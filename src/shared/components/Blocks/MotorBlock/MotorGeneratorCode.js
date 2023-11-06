import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['motor_new'] = (block, generator) => {
  let pin = generator.valueToCode(block, 'pin', Order.ATOMIC);
  let code = `
                    new five.Motor(
                        {
                            pin:${pin},
                            custom:{
                                type:'MOTORS',
                                code:''
                            }
                        }
                    )`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['motor_spin'] = (block, generator) => {
  let motor = block.getFieldValue(
    block.getFieldValue('current_motor'),
    // Blockly.Variables.NAME_TYPE,
  );
  let velocity = block.getFieldValue('velocity');
  let code = `${motor}.start(${velocity})`;
  return code;
};
javascriptGenerator.forBlock['motor_spin_code'] = (block, generator) => {
  let motor = block.getFieldValue(
    block.getFieldValue('current_motor'),
    // Blockly.Variables.NAME_TYPE,
  );
  let motor_code = generator.statementToCode(block, 'code_spin_motor');
  let code = `${motor}.on('start',function(){${motor_code}})`;
  return code;
};
javascriptGenerator.forBlock['motor_stop'] = (block, generator) => {
  let motor = block.getFieldValue(
    block.getFieldValue('current_motor'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `${motor}.stop()`;
  return code;
};
javascriptGenerator.forBlock['motor_stop_code'] = (block, generator) => {
  let motor = block.getFieldValue(
    block.getFieldValue('current_motor'),
    // Blockly.Variables.NAME_TYPE,
  );
  let motor_code = generator.statementToCode(block, 'code_stop');
  let code = `${motor}.on('stop',function(){${motor_code}})`;

  return code;
};
javascriptGenerator.forBlock['motor_spin_verify'] = (block, generator) => {
  let motor = block.getFieldValue(
    block.getFieldValue('current_motor'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `${motor}.isOn`;
  return [code, Order.NONE];
};
