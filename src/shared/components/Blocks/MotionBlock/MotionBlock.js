import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['motion_sensor_block'] = {
  init: function () {
    this.appendValueInput('sensor_mov_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/sensor-motion.png', 40, 40, '*'))
      .setCheck('Number')
      .appendField('Crear Sensor Movimiento');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motion_sensor_fire'] = {
  init: function () {
    this.appendStatementInput('code_motion_sensor')
      .setCheck(null)
      .appendField('Se detecto movimiento')
      .appendField(new Blockly.FieldVariable('SENSOR_MOVIMIENTO'), 'current_motion');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['motion_sensor_out_fire'] = {
  init: function () {
    this.appendStatementInput('code_motion_sensor')
      .setCheck(null)
      .appendField('No se detecto movimiento')
      .appendField(new Blockly.FieldVariable('SENSOR_MOVIMIENTO'), 'current_motion');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
