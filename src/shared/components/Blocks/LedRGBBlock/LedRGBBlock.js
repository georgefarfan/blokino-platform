import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['led_rgb'] = {
  init: function () {
    this.appendValueInput('pin_red')
      .appendField(new Blockly.FieldImage('../../images/blocks/led-rgb.png', 30, 30, '*'))
      .setCheck('Number')
      .appendField('Crear LED-RGB')
      .appendField('Rojo');
    this.appendValueInput('pin_green').setCheck('Number').appendField('Verde');
    this.appendValueInput('pin_blue').setCheck('Number').appendField('Azul');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('Crea un Led RGB con su entrada.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['led_rgb_intensity'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Intensidad LED-RGB')
      .appendField(new Blockly.FieldVariable('LED_RGB'), 'current_led_rgb')
      .appendField('Rango')
      .appendField(new Blockly.FieldNumber(0, 0, 100), 'current_range_intensity');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['color_led'] = {
  init: function () {
    this.appendValueInput('led')
      .setCheck(null)
      .appendField('Dar color')
      .appendField(new Blockly.FieldColour('#FF0000'), 'led_color')
      .appendField(' al Led');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Asigna color al led RGB.');
    this.setHelpUrl(url_documentation);
  },
};
