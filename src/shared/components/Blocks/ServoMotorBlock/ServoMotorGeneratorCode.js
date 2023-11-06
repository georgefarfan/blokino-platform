import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['servo_motor'] = (block) => {
  let pin = block.getFieldValue(block, 'servo_pin', Order.ATOMIC);
  let code = `new five.Servo(
                    {   
                        pin:${pin},
                        custom: {
                            type:'SERVOMOTOR',
                            code:{
                                state:'',
                                position:0,
                                positions: {
                                    to: 0,
                                    from: 0
                                }
                            }
                        }
                    }
                )`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['servo_motor_with_position'] = (block) => {
  let pin = block.getFieldValue(block, 'servo_pin', Order.ATOMIC);
  let position = block.getFieldValue(block, 'servo_position', Order.ATOMIC);
  let code = `new five.Servo(
                        {   
                            pin:${pin},
                            startAt:'${position}',
                            custom: {
                                type: 'SERVOMOTOR',
                                code: {
                                    state: '',
                                    position: 0,
                                    positions:{
                                        to:0,
                                        from:0
                                    }
                                }
                            }
                        }
                    )`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['servo_sweep'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servomotor'),
    //  Blockly.Variables.NAME_TYPE,
  );
  let code = `${servomotor}.custom.code.state="sweep";
                        ${servomotor}.sweep();`;
  return code;
};
javascriptGenerator.forBlock['servo_center'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //   Blockly.Variables.NAME_TYPE,
  );
  let code = `${servomotor}.custom.code.state="center";
                        ${servomotor}.center();`;
  return code;
};
javascriptGenerator.forBlock['servo_extreme_min'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //    Blockly.Variables.NAME_TYPE,
  );
  let code = `${servomotor}.custom.code.state="min_ext";
                        ${servomotor}.min();`;
  return code;
};
javascriptGenerator.forBlock['servo_extreme_max'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //   Blockly.Variables.NAME_TYPE,
  );
  let code = `${servomotor}.custom.code.state="max_ext";
                        ${servomotor}.max();`;
  return code;
};
javascriptGenerator.forBlock['servo_move'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //   Blockly.Variables.NAME_TYPE,
  );
  let grade = block.getFieldValue(block, 'value_grade', Order.ATOMIC);

  let code = `${servomotor}.custom.code.state="to";
                        ${servomotor}.custom.code.position=${grade};
                        ${servomotor}.to('${grade}');`;
  return code;
};

javascriptGenerator.forBlock['servo_move_home'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //    Blockly.Variables.NAME_TYPE,
  );
  let code = `${servomotor}.custom.code.state="home";
                        ${servomotor}.home();`;
  return code;
};
javascriptGenerator.forBlock['servo_stop'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //   Blockly.Variables.NAME_TYPE,
  );
  let code = `${servomotor}.custom.code.state="stopped";
                        ${servomotor}.stop();`;
  return code;
};

javascriptGenerator.forBlock['servo_sweep_to'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servo'),
    //   Blockly.Variables.NAME_TYPE,
  );
  let grade_to = block.getFieldValue('pos_init');
  let grade_from = block.getFieldValue('pos_end');
  let code = `${servomotor}.custom.code.state="sweep-to-from";
                        ${servomotor}.custom.code.positions.to=${grade_to};
                        ${servomotor}.custom.code.positions.from=${grade_from};
                        ${servomotor}.sweep([${grade_to},${grade_from}]);`;
  return code;
};

javascriptGenerator.forBlock['servo_sweep_with_speed'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servomotor'),
    //   Blockly.Variables.NAME_TYPE,
  );
  let velocity = block.getFieldValue('velocity') * 100;
  // TODO: Assemble JavaScript into code variable.
  let code = `${servomotor}.custom.code.state="sweep";
                        ${servomotor}.sweep({interval:${velocity}});`;
  return code;
};

javascriptGenerator.forBlock['servo_sweep_to_from_with_speed'] = (block) => {
  let servomotor = block.getFieldValue(
    block.getFieldValue('current_servomotor'),
    //  Blockly.Variables.NAME_TYPE,
  );
  let grade_to = block.getFieldValue('to');
  let grade_from = block.getFieldValue('from');
  let velocity = block.getFieldValue('velocity') * 100;
  // TODO: Assemble JavaScript into code variable.
  let code = `${servomotor}.custom.code.state="sweep-to-from";
                        ${servomotor}.custom.code.positions.to=${grade_to};
                        ${servomotor}.custom.code.positions.from=${grade_from};
                        ${servomotor}.sweep({
                                                range:[${grade_to},${grade_from}],
                                                interval:${velocity}
                        });`;
  return code;
};

javascriptGenerator.forBlock['servo_motor_continuos'] = (block) => {
  let pin = block.getFieldValue(
    block,
    'pin_servo_continuos',
    //  Order.ATOMIC,
  );
  let code = `
                new five.Servo(
                    {   
                        pin:${pin},
                        type: "continuous",
                        custom: {
                            type:'SERVOMOTOR-CONTINUOS',
                            code:{
                                state:'',
                                direction:'',
                                position:0,
                                positions: {
                                    to: 0,
                                    from: 0
                                }
                            }
                        }
                    }
                )`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['servo_continuos_forward'] = (block) => {
  let servomotor_continuos = block.getFieldValue(
    block.getFieldValue('current_servo_continuo'),
    // Blockly.Variables.NAME_TYPE,
  );
  let velocity = block.getFieldValue('current_velocity').replace(/\s/g, '');
  let code = `${servomotor_continuos}.custom.code.state="sweep";
                        ${servomotor_continuos}.custom.code.direction="forward";
                        ${servomotor_continuos}.cw(${velocity});`;
  return code;
};

javascriptGenerator.forBlock['servo_continuos_backwards'] = (block) => {
  let servomotor_continuos = block.getFieldValue(
    block.getFieldValue('current_servo_continuo'),
    // Blockly.Variables.NAME_TYPE,
  );
  let velocity = block.getFieldValue('current_velocity').replace(/\s/g, '');
  let code = `
                        ${servomotor_continuos}.custom.code.state="sweep";
                        ${servomotor_continuos}.custom.code.direction="backwards";
                        ${servomotor_continuos}.ccw(${velocity});`;
  return code;
};
