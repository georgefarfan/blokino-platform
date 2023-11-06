import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['led'] = {
  init: function () {
    this.appendValueInput('led_pin')
      .appendField(new Blockly.FieldImage('../images/blocks/led.png', 30, 30, '*'))
      .setCheck('Number')
      .setAlign(Blockly.CENTRE)
      .appendField('Crear LED');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['blink'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Parpadear')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led')
      .appendField('Tiempo')
      .appendField(new Blockly.FieldNumber(0, 1, 100, 1), 'time')
      .appendField(
        new Blockly.FieldDropdown([
          ['milisegundos', 'miliseconds'],
          ['segundos', 'seconds'],
          ['minutos', 'minutes'],
        ]),
        'blink_period',
      );
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Asigna el parpadeo al led.');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['turn_off_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Apagar')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led_off');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['turn_on_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Encender')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['stop_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Detener')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led_stop');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['led_pwa_fade_out'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Apagar lentamente')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['led_pwa_fade_in'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Encender lentamente')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['led_pwa_pulse'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Parpadear por partes')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['led_pwa_pulse_time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Parpadear por partes ')
      .appendField(new Blockly.FieldVariable('LED'), 'current_led');
    this.appendValueInput('current_time').setCheck('Number').appendField(' Tiempo');
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['milisegundos', 'miliseconds'],
        ['segundos', 'seconds'],
      ]),
      'current_time',
    );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['brightness_led'] = {
  init: function () {
    this.appendValueInput('current_led')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('Brillo')
      .appendField('Escala')
      .appendField(new Blockly.FieldNumber(0), 'grado')
      .appendField('Led');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('Asigna el brillo al led.');
    this.setHelpUrl(url_documentation);
  },
};
