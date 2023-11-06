import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['buzzer'] = {
  init: function () {
    this.appendValueInput('buzzer_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/buzzer.png', 30, 30, '*'))
      .setCheck('Number')
      .appendField('Crear Zumbador');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip('Crea un Zumbador, debe agregarse su entrada digital.');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['buzzer_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Detener Zumbador')
      .appendField(new Blockly.FieldVariable('ZUMBADOR'), 'current_buzzer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('Este bloque se usa para detener al Zumbador.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['buzzer_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Apagar Zumbador')
      .appendField(new Blockly.FieldVariable('ZUMBADOR'), 'current_buzzer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('Este bloque se usa para apagar al Zumbador.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['buzzer_play_with_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Hacer sonar Zumbador')
      .appendField(new Blockly.FieldVariable('ZUMBADOR'), 'current_buzzer')
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
    this.setTooltip('Este bloque se para reproducir sonidos del listado en el Zumbador.');
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
      .appendField(new Blockly.FieldVariable('ZUMBADOR'), 'current_buzzer')
      .appendField(' Velocidad')
      .appendField(new Blockly.FieldNumber(0, 0, 30), 'current_time');
    this.appendValueInput('current_list_notes').setCheck('Array').appendField('  con notas');
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
      .appendField(new Blockly.FieldVariable('ZUMBADOR'), 'current_buzzer');
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
