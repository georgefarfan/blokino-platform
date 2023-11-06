import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['lcd_create_two_rows'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('../../images/blocks/display-lcd.png', 40, 40, '*'))
      .appendField('Crear Consola de Mensajes de 2 filas');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_create_four_rows'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('../../images/blocks/display-lcd.png', 40, 40, '*'))
      .appendField('Crear Consola de Mensajes de 4 filas');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_two_rows_no_scroll'] = {
  init: function () {
    this.appendDummyInput().appendField('Escribir un mensaje');
    this.appendDummyInput()
      .appendField('En una consola de 2 Filas')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_console');
    this.appendValueInput('msg_first_row')
      .setCheck('String')
      .appendField('Mensaje de la primer fila');
    this.appendValueInput('msg_second_row')
      .setCheck('String')
      .appendField('Mensaje de la segunda fila');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_two_rows_switch'] = {
  init: function () {
    this.appendDummyInput().appendField('Escribir un Mensaje segun la fila');
    this.appendDummyInput()
      .appendField('En una consola de 2 filas')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.appendDummyInput()
      .appendField('Posicion')
      .appendField(
        new Blockly.FieldDropdown([
          ['Arriba', 'first'],
          ['Abajo', 'second'],
        ]),
        'current_row',
      );
    this.appendValueInput('message')
      .setCheck('String')
      .appendField('Mensaje a mostrarse en la consola');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['lcd_four_rows_switch'] = {
  init: function () {
    this.appendDummyInput().appendField('Escribir un Mensaje segun la fila');
    this.appendDummyInput()
      .appendField('En una consola de 4 filas')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.appendDummyInput()
      .appendField('Posicion')
      .appendField(
        new Blockly.FieldDropdown([
          ['Primer fila', 'first'],
          ['Segunda fila', 'second'],
          ['Tercer fila', 'third'],
          ['Cuarta fila', 'fourth'],
        ]),
        'current_row',
      );
    this.appendValueInput('message')
      .setCheck('String')
      .appendField('Mensaje a mostrarse en la consola');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_two_rows_scroll'] = {
  init: function () {
    this.appendDummyInput().appendField('Escribir un Mensaje con Desplazamiento');
    this.appendDummyInput()
      .appendField('En una consola de 2 filas')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.appendDummyInput()
      .appendField('Velocidad en la que se ven los mensajes')
      .appendField(
        new Blockly.FieldDropdown([
          ['Lento', 'low'],
          ['Despacio', 'medium'],
          ['Rapido', 'fast'],
        ]),
        'current_velocity',
      );
    this.appendValueInput('first_message')
      .setCheck('String')
      .appendField('Mensaje de la primer fila');
    this.appendValueInput('second_message')
      .setCheck('String')
      .appendField('Mensaje de la segunda fila');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_four_rows_scroll'] = {
  init: function () {
    this.appendDummyInput().appendField('Escribir un Mensaje con Desplazamiento');
    this.appendDummyInput()
      .appendField('En una consola de 4 filas')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.appendDummyInput()
      .appendField('Velocidad en la que se ven los mensajes')
      .appendField(
        new Blockly.FieldDropdown([
          ['Lento', 'low'],
          ['Despacio', 'medium'],
          ['Rapido', 'fast'],
        ]),
        'current_velocity',
      );
    this.appendValueInput('first_message')
      .setCheck('String')
      .appendField('Mensaje de la primer fila');
    this.appendValueInput('second_message')
      .setCheck('String')
      .appendField('Mensaje de la segunda fila');
    this.appendValueInput('third_message')
      .setCheck('String')
      .appendField('Mensaje de la tercer fila');
    this.appendValueInput('fourth_message')
      .setCheck('String')
      .appendField('Mensaje de la cuarta fila');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_four_rows_no_scroll'] = {
  init: function () {
    this.appendDummyInput().appendField('Escribir un mensaje');
    this.appendDummyInput()
      .appendField('En una consola de 4 filas')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_display');
    this.appendValueInput('first_message').setCheck(null).appendField('Mensaje de la primer fila');
    this.appendValueInput('second_message')
      .setCheck(null)
      .appendField('Mensaje de la segunda fila');
    this.appendValueInput('third_message').setCheck(null).appendField('Mensaje de la tercer fila');
    this.appendValueInput('fourth_message').setCheck(null).appendField('Mensaje de la cuarta fila');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_clean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Limpiar Consola')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Apagar consola')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['lcd_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Encender Consola')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'current_lcd');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['lcd_character'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Caracter')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '1'],
          ['2', '2'],
          ['3', '3'],
          ['4', '4'],
          ['5', '5'],
          ['6', '6'],
          ['7', '7'],
          ['8', '8'],
          ['9', '9'],
          ['10', '10'],
          ['11', '11'],
          ['12', '12'],
          ['13', '13'],
          ['14', '14'],
          ['15', '15'],
          ['16', '16'],
          ['17', '17'],
          ['18', '18'],
          ['19', '19'],

          ['Circulo', 'circle'],
          ['Circulo con un punto', 'cdot'],
          ['Dona', 'donut'],

          ['Pelota', 'ball'],
          ['Cuadrado', 'square'],
          ['Cuadrado con punto', 'sdot'],

          ['Cuadrado lleno', 'fbox'],
          ['Cuadrado chico', 'sbox'],
          ['Cuadrado chico lleno', 'sfbox'],

          ['Flecha derecha', 'arrowright'],
          ['Flecha izquierda', 'arrowleft'],

          ['Euro', 'euro'],
          ['Centavo', 'cent'],

          ['Altavoz', 'speaker'],
          ['Sonido', 'sound'],

          ['X', 'x'],
          ['Objetivo', 'target'],

          ['Puntero derecha', 'pointerright'],
          ['Puntero arriba', 'pointerup'],
          ['Puntero izquierda', 'pointerleft'],
          ['Puntero abajo', 'pointerdown'],

          ['Flecha arriba derecha', 'arrowne'],
          ['Flecha arriba izquierda', 'arrownw'],
          ['Flecha abajo izquierda', 'arrowsw'],
          ['Flecha abajo derecha', 'arrowse'],

          ['Campana', 'bell'],
          ['Sonrisa', 'smile'],
          ['Nota', 'note'],
          ['Reloj', 'clock'],

          ['Corazon', 'heart'],
          ['Pato', 'duck'],
          ['Checkeado', 'check'],
          ['Hombre parado', 'runningb'],

          ['Hombre corriendo', 'runninga'],
        ]),
        'character',
      );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['use_character'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Agregar el caracter ')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', ':1:'],
          ['2', ':2:'],
          ['3', ':3:'],
          ['4', ':4:'],
          ['5', ':5:'],
          ['6', ':6:'],
          ['7', ':7:'],
          ['8', ':8:'],
          ['9', ':9:'],
          ['10', ':10:'],
          ['11', ':11:'],
          ['12', ':12:'],
          ['13', ':13:'],
          ['14', ':14:'],
          ['15', ':15:'],
          ['16', ':16:'],
          ['17', ':17:'],
          ['18', ':18:'],
          ['19', ':19:'],
          ['Circulo', ':circle:'],
          ['Circulo con un punto', ':cdot:'],
          ['Dona', ':donut:'],
          ['Pelota', ':ball:'],
          ['Cuadrado', ':square:'],
          ['Cuadrado con punto', ':sdot:'],
          ['Cuadrado lleno', ':fbox:'],
          ['Cuadrado chico', ':sbox:'],
          ['Cuadrado chico lleno', ':sfbox:'],
          ['Flecha derecha', ':arrowright:'],
          ['Flecha izquierda', ':arrowleft:'],
          ['Euro', ':euro:'],
          ['Centavo', ':cent:'],
          ['Altavoz', ':speaker:'],
          ['Sonido', ':sound:'],
          ['X', ':x:'],
          ['Objetivo', ':target:'],
          ['Puntero derecha', ':pointerright:'],
          ['Puntero arriba', ':pointerup:'],
          ['Puntero izquierda', ':pointerleft:'],
          ['Puntero abajo', ':pointerdown:'],
          ['Flecha arriba derecha', ':arrowne:'],
          ['Flecha arriba izquierda', ':arrownw:'],
          ['Flecha abajo izquierda', ':arrowsw:'],
          ['Flecha abajo derecha', ':arrowse:'],
          ['Campana', ':bell:'],
          ['Sonrisa', ':smile:'],
          ['Nota', ':note:'],
          ['Reloj', ':clock:'],
          ['Corazon', ':heart:'],
          ['Pato', ':duck:'],
          ['Checkeado', ':check:'],
          ['Hombre parado', ':runningb:'],
          ['Hombre corriendo', ':runninga:'],
        ]),
        'character',
      );
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['lcd_load_character'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Asignar a la ')
      .appendField(new Blockly.FieldVariable('CONSOLA_DE_MENSAJES'), 'lcd');
    this.appendValueInput('character').setCheck(null).appendField('el caracter');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['lcd_composite_characters'] = {
  init: function () {
    this.appendValueInput('characters').setCheck('Array').appendField('Conjunto de caracteres');
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
