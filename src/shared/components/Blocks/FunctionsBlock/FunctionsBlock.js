import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['timer'] = {
  init: function () {
    this.appendStatementInput('timer_block').setCheck(null).appendField('Esperar un momento');
    this.appendDummyInput()
      .appendField('Tiempo ')
      .appendField(new Blockly.FieldNumber(1, 0, 100), 'current_value_time');
    this.appendDummyInput()
      .appendField(' ')
      .appendField(
        new Blockly.FieldDropdown([
          ['milisegundos', 'miliseconds'],
          ['segundos', 'seconds'],
          ['minutos', 'minutes'],
        ]),
        'current_time',
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['interval_time'] = {
  init: function () {
    this.appendStatementInput('code_inteval')
      .setCheck(null)
      .appendField('Ejecutar cada ')
      .appendField(new Blockly.FieldNumber(0, 1, 1000, 1), 'current_value_timer')
      .appendField(
        new Blockly.FieldDropdown([
          ['milisegundos', 'miliseconds'],
          ['segundos', 'seconds'],
          ['minutos', 'minutes'],
        ]),
        'current_timer',
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['getDay'] = {
  init: function () {
    this.appendDummyInput().appendField('Día actual');
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['getMonth'] = {
  init: function () {
    this.appendDummyInput().appendField('Mes actual');
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['getYear'] = {
  init: function () {
    this.appendDummyInput().appendField('Año actual');
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['getDate'] = {
  init: function () {
    this.appendDummyInput().appendField('Obtener fecha');
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
