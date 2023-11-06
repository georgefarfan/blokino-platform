import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['keypad_block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('../../images/blocks/keypad.png', 40, 40, '*'))
      .appendField('Crear Teclado');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['keypad_press_key'] = {
  init: function () {
    this.appendStatementInput('code_keypad_key')
      .setCheck(null)
      .appendField('Tecla presionada')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
          ['*', '*'],
          ['0', '0'],
          ['#', '#'],
        ]),
        'current_key',
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['keypad_press'] = {
  init: function () {
    this.appendStatementInput('code_keypad_press')
      .setCheck(null)
      .appendField('Presionar tecla')
      .appendField(new Blockly.FieldVariable('TECLADO'), 'current_keypad');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
