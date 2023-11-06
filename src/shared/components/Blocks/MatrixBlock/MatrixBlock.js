import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['matrix'] = {
  init: function () {
    this.appendValueInput('pin_cs')
      .appendField(new Blockly.FieldImage('../../images/blocks/matrix-leds.png', 40, 40, '*'))
      .setCheck('Number')
      .appendField('Crear MATRIX-LEDS')
      .appendField('Entrada_CS');
    this.appendValueInput('pin_din').setCheck('Number').appendField('Entrada_DIN');
    this.appendValueInput('pin_clk').setCheck('Number').appendField('Entrada_CLK');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['matrix_with_extensions'] = {
  init: function () {
    this.appendValueInput('pin_cs')
      .appendField(new Blockly.FieldImage('../../images/blocks/matrix-leds.png', 40, 40, '*'))
      .setCheck('Number')
      .appendField('Crear MATRIX-LEDS')
      .appendField('Entrada_CS');
    this.appendValueInput('pin_din').setCheck('Number').appendField('Entrada_DIN');
    this.appendValueInput('pin_clk').setCheck('Number').appendField('Entrada_CLK');
    this.appendValueInput('extensions').setCheck('Number').appendField('Extensiones');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['print_screen'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Dibujar ')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'current_led_matrix')
      .appendField(' figura')
      .appendField(
        new Blockly.FieldDropdown([
          ['feliz', 'happy'],
          ['triste', 'sad'],
          ['mmm', 'chino'],
          ['sorpresa', 'surprise'],
          ['risa', 'jeje'],
          ['lengua afuera', 'tongue'],
          ['corazon', 'heart'],
          ['casa', 'house'],
          ['interrogacion', 'interrogation'],
          ['exclamacion', 'exclamation'],
          ['lentes', 'glass_man'],
          ['Error', 'error'],
          ['Exito', 'success'],
          ['Todas los leds prendidos', 'all_red'],
        ]),
        'options',
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('Asigna un figura a la matrix de leds.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['blink_screen'] = {
  init: function () {
    this.appendStatementInput('blink_screen_code')
      .setCheck(null)
      .appendField('Hacer parpadear ')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'current_display');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['screen_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Encender pantalla')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'currente_screen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('Enciende la matrix de leds.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['screen_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Apagar pantalla')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'currente_screen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('Apaga la matrix de leds.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['screen_clear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Limpiar pantalla')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'currente_screen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('Limpia la matrix de leds.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['message_screen'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Escribir en ')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'current_screen');
    this.appendValueInput('current_screen_message').setCheck('String').appendField(' mensaje');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('Asigna un mensaje a la matrix de leds.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['matrix_paint'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Dibujar ')
      .appendField(new Blockly.FieldVariable('matrix'), 'current_matrix');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_8');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['matrix_leds_paint'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('Dibujar en la matrix')
      .appendField(new Blockly.FieldVariable('MATRIX_LEDS'), 'matrix');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('con tantas pantallas unida')
      .appendField(new Blockly.FieldNumber(1, 0, 20, 1), 'cant-matrix');
    this.appendValueInput('matrix_leds').setCheck('Array');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['matrix_emoticon'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Posición')
      .appendField(new Blockly.FieldNumber(1, 1, 20, 1), 'position');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_1_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_2_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_3_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_4_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_5_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_6_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_7_8');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_1')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_2')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_3')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_4')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_5')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_6')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_7')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'led_8_8');

    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['matrix_caracter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Posicion')
      .appendField(new Blockly.FieldNumber(1, 1, 20, 1), 'position');
    this.appendValueInput('caracter').setCheck('String').appendField('Caracter');
    this.setOutput(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
