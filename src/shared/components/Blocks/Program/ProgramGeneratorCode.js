import { Order, javascriptGenerator } from 'blockly/javascript';

javascriptGenerator.forBlock['program'] = (block, generator) => {
  let statements_code_block = generator.statementToCode(block, 'code_block');
  return statements_code_block;
};

javascriptGenerator.forBlock['block_code'] = (block, generator) => {
  let statements_code_block = generator.statementToCode(block, 'code_block');
  return statements_code_block;
};

javascriptGenerator.forBlock['block_variables'] = (block, generator) => {
  let statements_variables_code = generator.statementToCode(block, 'variables_code');
  return statements_variables_code;
};

javascriptGenerator.forBlock['block_message'] = (block) => {
  let message = block.getFieldValue('message');
  let type = block.getFieldValue('dropdown');
  let code = `process.send(
            JSON.stringify(
                {
                    type:'blokino-message',
                    message_type: '${type}',
                    message:'${message}'
            }));\n`;
  return code;
};

javascriptGenerator.forBlock['pins_analog'] = function (block) {
  let pin_analog = block.getFieldValue('pin_analog');
  let code = `${pin_analog}`;
  return [code, Order.NONE];
};
