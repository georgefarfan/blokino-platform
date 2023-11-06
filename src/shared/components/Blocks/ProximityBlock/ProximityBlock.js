import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['proximity_block'] = {
  init: function () {
    this.appendValueInput('sensor_prox_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/sensor-proximity.png', 40, 40, '*'))
      .setCheck('String')
      .appendField('Crear Sensor de Proximidad');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['proximity_block_with_freq'] = {
  init: function () {
    this.appendValueInput('sensor_prox_pin')
      .setCheck('String')
      .appendField('Crear Sensor de proximidad');
    this.appendValueInput('frecuency')
      .setCheck('Number')
      .appendField('Tiempo')
      .appendField(
        new Blockly.FieldDropdown([
          ['milisegundos', 'miliseconds'],
          ['segundos', 'seconds'],
        ]),
        'current_time',
      )
      .appendField('Frecuencia');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['proximity_capture_distances'] = {
  init: function () {
    this.appendStatementInput('code_capture_distances')
      .setCheck(null)
      .appendField('Capturar distancia')
      .appendField(new Blockly.FieldVariable('SENSOR_PROXIMIDAD'), 'current_sensor_proximity');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['proximity_capture_very_close'] = {
  init: function () {
    this.appendStatementInput('code_capture_very_close').setCheck(null).appendField('Muy Cerca');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['proximity_capture_near'] = {
  init: function () {
    this.appendStatementInput('code_capture_near').setCheck(null).appendField('Cerca');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['proximity_capture_far'] = {
  init: function () {
    this.appendStatementInput('code_capture_far').setCheck(null).appendField('Lejos');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['proximity_capture_far_away'] = {
  init: function () {
    this.appendStatementInput('code_capture_far_away').setCheck(null).appendField('Muy Lejos');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
