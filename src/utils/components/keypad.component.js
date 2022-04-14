const blocklyPlatform = require('./blocklyPlatform');
const url_documentation = 'http://blokino-platform.com/documentation';
const keyPadComponent = class KeyPadComponent extends blocklyPlatform {
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

  createKeyPad(programNodes, blockName, typeName) {
    programNodes.push({
      name: blockName,
      type: typeName ? typeName : '',
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createKeyPad(
        programNodes,
        variable.id.name,
        'BLOCK',
        null,
        null,
      );
    });
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
                    <category name="LEDs" colour="20">
                        <block type="led"></block>
                        <block type="blink"></block>
                        <block type="stop_led"></block>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Servomotor" colour="180">
                        <block type="servo_motor"></block>
                        <block type="servo_sweep"></block>
                        <block type="servo_sweep_to"></block>
                        <block type="servo_stop"></block>
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

  config() {
    return `
            {
                controller:'MPR121_KEYPAD',
                keys: 
                    [["*", "0", "#"], ["7", "8", "9"], ["4", "5", "6"], ["1", "2", "3"]],
                sensitivity:0.25,
                custom:{type:'KEYPAD'}
            }
    `;
  }

  block(Blockly) {
    Blockly.Blocks['keypad_block'] = {
      init: function () {
        this.appendDummyInput()
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/keypad.png',
              40,
              40,
              '*',
            ),
          )
          .appendField('Crear Teclado');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['keypad_press_key'] = {
      init: function () {
        this.appendStatementInput('code_keypad_key')
          .setCheck(null)
          .appendField('Tecla presionada')
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
              ['*', '*'],
              ['0', '0'],
              ['#', '#'],
            ]),
            'current_key',
          );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['keypad_press'] = {
      init: function () {
        this.appendStatementInput('code_keypad_press')
          .setCheck(null)
          .appendField('Presionar tecla')
          .appendField(
            new Blockly.FieldVariable('TECLADO'),
            'current_keypad',
          );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
  }

  code(Blockly) {
    Blockly.JavaScript['keypad_block'] = (block) => {
      let code = `
                  new five.Touchpad(${this.config()})`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
    Blockly.JavaScript['keypad_press'] = (block) => {
      let keypad = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_keypad'),
        Blockly.Variables.NAME_TYPE,
      );
      let keypad_code = Blockly.JavaScript.statementToCode(
        block,
        'code_keypad_press',
      );
      let code = `['press'].forEach(function(eventType){${keypad}.on(eventType, function(event){${keypad_code}})});\n`;
      return code;
    };
    Blockly.JavaScript['keypad_press_key'] = (block) => {
      let keypad = block.getFieldValue('current_key');
      let keypad_code = Blockly.JavaScript.statementToCode(
        block,
        'code_keypad_key',
      );
      let code = `if('${keypad}'== event.which.toString()){${keypad_code}};\n `;
      return code;
    };
  }
};

module.exports = keyPadComponent;
