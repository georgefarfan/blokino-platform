import Blockly from 'blockly/core';

const url_documentation = 'DOCU';

Blockly.Blocks['servo_motor'] = {
  init: function () {
    this.appendValueInput('servo_pin')
      .appendField(new Blockly.FieldImage('../../images/blocks/servomotor.png', 30, 30, '*'))
      .setCheck('Number')
      .appendField('Crear Servo');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('Se crea un servomotor con su pin de entrada.');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['servo_motor_continuos'] = {
  init: function () {
    this.appendValueInput('pin_servo_continuos')
      .appendField(
        new Blockly.FieldImage('../../images/blocks/servomotor-continuos.png', 35, 35, '*'),
      )
      .setCheck('Number')
      .appendField('Crear Servo continuo');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['servo_motor_with_position'] = {
  init: function () {
    this.appendValueInput('servo_pin').setCheck('Number').appendField('Crear Servo');
    this.appendValueInput('servo_position').setCheck('Number').appendField('Posición');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
    this.setTooltip('Crea un ServoMotor en una posicion especifica');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_sweep'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover Servo de un extremo al otro')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servomotor');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Mueve el ServoMotor de un extremo al otro.');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_sweep_to'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover Servo  ')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.appendDummyInput()
      .appendField(' Desde')
      .appendField(new Blockly.FieldNumber(0, 0, 180), 'pos_init');
    this.appendDummyInput()
      .appendField(' Hasta')
      .appendField(new Blockly.FieldNumber(100, 0, 180), 'pos_end');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Hace mover al Servo de una distancia a otra');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_sweep_with_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover servomotor de un extremo al otro')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servomotor');
    this.appendDummyInput()
      .appendField('con el grado de velocidad')
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
          ['20', '20'],
        ]),
        'velocity',
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['servo_sweep_to_from_with_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover servomotor de un extremo al otro')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servomotor');
    this.appendDummyInput()
      .appendField('desde')
      .appendField(new Blockly.FieldNumber(0, 0, 180), 'to');
    this.appendDummyInput()
      .appendField('hasta')
      .appendField(new Blockly.FieldNumber(180, 0, 180), 'from');
    this.appendDummyInput()
      .appendField('con el grado de velocidad')
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
          ['20', '20'],
        ]),
        'velocity',
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['servo_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Detener Servo')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Detiene al ServoMotor');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_center'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Centrar Servo')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Centra a un ServoMotor');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_extreme_min'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Extremo minimo Servo')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Mueve a un extremo inferior al ServoMotor');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_extreme_max'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Extremo maximo Servo')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Mueve a un extrema superior al ServoMotor');
    this.setHelpUrl(url_documentation);
  },
};
Blockly.Blocks['servo_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover Servo')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.appendValueInput('value_grade').setCheck('Number').appendField(' Posición');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('Mueve al ServoMotor en grados');
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['servo_move_home'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Mover a la posición inicial Servo')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR'), 'current_servo');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip(
      'Mueve al ServoMotor a la posicion inicial, este funciona cuando se crea un ServoMotor con posicion inicial.',
    );
    this.setHelpUrl(url_documentation);
  },
};

Blockly.Blocks['servo_continuos_forward'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Girar para adelante')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR_CONTINUO'), 'current_servo_continuo')
      .appendField('Velocidad')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '0.1'],
          ['2', '0.2'],
          ['3', '0.3'],
          ['4', '0.4'],
          ['5', '0.5'],
          ['6', '0.6'],
          ['7', '0.7'],
          ['8', '0.8'],
          ['9', '0.9'],
          ['10', '1'],
        ]),
        'current_velocity',
      );
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['servo_continuos_backwards'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Girar para atras')
      .appendField(new Blockly.FieldVariable('SERVOMOTOR_CONTINUO'), 'current_servo_continuo')
      .appendField('Velocidad')
      .appendField(
        new Blockly.FieldDropdown([
          ['1', '0.1'],
          ['2', '0.2'],
          ['3', '0.3'],
          ['4', '0.4'],
          ['5', '0.5'],
          ['6', '0.6'],
          ['7', '0.7'],
          ['8', '0.8'],
          ['9', '0.9'],
          ['10', '1'],
        ]),
        'current_velocity',
      );
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
