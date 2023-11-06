import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['button_bumper'] = {
  init: function () {
    this.appendValueInput('bumper_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/bumper.png', 40, 40, '*'))
      .setCheck('Number')
      .appendField('Crear Pulsador');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('Crea un Pulsador, debe agregar la entrada.');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['button_bump_press'] = {
  init: function () {
    this.appendStatementInput('code_button_bumper_press')
      .setCheck(null)
      .appendField('Pulsar')
      .appendField(new Blockly.FieldVariable('PULSADOR'), 'current_bumper');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('este bloque se usa para captar el evento de pulsar el Pulsador.');
    this.setHelpUrl(url_documentation);
  },
};
