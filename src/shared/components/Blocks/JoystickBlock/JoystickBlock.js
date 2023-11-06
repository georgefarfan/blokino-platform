import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['joystick'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('../../images/blocks/joystick.png', 60, 60, '*'))
      .appendField('Crear Control');
    this.appendValueInput('joy_x').setCheck('String').appendField('-  Entrada horizontal');
    this.appendValueInput('joy_y').setCheck('String').appendField('Entrada Vertical');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
    this.setTooltip('Crea un Joystick .');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_detected_movement'] = {
  init: function () {
    this.appendStatementInput('code_movement')
      .setCheck(null)
      .appendField('Detectar movimientos')
      .appendField(new Blockly.FieldVariable('JOYSTICK'), 'current_joystick');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setColour(150);
    this.setTooltip('Define el bloque que captura los movimientos del control.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_up'] = {
  init: function () {
    this.appendStatementInput('code_mov_up').setCheck(null).appendField('Arriba');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control para arriba.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_down'] = {
  init: function () {
    this.appendStatementInput('code_mov_down').setCheck(null).appendField('Abajo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control para abajo.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_left'] = {
  init: function () {
    this.appendStatementInput('code_mov_left').setCheck(null).appendField('Izquierda');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control para la izquierda.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_right'] = {
  init: function () {
    this.appendStatementInput('code_mov_right').setCheck(null).appendField('Derecha');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control para la derecha.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_up_right'] = {
  init: function () {
    this.appendStatementInput('code_mov_up_right')
      .setCheck(null)
      .appendField('Arriba a la derecha');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control hacia arriba a la derecha.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_up_left'] = {
  init: function () {
    this.appendStatementInput('code_mov_up_left')
      .setCheck(null)
      .appendField('Arriba a la izquierda');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control hacia arriba a la izquierda.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_down_right'] = {
  init: function () {
    this.appendStatementInput('code_mov_down_right')
      .setCheck(null)
      .appendField('Abajo a la derecha');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control hacia abajo a la derecha.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['joy_movement_down_left'] = {
  init: function () {
    this.appendStatementInput('code_mov_down_left')
      .setCheck(null)
      .appendField('Abajo a la izquierda');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('Captura el movimiento de mover el control hacia abajo la izquierda.');
    this.setHelpUrl(url_documentation);
  },
};
