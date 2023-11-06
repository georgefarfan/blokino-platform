import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['switch_new_block'] = {
  init: function () {
    this.appendValueInput('switch_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/switch.png', 40, 40, '*'))
      .setCheck('Number')
      .appendField('Crear INTERRUPTOR');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['switch_open'] = {
  init: function () {
    this.appendStatementInput('code_switch_open')
      .setCheck(null)
      .appendField('Abrir Interruptor')
      .appendField(new Blockly.FieldVariable('INTERRUPTOR'), 'current_switch');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['switch_close'] = {
  init: function () {
    this.appendStatementInput('code_switch_close')
      .setCheck(null)
      .appendField('Cerrar Interruptor')
      .appendField(new Blockly.FieldVariable('INTERRUPTOR'), 'current_switch');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
