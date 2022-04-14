const blocklyPlatform = require('./blocklyPlatform');

const buzzerComponent = class BuzzerComponent extends blocklyPlatform {
  validate(code, programNodes) {
    programNodes = [];
    code.forEach((node) => {
      // Declaracion de la variable
      if (node.type === 'VariableDeclaration') {
        this.addVariable(node, programNodes);
      }
    });
    return programNodes;
  }
  createBuzzer(programNodes, buzzerName, typeName, codeBuzzer) {
    programNodes.push({
      name: buzzerName,
      type: typeName ? typeName : '',
      code: codeBuzzer,
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createBuzzer(
        programNodes,
        variable.id.name,
        'BUZZER',
        null,
        null,
      );
    });
  }

  menu() {
    return {
      test_1: {
        code: `
            <xml id="blokino-toolbox">
                <category name="Bloques" colour="270">
                    <category name="Variables" custom="VARIABLE" colour="210">
                    </category>
                    <sep gap="32"></sep>
                    <category name="Tipos de datos" colour="120">
                        <block type="math_number">
                            <field name="NUM"></field>
                        </block>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Procedimientos" colour="270">
                        <category name="Crear Procedimiento" colour="270" custom="PROCEDURE"></category>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Zumbador" colour="345">
                        <block type="buzzer"></block>
                        <block type="buzzer_play_with_sound"></block>
                    </category>
                    <sep gap="32"></sep>
                </category>
            </xml>
            `,
      },
      test_2: {
        code: `
            <xml id="blokino-toolbox">
                <category name="Bloques" colour="270"> 
                    <category name="Variables" custom="VARIABLE" colour="210"/>
                    <sep gap="32"></sep> 
                    <category name="Tipos de datos" colour="210">
                        <category name="Número" colour="210">
                            <block type="math_number">
                                <field name="NUM"></field>
                            </block>
                        </category>
                        <sep gap="32"></sep>
                        <category name="Lista" colour="255">
                            <block type="lists_create_with"></block>
                        </category>
                        <sep gap="32"></sep>
                    </category> 
                    <category name="Procedimientos" colour="270">
                        <category name="Crear Procedimiento" colour="270" custom="PROCEDURE">
                        </category>
                    </category>
                    <sep gap="32"></sep> 
                    <category name="Parlante" colour="345">
                        <block type="buzzer"/>
                        <block type="buzzer_new_note"/>
                        <block type="buzzer_new_note_mute"/>
                        <block type="buzzer_play_with_notes"/>
                    </category> 
                </category>
            </xml>`,
      },
    };
  }

  // SETUP

  block(Blockly) {
    Blockly.Blocks['buzzer'] = {
      init: function () {
        this.appendValueInput('buzzer_pin')
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/buzzer.png',
              30,
              30,
              '*',
            ),
          )
          .setCheck('Number')
          .appendField('Crear Zumbador');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(345);
        this.setTooltip(
          'Crea un Zumbador, debe agregarse su entrada digital.',
        );
        this.setHelpUrl(url_documentation);
      },
    };

    Blockly.Blocks['buzzer_stop'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Detener Zumbador')
          .appendField(
            new Blockly.FieldVariable('ZUMBADOR'),
            'current_buzzer',
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip(
          'Este bloque se usa para detener al Zumbador.',
        );
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['buzzer_off'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Apagar Zumbador')
          .appendField(
            new Blockly.FieldVariable('ZUMBADOR'),
            'current_buzzer',
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip(
          'Este bloque se usa para apagar al Zumbador.',
        );
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['buzzer_play_with_sound'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Hacer sonar Zumbador')
          .appendField(
            new Blockly.FieldVariable('ZUMBADOR'),
            'current_buzzer',
          )
          .appendField('con Sonido')
          .appendField(
            new Blockly.FieldDropdown([
              ['Star Wars', 'star_wars'],
              ['Mario Bros - 1', 'mario_bros_1'],
              ['Mario Bros - 2', 'mario_bros_2'],
              ['Claxon', 'claxon'],
            ]),
            'current_sound',
          );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip(
          'Este bloque se para reproducir sonidos del listado en el Zumbador.',
        );
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['buzzer_new_note'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Crear Nota Musical')
          .appendField('Tipo de Nota')
          .appendField(
            new Blockly.FieldDropdown([
              ['A', 'A'],
              ['B', 'B'],
              ['C', 'C'],
              ['D', 'D'],
              ['E', 'E'],
              ['F', 'F'],
              ['G', 'G'],
            ]),
            'current_note',
          )
          .appendField(' Grado de la Nota')
          .appendField(
            new Blockly.FieldDropdown([
              ['Solo nota', 'Solo nota'],
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
              ['5', '5'],
            ]),
            'current_grade',
          )
          .appendField('  Tiempo / Ritmo')
          .appendField(
            new Blockly.FieldDropdown([
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
            ]),
            'current_duration',
          )
          .appendField(' milisegundo');
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['buzzer_new_note_mute'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Crear Pausa')
          .appendField('Tiempo de la pausa')
          .appendField(
            new Blockly.FieldDropdown([
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
            ]),
            'current_time',
          )
          .appendField(' milisegundo');
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['buzzer_play_with_notes'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Hacer sonar el ')
          .appendField(
            new Blockly.FieldVariable('ZUMBADOR'),
            'current_buzzer',
          )
          .appendField(' Velocidad')
          .appendField(
            new Blockly.FieldNumber(0, 0, 30),
            'current_time',
          );
        this.appendValueInput('current_list_notes')
          .setCheck('Array')
          .appendField('  con notas');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };

    Blockly.Blocks['buzzer_is_playing'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('esta sonando?')
          .appendField(
            new Blockly.FieldVariable('ZUMBADOR'),
            'current_buzzer',
          );
        this.setOutput(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
  }

  code(Blockly) {
    Blockly.JavaScript['buzzer'] = (block) => {
      let pin = Blockly.JavaScript.valueToCode(
        block,
        'buzzer_pin',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
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
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['buzzer_play_with_notes'] = (block) => {
      let buzzer = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_buzzer'),
        Blockly.Variables.NAME_TYPE,
      );
      let time = block.getFieldValue('current_time');
      let notes = Blockly.JavaScript.valueToCode(
        block,
        'current_list_notes',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
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

    Blockly.JavaScript['buzzer_new_note'] = (block) => {
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
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
    Blockly.JavaScript['buzzer_new_note_mute'] = (block) => {
      let time = block.getFieldValue('current_time');
      let code = `[null, '${time}']`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['buzzer_stop'] = (block) => {
      let buzzer = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_buzzer'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `
                          ${buzzer}.custom.code.status = 'stop';
                          ${buzzer}.noTone;
                      `;
      return code;
    };
    Blockly.JavaScript['buzzer_off'] = (block) => {
      let buzzer = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_buzzer'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `
                          ${buzzer}.custom.code.status = 'off';
                          ${buzzer}.off;`;
      return code;
    };

    Blockly.JavaScript['buzzer_play_with_sound'] = (block) => {
      let buzzer = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_buzzer'),
        Blockly.Variables.NAME_TYPE,
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
                              ${buzzer}.play(${
            sounds.notes().mario_bross_1
          });`;
          break;
        case 'mario_bros_2':
          code = `
                              ${buzzer}.custom.code.status = 'play with sound';
                              ${buzzer}.custom.code.notes = 'mario-2';
                              ${buzzer}.play(${
            sounds.notes().mario_bross_2
          });`;
          break;
        case 'star_wars':
          code = `
                              ${buzzer}.custom.code.status = 'play with sound';
                              ${buzzer}.custom.code.notes = 'star-wars';
                              ${buzzer}.play(${
            sounds.notes().star_wars
          });`;
          break;
      }

      return code;
    };

    Blockly.JavaScript['buzzer_is_playing'] = (block) => {
      let buzzer = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_buzzer'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${buzzer}.isPlaying`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
  }
};

module.exports = buzzerComponent;
