import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['lcd_create_two_rows'] = (block, generator) => {
  let code = `new five.LCD(
                { controller:'PCF8574A',
                  custom:{
                    type: 'LCD',
                    scroll: false,
                    messages: {
                        first_row:'',
                        second_row:''
                    }
                 }
            })`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['lcd_create_four_rows'] = (block, generator) => {
  let code = `new five.LCD(
                            { controller:'PCF8574',
                              custom:{ 
                                  type:'LCD',
                                  scroll: false,
                                  messages:{
                                      first_row:'',
                                      second_row:''
                                  }
                              }
                            })`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['lcd_two_rows_switch'] = (block, generator) => {
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); // , Blockly.Variables.NAME_TYPE
  let row = block.getFieldValue('current_row');
  let message = generator.valueToCode(block, 'message', Order.ATOMIC);
  let code = `
                switch('${row}'){
                    case 'first':
                        ${lcd}.cursor(0,0).print(${message});
                        break;
                    case 'second':
                        ${lcd}.cursor(1,0).print(${message});
                        break;
                };
            `;
  return code;
};

javascriptGenerator.forBlock['lcd_four_rows_switch'] = (block, generator) => {
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); // , Blockly.Variables.NAME_TYPE
  let row = block.getFieldValue('current_row');
  let message = generator.valueToCode(block, 'message', Order.ATOMIC);
  let code = `
                switch('${row}'){
                    case 'first': 
                        ${lcd}.cursor(0,0).print(${message}.substr(0, 20));
                        break; 
                    case 'second': 
                        ${lcd}.cursor(1,0).print(${message}.substr(0, 20));
                        break; 
                    case 'third': 
                        ${lcd}.cursor(2,0).print(${message}.substr(0, 20));
                        break; 
                    case 'fourth': 
                        ${lcd}.cursor(3,0).print(${message}.substr(0, 20));
                        break;
                }; 
            `;
  return code;
};

javascriptGenerator.forBlock['lcd_clean'] = (block, generator) => {
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); // , Blockly.Variables.NAME_TYPE
  let code = `${lcd}.clear();`;
  return code;
};

javascriptGenerator.forBlock['lcd_off'] = (block, generator) => {
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); // , Blockly.Variables.NAME_TYPE
  let code = `${lcd}.off();`;
  return code;
};

javascriptGenerator.forBlock['lcd_on'] = (block, generator) => {
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); // , Blockly.Variables.NAME_TYPE
  let code = `${lcd}.on();`;
  return code;
};

javascriptGenerator.forBlock['lcd_two_rows_scroll'] = (block, generator) => {
  let current_velocity = block.getFieldValue('current_velocity');
  let time = 0;
  switch (current_velocity) {
    case 'low':
      time = 2000;
      break;
    case 'medium':
      time = 1500;
      break;
    case 'fast':
      time = 1000;
      break;

    default:
      break;
  }
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); // , Blockly.Variables.NAME_TYPE
  let first_message = generator.valueToCode(block, 'first_message', Order.ATOMIC);
  let second_message = generator.valueToCode(block, 'second_message', Order.ATOMIC);

  let code =
    `scrollMessage(${first_message},${second_message});` +
    `function scrollMessage(){
                        let phases = [];
                        phases.push(${first_message});
                        phases.push(${second_message});
                        ${lcd}.custom.scroll = true;
                        ${lcd}.cursor(0, 0).print(${first_message}.substr(0, 20));
                        ${lcd}.custom.messages.first_row = ${first_message};
                        ${lcd}.cursor(1, 0).print(${second_message}.substr(0, 20));
                        ${lcd}.custom.messages.second_row = ${second_message};
                        setInterval(()=>{
                            ${lcd}.clear();
                            if(${first_message}.length>20){
                                ${lcd}.cursor(0, 0).print(scroll('first'))
                            }else{
                                ${lcd}.cursor(0,0).print(${first_message});
                            };
                            if(${second_message}.length>20){
                                ${lcd}.cursor(1, 0).print(scroll('second'))
                            }else{
                                ${lcd}.cursor(1,0).print(${second_message})
                            };
                        },${time});
                        
                        function scroll(row){ 
                            let phase ='';
                            let letter ='';
                            switch(row){
                                case 'first': 
                                    letter = phases[0].substr(0, 1);
                                    phases[0] = (phases[0] + letter).substr(1, (phases[0] + letter).length);
                                    phase = phases[0];
                                    phase.slice(0, 1);
                                break;
                                case 'second': 
                                    letter = phases[1].substr(0, 1);
                                    phases[1] = (phases[1] + letter).substr(1, (phases[1] + letter).length);
                                    phase = phases[1];
                                    phase.slice(0, 1);
                                break;
                            }
                            return phase.substr(0,20)}
                        }; `;

  return code;
};

javascriptGenerator.forBlock['lcd_four_rows_scroll'] = (block, generator) => {
  let velocity_type = block.getFieldValue('current_velocity');
  let velocity = 0;
  switch (velocity_type) {
    case 'low':
      velocity = 2000;
      break;
    case 'medium':
      velocity = 1500;
      break;
    case 'fast':
      velocity = 1000;
      break;
    default:
      break;
  }
  let lcd = block.getFieldValue(block.getFieldValue('current_lcd')); //, Blockly.Variables.NAME_TYPE
  let first_message = generator.valueToCode(block, 'first_message', Order.ATOMIC);
  let second_message = generator.valueToCode(block, 'second_message', Order.ATOMIC);
  let third_message = generator.valueToCode(block, 'third_message', Order.ATOMIC);
  let fourth_message = generator.valueToCode(block, 'fourth_message', Order.ATOMIC);

  let code = `
                let phases = [];
                phases.push(${first_message});
                phases.push(${second_message});
                phases.push(${third_message});
                phases.push(${fourth_message}); 
                ${lcd}.custom.scroll = true;
                ${lcd}.cursor(0,0).print(${first_message}.substr(0,20));
                ${lcd}.cursor(1,0).print(${second_message}.substr(0,20)); 
                ${lcd}.cursor(2,0).print(${third_message}.substr(0,20)); 
                ${lcd}.cursor(3,0).print(${fourth_message}.substr(0,20)); 
                setInterval(() => { 
                        ${lcd}.clear();
                        if(${first_message}.length>20){
                            ${lcd}.cursor(0,0).print(scroll('first'))
                        }else{
                            ${lcd}.cursor(0,0).print(${first_message})
                        }; 
                        if(${second_message}.length>20){ 
                            ${lcd}.cursor(1,0).print(scroll('second'))
                        }else{ 
                            ${lcd}.cursor(1,0).print(${second_message})
                        }; 
                        if(${third_message}.length>20){ 
                            ${lcd}.cursor(2,0).print(scroll('third'))
                        }else{ 
                            ${lcd}.cursor(2,0).print(${third_message})
                        }; 
                        if(${fourth_message}.length>20){ 
                            ${lcd}.cursor(3,0).print(scroll('fourth'))
                        }else{ 
                            ${lcd}.cursor(3,0).print(${fourth_message})
                        }
                    },${velocity});
                 
                function scroll(row){ 
                    let phase ='';
                    let letter =''; 
                    switch(row){ 
                        case 'first': 
                            letter = phases[0].substr(0,1);
                            phases[0] = (phases[0] + letter).substr(1,(phases[0] + letter).length);
                            phase = phases[0];
                            phase.slice(0,1);
                        break; 
                        case 'second': 
                            letter = phases[1].substr(0,1);
                            phases[1] = (phases[1] + letter).substr(1,(phases[1] + letter).length);
                            phase = phases[1];
                            phase.slice(0,1);
                        break; 
                        case 'third': 
                            letter = phases[2].substr(0,1);
                            phases[2] = (phases[2] + letter).substr(1,(phases[2] + letter).length);
                            phase = phases[2];
                            phase.slice(0,1);
                        break; 
                        case 'fourth': 
                            letter = phases[3].substr(0,1);
                            phases[3] = (phases[3] + letter).substr(1,(phases[3] + letter).length);
                            phase = phases[3];
                            phase.slice(0,1);
                        break; 
                    } 
                    return phase.substr(0,20)
                } 
            `;

  return code;
};

javascriptGenerator.forBlock['lcd_two_rows_no_scroll'] = (block, generator) => {
  let lcd = block.getFieldValue(
    block.getFieldValue('current_console'),
    // Blockly.Variables.NAME_TYPE,
  );
  let first_message = generator.valueToCode(block, 'msg_first_row', Order.ATOMIC);
  let second_message = generator.valueToCode(block, 'msg_second_row', Order.ATOMIC);
  let code = `
                    ${lcd}.cursor(0,0).print(${first_message});
                    ${lcd}.custom.messages.first_row=${first_message};
                    ${lcd}.cursor(1,0).print(${second_message});
                    ${lcd}.custom.messages.second_row=${second_message};
                    `;
  return code;
};

javascriptGenerator.forBlock['lcd_four_rows_no_scroll'] = (block, generator) => {
  let lcd = block.getFieldValue(
    block.getFieldValue('current_display'),
    // Blockly.Variables.NAME_TYPE,
  );
  let first_message = generator.valueToCode(block, 'first_message', Order.ATOMIC);
  let second_message = generator.valueToCode(block, 'second_message', Order.ATOMIC);
  let third_message = generator.valueToCode(block, 'third_message', Order.ATOMIC);
  let fourth_message = generator.valueToCode(block, 'fourth_message', Order.ATOMIC);
  let code = `
                ${lcd}.cursor(0,0).print(${first_message}.substr(0,20));
                ${lcd}.cursor(1,0).print(${second_message}.substr(0,20));
                ${lcd}.cursor(2,0).print(${third_message}.substr(0,20));
                ${lcd}.cursor(3,0).print(${fourth_message}.substr(0,20));
                `;
  return code;
};
javascriptGenerator.forBlock['lcd_character'] = function (block, generator) {
  let character = block.getFieldValue('character');
  let code = `"${character}"`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['use_character'] = function (block, generator) {
  let character = block.getFieldValue('character');
  let code = `"${character}"`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['lcd_load_character'] = function (block, generator) {
  let LCD = block.getFieldValue(block.getFieldValue('lcd'));
  // , Blockly.Variables.NAME_TYPE
  let character = generator.valueToCode(block, 'character', Order.ATOMIC);
  let code = `${LCD}.useChar${character};\n`;
  return code;
};
javascriptGenerator.forBlock['lcd_composite_characters'] = function (block, generator) {
  let characters = generator.valueToCode(block, 'characters', Order.ATOMIC);
  let code = `${characters}.toString().replace(/\,/g, " ")`;
  return [code, Order.NONE];
};
