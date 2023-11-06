import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['button'] = (block, generator) => {
  let pin = block.getFieldValue(block, 'button_pin', Order.ATOMIC);
  let code = `new five.Button({pin:${pin},custom:{type:'BUTTON'}})`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['button_press'] = (block, generator) => {
  // , Blockly.Variables.NAME_TYPE
  let button = block.getFieldValue(block.getFieldValue('button'));
  let button_code = generator.statementToCode(block, 'button_press_code');
  let code = `${button}.on('press',function(){${button_code}});\n`;
  return code;
};
javascriptGenerator.forBlock['button_hold'] = (block, generator) => {
  let button = block.getFieldValue(
    block.getFieldValue('current_hold_button'),
    // Blockly.Variables.NAME_TYPE,
  );
  let button_code = generator.statementToCode(block, 'code_hold_button');
  let code = `${button}.on('hold',function(){${button_code}});\n`;
  return code;
};
javascriptGenerator.forBlock['button_up'] = (block, generator) => {
  let button = block.getFieldValue(
    block.getFieldValue('current_up_button'),
    // Blockly.Variables.NAME_TYPE,
  );
  let button_code = generator.statementToCode(block, 'code_up_button');
  let code = `${button}.on('hold',function(){
                ${button_code}
            });\n`;
  return code;
};
