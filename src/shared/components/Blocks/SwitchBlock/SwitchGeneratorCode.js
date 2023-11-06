import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['switch_new_block'] = (block, generator) => {
  let pin = block.getFieldValue(block, 'switch_pin', Order.ATOMIC);
  let code = `
                    new five.Switch(
                        {
                            pin:${pin},
                            custom:{
                                type:'SWITCH'
                            }
                        }
                    )`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['switch_open'] = (block, generator) => {
  let current_switch = block.getFieldValue(
    block.getFieldValue('current_switch'),
    //Blockly.Variables.NAME_TYPE,
  );
  let switch_code = generator.statementToCode(block, 'code_switch_open');
  let code = `
                    ${current_switch}.on('open',function(){
                        ${switch_code}
                    })
                    `;
  return code;
};

javascriptGenerator.forBlock['switch_close'] = (block, generator) => {
  let current_switch = block.getFieldValue(
    block.getFieldValue('current_switch'),
    //Blockly.Variables.NAME_TYPE,
  );
  let swtch_code = generator.statementToCode(block, 'code_switch_close');
  let code = `
                        ${current_switch}.on('close',function(){
                            ${swtch_code}
                        })`;
  return code;
};
