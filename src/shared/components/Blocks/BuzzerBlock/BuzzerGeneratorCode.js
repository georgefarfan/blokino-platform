import { javascriptGenerator, Order } from 'blockly/javascript';
const sounds = require('../resources/notes');

javascriptGenerator.forBlock['buzzer'] = (block, generator) => {
  let pin = generator.valueToCode(block, 'buzzer_pin', Order.ATOMIC);
  let code = `new five.Piezo(
                                { 
                                    pin:${pin},
                                    custom:{
                                        type:'BUZZER',
                                        code:{
                                            state:'',
                                            notes:'',
                                            tempo:'',
                                            grade:''
                                        }
                                    }
                                }
                            )`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['buzzer_play_with_notes'] = (block, generator) => {
  let buzzer = block.getFieldValue(
    block.getFieldValue('current_buzzer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let time = block.getFieldValue('current_time');
  let notes = generator.valueToCode(block, 'current_list_notes', Order.ATOMIC);
  let tempo = time * 100;
  let code = `
                        ${buzzer}.custom.code.status = 'playing';
                        ${buzzer}.custom.code.notes = ${notes};
                        ${buzzer}.play({
                                song:${notes},
                                tempo:${tempo}
                            }
                        );`;
  return code;
};

javascriptGenerator.forBlock['buzzer_new_note'] = (block, generator) => {
  let note = block.getFieldValue('current_note');
  let grade = block.getFieldValue('current_grade');
  let duration = block.getFieldValue('current_duration');
  let code = '';
  if (grade === 'Solo nota') {
    code = `
                        ['${note}','${duration}']
                    `;
  } else {
    code = `
                        ['${note}','${grade}','${duration}']`;
  }
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['buzzer_new_note_mute'] = (block, generator) => {
  let time = block.getFieldValue('current_time');
  let code = `[null, '${time}']`;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['buzzer_stop'] = (block, generator) => {
  let buzzer = block.getFieldValue(
    block.getFieldValue('current_buzzer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `
                        ${buzzer}.custom.code.status = 'stop';
                        ${buzzer}.noTone;
                    `;
  return code;
};
javascriptGenerator.forBlock['buzzer_off'] = (block, generator) => {
  let buzzer = block.getFieldValue(
    block.getFieldValue('current_buzzer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `
                        ${buzzer}.custom.code.status = 'off';
                        ${buzzer}.off;`;
  return code;
};

javascriptGenerator.forBlock['buzzer_play_with_sound'] = (block, generator) => {
  let buzzer = block.getFieldValue(
    block.getFieldValue('current_buzzer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let sound = block.getFieldValue('current_sound');
  let code = '';
  switch (sound) {
    case 'claxon':
      code = `
                            ${buzzer}.custom.code.status = 'play with sound';
                            ${buzzer}.custom.code.notes = 'claxon';
                            ${buzzer}.play(${sounds.notes().claxon}
                            );`;
      break;
    case 'mario_bros_1':
      code = `
                            ${buzzer}.custom.code.status = 'play with sound';
                            ${buzzer}.custom.code.notes = 'mario-1';
                            ${buzzer}.play(${sounds.notes().mario_bross_1});`;
      break;
    case 'mario_bros_2':
      code = `
                            ${buzzer}.custom.code.status = 'play with sound';
                            ${buzzer}.custom.code.notes = 'mario-2';
                            ${buzzer}.play(${sounds.notes().mario_bross_2});`;
      break;
    case 'star_wars':
      code = `
                            ${buzzer}.custom.code.status = 'play with sound';
                            ${buzzer}.custom.code.notes = 'star-wars';
                            ${buzzer}.play(${sounds.notes().star_wars});`;
      break;

    default:
      break;
  }

  return code;
};

javascriptGenerator.forBlock['buzzer_is_playing'] = (block, generator) => {
  let buzzer = block.getFieldValue(
    block.getFieldValue('current_buzzer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `${buzzer}.isPlaying`;
  return [code, Order.NONE];
};
