import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['microphone'] = function (block, generator) {
  let pin_analog = block.getFieldValue('pin_analog');
  let code = `
                new five.Sensor({
                    pin: "${pin_analog}",
                    freq: 750
                })
            `;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['microphone_detect'] = function (block, generator) {
  let microphone = block.getFieldValue(
    block.getFieldValue('microphone'),
    //  Blockly.Variables.NAME_TYPE,
  );
  let statements_active = generator.statementToCode(block, 'active');
  let statements_no_active = generator.statementToCode(block, 'no_active');

  let code = `
            ${microphone}.on("data", function() {
                if(this.value > 9){
                    ${statements_active}
                }else{
                    ${statements_no_active}
                }
            });\n`;
  return code;
};
