import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['button_bumper'] = (block) => {
  let current_button = block.getFieldValue(block, 'bumper_pin', Order.ATOMIC);
  let code = `
                new five.Button(
                        { 
                            pin:${current_button},
                            custom:{
                                type:'BUMPER'
                        }
                })`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['button_bump_press'] = (block, generator) => {
  let bumper = block.getFieldValue(
    block.getFieldValue('current_bumper'),
    //Blockly.Variables.NAME_TYPE,
  );
  let bumper_code = generator.statementToCode(block, 'code_button_bumper_press');
  let code = `${bumper}.on('release',function(){${bumper_code}});\n`;
  return code;
};
