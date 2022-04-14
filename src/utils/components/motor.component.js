const blocklyPlatform = require('./blocklyPlatform');
const url_documentation = 'http://blokino-platform.com/get_started';

const MotorComponent = class MotorComponent extends blocklyPlatform {
  createMotion(
    programNodes,
    matrixLEDSName,
    typeName,
    codeMatrixLEDS,
  ) {
    programNodes.push({
      name: matrixLEDSName,
      type: typeName ? typeName : '',
      code: codeMatrixLEDS,
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createMotion(
        programNodes,
        variable.id.name,
        'BLOCK',
        null,
        null,
      );
    });
  }

  validate(code, programNodes) {
    programNodes = [];
    code.forEach((node) => {
      // Declaracion de la variable
      if (node.type === 'VariableDeclaration') {
        this.addVariable(node, programNodes);
      }
    });
    return programNodes;
  }

  menu() {
    return {
      test_1: {
        code: `
        <xml id="blokino-toolbox">
            <category name="Bloques" colour="270">
                <category name="Variables" custom="VARIABLE" colour="210">
                </category>
                <sep gap="32"></sep>
                <category name="Tipos de datos" colour="120">
                    <category name="Número" colour="210">
                        <block type="math_number">
                            <field name="NUM"></field>
                        </block>
                    </category>
                </category>
                <sep gap="32"></sep>
                <category name="Procedimientos" colour="270">
                    <category name="Crear Procedimiento" colour="270" custom="PROCEDURE">
                    </category>
                </category>
                <sep gap="32"></sep>
                <category name="Motores" colour="225">
                    <block type="motor_new">
                    </block>
                    <block type="motor_spin"></block>
                    <block type="motor_stop"></block>
                </category>
                <sep gap="32"></sep>
                <category name="Teclado" colour="345">
                    <block type="keypad_block"></block>
                    <block type="keypad_press"></block>
                    <block type="keypad_press_key"></block>
                </category>
                <sep gap="32"></sep>
            </category>
        </xml>
        `,
      },
    };
  }

  block(Blockly) {
    Blockly.Blocks['motor_new'] = {
      init: function () {
        this.appendValueInput('pin')
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/motor.png',
              40,
              40,
              '*',
            ),
          )
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField('Crear Motor');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(225);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motor_spin'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Girar ')
          .appendField(
            new Blockly.FieldVariable('MOTOR'),
            'current_motor',
          )
          .appendField('Velocidad')
          .appendField(
            new Blockly.FieldNumber(1, 1, 255),
            'velocity',
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motor_spin_code'] = {
      init: function () {
        this.appendStatementInput('code_spin_motor')
          .setCheck(null)
          .appendField('Mientras gira el ')
          .appendField(
            new Blockly.FieldVariable('MOTOR'),
            'current_motor',
          )
          .appendField(' ejecutar');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motor_stop'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Detener')
          .appendField(
            new Blockly.FieldVariable('MOTOR'),
            'current_motor',
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motor_stop_code'] = {
      init: function () {
        this.appendStatementInput('code_stop')
          .setCheck(null)
          .appendField('Mientras se detiene el')
          .appendField(
            new Blockly.FieldVariable('MOTOR'),
            'current_motor',
          )
          .appendField(' ejecutar');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(225);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motor_spin_verify'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Verificar si esta girando')
          .appendField(
            new Blockly.FieldVariable('MOTOR'),
            'current_motor',
          );
        this.setOutput(true, null);
        this.setColour(225);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
  }

  code(Blockly) {
    Blockly.JavaScript['motor_new'] = (block) => {
      let pin = Blockly.JavaScript.valueToCode(
        block,
        'pin',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `
                      new five.Motor(
                          {
                              pin:${pin},
                              custom:{
                                  type:'MOTORS',
                                  code:''
                              }
                          }
                      )`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
    Blockly.JavaScript['motor_spin'] = (block) => {
      let motor = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motor'),
        Blockly.Variables.NAME_TYPE,
      );
      let velocity = block.getFieldValue('velocity');
      let code = `${motor}.start(${velocity})`;
      return code;
    };
    Blockly.JavaScript['motor_spin_code'] = (block) => {
      let motor = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motor'),
        Blockly.Variables.NAME_TYPE,
      );
      let motor_code = Blockly.JavaScript.statementToCode(
        block,
        'code_spin_motor',
      );
      let code = `${motor}.on('start',function(){${motor_code}})`;
      return code;
    };
    Blockly.JavaScript['motor_stop'] = (block) => {
      let motor = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motor'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${motor}.stop()`;
      return code;
    };
    Blockly.JavaScript['motor_stop_code'] = (block) => {
      let motor = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motor'),
        Blockly.Variables.NAME_TYPE,
      );
      let motor_code = Blockly.JavaScript.statementToCode(
        block,
        'code_stop',
      );
      let code = `${motor}.on('stop',function(){${motor_code}})`;

      return code;
    };
    Blockly.JavaScript['motor_spin_verify'] = (block) => {
      let motor = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motor'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${motor}.isOn`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
  }
};

module.exports = MotorComponent;
