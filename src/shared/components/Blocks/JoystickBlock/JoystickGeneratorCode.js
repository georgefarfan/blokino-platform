import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['joystick'] = (block, generator) => {
  let joy_x = generator.valueToCode(block, 'joy_x', Order.ATOMIC);
  let joy_y = generator.valueToCode(block, 'joy_y', Order.ATOMIC);
  let code = `
                    new five.Joystick(
                        { 
                            pins: [${joy_x},${joy_y}],
                            custom: {
                                type:'JOYSTICK',
                                pos_x: ${joy_x},
                                pos_y: ${joy_y}
                            }
                        })`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['joy_detected_movement'] = (block, generator) => {
  let joystick = block.getFieldValue(
    block.getFieldValue('current_joystick'),
    //Blockly.Variables.NAME_TYPE,
  );
  let joystick_code = generator.statementToCode(block, 'code_movement');
  let code = `${joystick}.on('change',function(){ let x = Math.round(this.x); let y = Math.round(this.y);${joystick_code};})`;
  return code;
};
javascriptGenerator.forBlock['joy_movement_up'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_up');
  let code = `if( x == 0 && y == 1 ){  ${movement_code}  }`;
  return code;
};
javascriptGenerator.forBlock['joy_movement_down'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_down');
  let code = `if( x == 0 && y == -1 ){  ${movement_code}   }`;
  return code;
};
javascriptGenerator.forBlock['joy_movement_left'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_left');
  let code = `if( x == -1 && y == 0 ){  ${movement_code}   }`;
  return code;
};
javascriptGenerator.forBlock['joy_movement_right'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_right');
  let code = `if( x == 1 && y == 0 ){  ${movement_code}   }`;

  return code;
};
javascriptGenerator.forBlock['joy_movement_up_right'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_up_right');
  let code = `if( x == 1 && y == 1 ){  ${movement_code}   }`;

  return code;
};
javascriptGenerator.forBlock['joy_movement_up_left'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_up_left');
  let code = `if( x == -1 && y == 1 ){  ${movement_code}  }`;
  return code;
};
javascriptGenerator.forBlock['joy_movement_down_right'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_down_right');
  let code = `if( x == 1 && y == -1 ){  ${movement_code}  }`;
  return code;
};
javascriptGenerator.forBlock['joy_movement_down_left'] = (block, generator) => {
  let movement_code = generator.statementToCode(block, 'code_mov_down_left');
  let code = `if( x == -1 && y == -1 ){  ${movement_code}  }`;
  return code;
};
