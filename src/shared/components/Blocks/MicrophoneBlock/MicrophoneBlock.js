import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['microphone'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Crear Microfono')
      .appendField(
        new Blockly.FieldDropdown([
          ['A0', 'A0'],
          ['A1', 'A1'],
          ['A2', 'A2'],
          ['A3', 'A3'],
          ['A4', 'A4'],
          ['A5', 'A5'],
          ['A6', 'A6'],
          ['A7', 'A7'],
          ['A8', 'A8'],
          ['A9', 'A9'],
          ['A10', 'A10'],
          ['A11', 'A11'],
          ['A12', 'A12'],
          ['A13', 'A13'],
          ['A14', 'A14'],
          ['A15', 'A15'],
        ]),
        'pin_analog',
      );
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['microphone_detect'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldVariable('MICROFONO'), 'microphone');
    this.appendStatementInput('active').setCheck(null).appendField('Se detecto sonido');
    this.appendStatementInput('no_active').setCheck(null).appendField('No se detecto nada');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
