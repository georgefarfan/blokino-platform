import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['button'] = {
  init: function () {
    this.appendValueInput('button_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/button.png', 40, 40, '*'))
      .setCheck('Number')
      .appendField('Crear Boton');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(315);
    this.setTooltip('Crea un Boton, se debe agregar la entrada digital.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['button_press'] = {
  init: function () {
    this.appendStatementInput('button_press_code')
      .setCheck(null)
      .appendField('Pulsar')
      .appendField(new Blockly.FieldVariable('BOTON'), 'button');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('Este bloque se usa para manejar el evento de apretar un Boton.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['button_hold'] = {
  init: function () {
    this.appendStatementInput('code_hold_button')
      .setCheck(null)
      .appendField('Mantener presionado')
      .appendField(new Blockly.FieldVariable('BOTON'), 'current_hold_button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('Este bloque se usa para manejar el evento mantener apretado el Boton.');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['button_up'] = {
  init: function () {
    this.appendStatementInput('code_up_button')
      .setCheck(null)
      .appendField('Soltar Boton')
      .appendField(new Blockly.FieldVariable('BOTON'), 'current_up_button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('Este bloque se usa para manejar el evento de soltar el Boton.');
    this.setHelpUrl(url_documentation);
  },
};
