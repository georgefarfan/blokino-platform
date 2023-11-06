import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['potentiometer'] = {
  init: function () {
    this.appendValueInput('potentiometer_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/potentiometer.png', 40, 40, '*'))
      .setCheck('String')
      .appendField('Crear Potenciometro');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['potentiometer_blink'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Girar')
      .appendField(new Blockly.FieldVariable('POTENCIOMETRO'), 'current_potentiometer')
      .appendField('ajustar velocidad de Parpadeo del Led')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['potentiometer_brightness'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Girar ')
      .appendField(new Blockly.FieldVariable('POTENCIOMETRO'), 'current_potentiometer');
    this.appendDummyInput()
      .appendField(' Ajustar Brillo del Led')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['potentiometer_brightness_list'] = {
  init: function () {
    this.appendValueInput('current_list_leds')
      .setCheck('Array')
      .appendField('Girar ')
      .appendField(new Blockly.FieldVariable('POTENCIOMETRO'), 'current_potentiometer')
      .appendField('ajustar brillo de los Leds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['potentiometer_blink_list'] = {
  init: function () {
    this.appendValueInput('current_list_leds')
      .setCheck('Array')
      .appendField('Girar ')
      .appendField(new Blockly.FieldVariable('POTENCIOMETRO'), 'current_potentiometer')
      .appendField('ajustar parpadeo de los Leds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['potentiometer_servo_movement'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Girar')
      .appendField(new Blockly.FieldVariable('POTENCIOMETRO'), 'current_potentiometer');
    this.appendDummyInput()
      .appendField(' Mover Servomotor ')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['potentiometer_servo_list_mov'] = {
  init: function () {
    this.appendValueInput('current_list_servos')
      .setCheck('Array')
      .appendField('Girar ')
      .appendField(new Blockly.FieldVariable('POTENCIOMETRO'), 'current_potentiometer')
      .appendField('servos');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
