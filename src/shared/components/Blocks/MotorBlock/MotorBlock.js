import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['motor_new'] = {
  init: function () {
    this.appendValueInput('pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/motor.png', 40, 40, '*'))
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('Crear Motor');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motor_spin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Girar ')
      .appendField(new Blockly.FieldVariable('MOTOR'), 'current_motor')
      .appendField('Velocidad')
      .appendField(new Blockly.FieldNumber(1, 1, 255), 'velocity');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motor_spin_code'] = {
  init: function () {
    this.appendStatementInput('code_spin_motor')
      .setCheck(null)
      .appendField('Mientras gira el ')
      .appendField(new Blockly.FieldVariable('MOTOR'), 'current_motor')
      .appendField(' ejecutar');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motor_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Detener')
      .appendField(new Blockly.FieldVariable('MOTOR'), 'current_motor');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motor_stop_code'] = {
  init: function () {
    this.appendStatementInput('code_stop')
      .setCheck(null)
      .appendField('Mientras se detiene el')
      .appendField(new Blockly.FieldVariable('MOTOR'), 'current_motor')
      .appendField(' ejecutar');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motor_spin_verify'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Verificar si esta girando')
      .appendField(new Blockly.FieldVariable('MOTOR'), 'current_motor');
    this.setOutput(true, null);
    this.setColour(225);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
