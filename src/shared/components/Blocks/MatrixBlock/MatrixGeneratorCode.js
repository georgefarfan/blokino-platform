import { javascriptGenerator, Order } from 'blockly/javascript';

const gestures = require('../resources/gestures');

javascriptGenerator.forBlock['matrix'] = (block, generator) => {
  let pin_cs = generator.valueToCode(block, 'pin_cs', Order.ATOMIC);
  let pin_din = generator.valueToCode(block, 'pin_din', Order.ATOMIC);
  let pin_clk = generator.valueToCode(block, 'pin_clk', Order.ATOMIC);
  let code = `
              new five.Led.Matrix({
                  pins:{ 
                      data:${pin_din},
                      clock:${pin_clk},
                      cs:${pin_cs},
                      custom:{
                          type:'SCREEN-MATRIX',
                          code:''
                      }
                  }
              })`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['matrix_with_extensions'] = (block, generator) => {
  let pin_cs = generator.valueToCode(block, 'pin_cs', Order.ATOMIC);
  let pin_din = generator.valueToCode(block, 'pin_din', Order.ATOMIC);
  let pin_clk = generator.valueToCode(block, 'pin_clk', Order.ATOMIC);
  let extensions = generator.valueToCode(block, 'extensions', Order.ATOMIC);
  let code = `
              new five.Led.Matrix({
                  pins:{ 
                      data:${pin_din},
                      clock:${pin_clk},
                      cs:${pin_cs},
                      custom:{
                          type:'SCREEN-MATRIX',
                          code:''
                      }
                  },
                  devices:${extensions}
              })`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['message_screen'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('current_screen'),
    // Blockly.Variables.NAME_TYPE,
  );
  let message = generator.valueToCode(block, 'current_screen_message', Order.ATOMIC);
  let code = `
                  ${matrix}.custom.code = ${message};
                  let msg = ${message}.split('');
                  function next() { 
                      let c; 
                      if(c = msg.shift()){
                          ${matrix}.draw(c);
                          setTimeout(next, 1000) 
                      } 
                  };
                  next();`;
  return code;
};
javascriptGenerator.forBlock['print_screen'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('current_led_matrix'),
    // Blockly.Variables.NAME_TYPE,
  );
  let gesture = block.getFieldValue('options');
  let code = `${matrix}.custom.code = "${gesture}";
                          ${matrix}.on();
                          ${matrix}.draw([${gestures.figures()[gesture]}]);`;
  return code;
};
javascriptGenerator.forBlock['screen_off'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('currente_screen'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `${matrix}.off();`;
  return code;
};
javascriptGenerator.forBlock['screen_on'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('currente_screen'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `${matrix}.on();`;
  return code;
};
javascriptGenerator.forBlock['screen_clear'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('currente_screen'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `${matrix}.clear();`;
  return code;
};
javascriptGenerator.forBlock['matrix_paint'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('current_matrix'),
    // Blockly.Variables.NAME_TYPE,
  );
  let checkbox_led_1_1 = block.getFieldValue('led_1_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_2 = block.getFieldValue('led_1_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_3 = block.getFieldValue('led_1_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_4 = block.getFieldValue('led_1_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_5 = block.getFieldValue('led_1_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_6 = block.getFieldValue('led_1_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_7 = block.getFieldValue('led_1_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_8 = block.getFieldValue('led_1_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_1 = block.getFieldValue('led_2_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_2 = block.getFieldValue('led_2_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_3 = block.getFieldValue('led_2_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_4 = block.getFieldValue('led_2_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_5 = block.getFieldValue('led_2_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_6 = block.getFieldValue('led_2_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_7 = block.getFieldValue('led_2_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_8 = block.getFieldValue('led_2_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_1 = block.getFieldValue('led_3_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_2 = block.getFieldValue('led_3_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_3 = block.getFieldValue('led_3_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_4 = block.getFieldValue('led_3_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_5 = block.getFieldValue('led_3_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_6 = block.getFieldValue('led_3_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_7 = block.getFieldValue('led_3_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_8 = block.getFieldValue('led_3_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_1 = block.getFieldValue('led_4_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_2 = block.getFieldValue('led_4_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_3 = block.getFieldValue('led_4_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_4 = block.getFieldValue('led_4_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_5 = block.getFieldValue('led_4_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_6 = block.getFieldValue('led_4_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_7 = block.getFieldValue('led_4_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_8 = block.getFieldValue('led_4_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_1 = block.getFieldValue('led_5_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_2 = block.getFieldValue('led_5_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_3 = block.getFieldValue('led_5_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_4 = block.getFieldValue('led_5_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_5 = block.getFieldValue('led_5_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_6 = block.getFieldValue('led_5_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_7 = block.getFieldValue('led_5_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_8 = block.getFieldValue('led_5_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_1 = block.getFieldValue('led_6_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_2 = block.getFieldValue('led_6_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_3 = block.getFieldValue('led_6_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_4 = block.getFieldValue('led_6_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_5 = block.getFieldValue('led_6_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_6 = block.getFieldValue('led_6_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_7 = block.getFieldValue('led_6_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_8 = block.getFieldValue('led_6_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_1 = block.getFieldValue('led_7_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_2 = block.getFieldValue('led_7_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_3 = block.getFieldValue('led_7_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_4 = block.getFieldValue('led_7_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_5 = block.getFieldValue('led_7_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_6 = block.getFieldValue('led_7_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_7 = block.getFieldValue('led_7_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_8 = block.getFieldValue('led_7_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_1 = block.getFieldValue('led_8_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_2 = block.getFieldValue('led_8_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_3 = block.getFieldValue('led_8_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_4 = block.getFieldValue('led_8_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_5 = block.getFieldValue('led_8_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_6 = block.getFieldValue('led_8_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_7 = block.getFieldValue('led_8_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_8 = block.getFieldValue('led_8_8') === 'TRUE' ? '1' : '0';

  let code = `
                  ${matrix}.custom.code =  [${[
    `"${
      checkbox_led_1_1 +
      checkbox_led_1_2 +
      checkbox_led_1_3 +
      checkbox_led_1_4 +
      checkbox_led_1_5 +
      checkbox_led_1_6 +
      checkbox_led_1_7 +
      checkbox_led_1_8
    }"`,
    `"${
      checkbox_led_2_1 +
      checkbox_led_2_2 +
      checkbox_led_2_3 +
      checkbox_led_2_4 +
      checkbox_led_2_5 +
      checkbox_led_2_6 +
      checkbox_led_2_7 +
      checkbox_led_2_8
    }"`,
    `"${
      checkbox_led_3_1 +
      checkbox_led_3_2 +
      checkbox_led_3_3 +
      checkbox_led_3_4 +
      checkbox_led_3_5 +
      checkbox_led_3_6 +
      checkbox_led_3_7 +
      checkbox_led_3_8
    }"`,
    `"${
      checkbox_led_4_1 +
      checkbox_led_4_2 +
      checkbox_led_4_3 +
      checkbox_led_4_4 +
      checkbox_led_4_5 +
      checkbox_led_4_6 +
      checkbox_led_4_7 +
      checkbox_led_4_8
    }"`,
    `"${
      checkbox_led_5_1 +
      checkbox_led_5_2 +
      checkbox_led_5_3 +
      checkbox_led_5_4 +
      checkbox_led_5_5 +
      checkbox_led_5_6 +
      checkbox_led_5_7 +
      checkbox_led_5_8
    }"`,
    `"${
      checkbox_led_6_1 +
      checkbox_led_6_2 +
      checkbox_led_6_3 +
      checkbox_led_6_4 +
      checkbox_led_6_5 +
      checkbox_led_6_6 +
      checkbox_led_6_7 +
      checkbox_led_6_8
    }"`,
    `"${
      checkbox_led_7_1 +
      checkbox_led_7_2 +
      checkbox_led_7_3 +
      checkbox_led_7_4 +
      checkbox_led_7_5 +
      checkbox_led_7_6 +
      checkbox_led_7_7 +
      checkbox_led_7_8
    }"`,
    `"${
      checkbox_led_8_1 +
      checkbox_led_8_2 +
      checkbox_led_8_3 +
      checkbox_led_8_4 +
      checkbox_led_8_5 +
      checkbox_led_8_6 +
      checkbox_led_8_7 +
      checkbox_led_8_8
    }"`,
  ]}];
                  ${matrix}.on();
                  ${matrix}.draw([${[
    `"${
      checkbox_led_1_1 +
      checkbox_led_1_2 +
      checkbox_led_1_3 +
      checkbox_led_1_4 +
      checkbox_led_1_5 +
      checkbox_led_1_6 +
      checkbox_led_1_7 +
      checkbox_led_1_8
    }"`,
    `"${
      checkbox_led_2_1 +
      checkbox_led_2_2 +
      checkbox_led_2_3 +
      checkbox_led_2_4 +
      checkbox_led_2_5 +
      checkbox_led_2_6 +
      checkbox_led_2_7 +
      checkbox_led_2_8
    }"`,
    `"${
      checkbox_led_3_1 +
      checkbox_led_3_2 +
      checkbox_led_3_3 +
      checkbox_led_3_4 +
      checkbox_led_3_5 +
      checkbox_led_3_6 +
      checkbox_led_3_7 +
      checkbox_led_3_8
    }"`,
    `"${
      checkbox_led_4_1 +
      checkbox_led_4_2 +
      checkbox_led_4_3 +
      checkbox_led_4_4 +
      checkbox_led_4_5 +
      checkbox_led_4_6 +
      checkbox_led_4_7 +
      checkbox_led_4_8
    }"`,
    `"${
      checkbox_led_5_1 +
      checkbox_led_5_2 +
      checkbox_led_5_3 +
      checkbox_led_5_4 +
      checkbox_led_5_5 +
      checkbox_led_5_6 +
      checkbox_led_5_7 +
      checkbox_led_5_8
    }"`,
    `"${
      checkbox_led_6_1 +
      checkbox_led_6_2 +
      checkbox_led_6_3 +
      checkbox_led_6_4 +
      checkbox_led_6_5 +
      checkbox_led_6_6 +
      checkbox_led_6_7 +
      checkbox_led_6_8
    }"`,
    `"${
      checkbox_led_7_1 +
      checkbox_led_7_2 +
      checkbox_led_7_3 +
      checkbox_led_7_4 +
      checkbox_led_7_5 +
      checkbox_led_7_6 +
      checkbox_led_7_7 +
      checkbox_led_7_8
    }"`,
    `"${
      checkbox_led_8_1 +
      checkbox_led_8_2 +
      checkbox_led_8_3 +
      checkbox_led_8_4 +
      checkbox_led_8_5 +
      checkbox_led_8_6 +
      checkbox_led_8_7 +
      checkbox_led_8_8
    }"`,
  ]}]);`;

  return code;
};
javascriptGenerator.forBlock['blink_screen'] = (block, generator) => {
  let matrix = block.getFieldValue(
    block.getFieldValue('current_display'),
    // Blockly.Variables.NAME_TYPE,
  );
  let blink_screen_code = generator.statementToCode(block, 'blink_screen_code');
  let code = `while(true){
                      ${matrix}.clear();
                      setTimeout(() => {
                          ${matrix}.draw([${gestures.figures()[blink_screen_code]}]);
                      }, 3000);
                  };`;

  return code;
};
javascriptGenerator.forBlock['matrix_leds_paint'] = function (block, generator) {
  let matrix = block.getFieldValue(block.getFieldValue('matrix')); // , Blockly.Variables.NAME_TYPE
  let matrix_leds = generator.valueToCode(block, 'matrix_leds', Order.ATOMIC);
  let code_matrix = ``;

  let code = `
                  let codes = ${matrix_leds};
                  codes.forEach(m_led => {
                      ${matrix}.draw(m_led.position, m_led.matrix_code)
                  });\n`;
  return code;
};
javascriptGenerator.forBlock['matrix_emoticon'] = function (block, generator) {
  let position = Number(block.getFieldValue('position')) - 1;
  let checkbox_led_1_1 = block.getFieldValue('led_1_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_2 = block.getFieldValue('led_1_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_3 = block.getFieldValue('led_1_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_4 = block.getFieldValue('led_1_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_5 = block.getFieldValue('led_1_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_6 = block.getFieldValue('led_1_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_7 = block.getFieldValue('led_1_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_1_8 = block.getFieldValue('led_1_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_1 = block.getFieldValue('led_2_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_2 = block.getFieldValue('led_2_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_3 = block.getFieldValue('led_2_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_4 = block.getFieldValue('led_2_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_5 = block.getFieldValue('led_2_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_6 = block.getFieldValue('led_2_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_7 = block.getFieldValue('led_2_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_2_8 = block.getFieldValue('led_2_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_1 = block.getFieldValue('led_3_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_2 = block.getFieldValue('led_3_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_3 = block.getFieldValue('led_3_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_4 = block.getFieldValue('led_3_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_5 = block.getFieldValue('led_3_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_6 = block.getFieldValue('led_3_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_7 = block.getFieldValue('led_3_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_3_8 = block.getFieldValue('led_3_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_1 = block.getFieldValue('led_4_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_2 = block.getFieldValue('led_4_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_3 = block.getFieldValue('led_4_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_4 = block.getFieldValue('led_4_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_5 = block.getFieldValue('led_4_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_6 = block.getFieldValue('led_4_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_7 = block.getFieldValue('led_4_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_4_8 = block.getFieldValue('led_4_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_1 = block.getFieldValue('led_5_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_2 = block.getFieldValue('led_5_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_3 = block.getFieldValue('led_5_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_4 = block.getFieldValue('led_5_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_5 = block.getFieldValue('led_5_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_6 = block.getFieldValue('led_5_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_7 = block.getFieldValue('led_5_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_5_8 = block.getFieldValue('led_5_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_1 = block.getFieldValue('led_6_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_2 = block.getFieldValue('led_6_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_3 = block.getFieldValue('led_6_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_4 = block.getFieldValue('led_6_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_5 = block.getFieldValue('led_6_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_6 = block.getFieldValue('led_6_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_7 = block.getFieldValue('led_6_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_6_8 = block.getFieldValue('led_6_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_1 = block.getFieldValue('led_7_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_2 = block.getFieldValue('led_7_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_3 = block.getFieldValue('led_7_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_4 = block.getFieldValue('led_7_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_5 = block.getFieldValue('led_7_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_6 = block.getFieldValue('led_7_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_7 = block.getFieldValue('led_7_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_7_8 = block.getFieldValue('led_7_8') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_1 = block.getFieldValue('led_8_1') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_2 = block.getFieldValue('led_8_2') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_3 = block.getFieldValue('led_8_3') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_4 = block.getFieldValue('led_8_4') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_5 = block.getFieldValue('led_8_5') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_6 = block.getFieldValue('led_8_6') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_7 = block.getFieldValue('led_8_7') === 'TRUE' ? '1' : '0';
  let checkbox_led_8_8 = block.getFieldValue('led_8_8') === 'TRUE' ? '1' : '0';

  let code = `{position:${position},
               matrix_code:[${[
                 `"${
                   checkbox_led_1_1 +
                   checkbox_led_1_2 +
                   checkbox_led_1_3 +
                   checkbox_led_1_4 +
                   checkbox_led_1_5 +
                   checkbox_led_1_6 +
                   checkbox_led_1_7 +
                   checkbox_led_1_8
                 }"`,
                 `"${
                   checkbox_led_2_1 +
                   checkbox_led_2_2 +
                   checkbox_led_2_3 +
                   checkbox_led_2_4 +
                   checkbox_led_2_5 +
                   checkbox_led_2_6 +
                   checkbox_led_2_7 +
                   checkbox_led_2_8
                 }"`,
                 `"${
                   checkbox_led_3_1 +
                   checkbox_led_3_2 +
                   checkbox_led_3_3 +
                   checkbox_led_3_4 +
                   checkbox_led_3_5 +
                   checkbox_led_3_6 +
                   checkbox_led_3_7 +
                   checkbox_led_3_8
                 }"`,
                 `"${
                   checkbox_led_4_1 +
                   checkbox_led_4_2 +
                   checkbox_led_4_3 +
                   checkbox_led_4_4 +
                   checkbox_led_4_5 +
                   checkbox_led_4_6 +
                   checkbox_led_4_7 +
                   checkbox_led_4_8
                 }"`,
                 `"${
                   checkbox_led_5_1 +
                   checkbox_led_5_2 +
                   checkbox_led_5_3 +
                   checkbox_led_5_4 +
                   checkbox_led_5_5 +
                   checkbox_led_5_6 +
                   checkbox_led_5_7 +
                   checkbox_led_5_8
                 }"`,
                 `"${
                   checkbox_led_6_1 +
                   checkbox_led_6_2 +
                   checkbox_led_6_3 +
                   checkbox_led_6_4 +
                   checkbox_led_6_5 +
                   checkbox_led_6_6 +
                   checkbox_led_6_7 +
                   checkbox_led_6_8
                 }"`,
                 `"${
                   checkbox_led_7_1 +
                   checkbox_led_7_2 +
                   checkbox_led_7_3 +
                   checkbox_led_7_4 +
                   checkbox_led_7_5 +
                   checkbox_led_7_6 +
                   checkbox_led_7_7 +
                   checkbox_led_7_8
                 }"`,
                 `"${
                   checkbox_led_8_1 +
                   checkbox_led_8_2 +
                   checkbox_led_8_3 +
                   checkbox_led_8_4 +
                   checkbox_led_8_5 +
                   checkbox_led_8_6 +
                   checkbox_led_8_7 +
                   checkbox_led_8_8
                 }"`,
               ]}]}`;

  return [code, Order.NONE];
};
javascriptGenerator.forBlock['matrix_caracter'] = function (block, generator) {
  let position = block.getFieldValue('position') - 1;
  let caracter = generator.valueToCode(block, 'caracter', Order.ATOMIC);

  let code = `{position:${position},matrix_code:${caracter}}`;
  return [code, Order.NONE];
};
