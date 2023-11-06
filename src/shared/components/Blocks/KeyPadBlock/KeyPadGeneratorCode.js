import { javascriptGenerator, Order } from 'blockly/javascript';
const keypad = require('../resources/keypads');

javascriptGenerator.forBlock['keypad_block'] = (block, generator) => {
  let code = `
                new five.Touchpad(${keypad.config()})`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['keypad_press'] = (block, generator) => {
  let keypad = block.getFieldValue(
    block.getFieldValue('current_keypad'),
    // Blockly.Variables.NAME_TYPE,
  );
  let keypad_code = generator.statementToCode(block, 'code_keypad_press');
  let code = `['press'].forEach(function(eventType){${keypad}.on(eventType, function(event){${keypad_code}})});\n`;
  return code;
};

javascriptGenerator.forBlock['keypad_press_key'] = (block, generator) => {
  let keypad = block.getFieldValue('current_key');
  let keypad_code = generator.statementToCode(block, 'code_keypad_key');
  let code = `if('${keypad}'== event.which.toString()){${keypad_code}};\n `;
  return code;
};
