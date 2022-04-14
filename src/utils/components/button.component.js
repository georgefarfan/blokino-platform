const blocklyPlatform = require('./blocklyPlatform');
const url_documentation = 'http://blokino-platform.com/get_started';

const buttonComponent = class ButtonComponent extends blocklyPlatform {
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

  createButton(programNodes, blockName, typeName) {
    programNodes.push({
      name: blockName,
      type: typeName ? typeName : '',
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createButton(
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
                                <block type="math_number">
                                    <field name="NUM"></field>
                                </block>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Procedimientos" colour="270">
                                <category name="Crear Procedimiento" colour="270" custom="PROCEDURE">
                                </category>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Botones" colour="315">
                                <block type="button"></block>
                                <block type="button_press"></block>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Leds" colour="20">
                                <block type="led"></block>
                                <block type="blink"></block>
                                <block type="turn_on_led"></block>
                                <block type="stop_led"></block>
                            </category>
                            <sep gap="32"></sep> 
                        </category>
                    </xml>`,
      },
      test_2: {
        code: `
                    <xml id="blokino-toolbox">
                        <category name="Bloques" colour="270"> 
                            <category name="Variables" custom="VARIABLE" colour="210"></category>
                            <sep gap="32"></sep> 
                            <category name="Tipos de datos" colour="120">
                                <block type="math_number">
                                    <field name="NUM"></field>
                                </block>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Procedimientos" colour="270">
                                <category name="Crear Procedimiento" colour="270" custom="PROCEDURE">
                                </category>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Botones" colour="315">
                                <block type="button"></block>
                                <block type="button_press"></block>
                            </category><sep gap="32"></sep> 
                            <category name="Pulsadores" colour="0">
                                <block type="button_bumper"></block>
                                <block type="button_bump_press"></block>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Leds" colour="20">
                                <block type="led"></block>
                                <block type="blink"></block>
                                <block type="turn_on_led"></block>
                                <block type="stop_led"></block>
                            </category>
                            <sep gap="32"></sep> 
                        </category>
                    </xml>`,
      },
      test_3: {
        code: `
                    <xml id="blokino-toolbox">
                        <category name="Bloques" colour="270"> 
                            <category name="Variables" custom="VARIABLE" colour="210"></category>
                            <sep gap="32"></sep> 
                            <category name="Tipos de datos" colour="120">
                                <block type="math_number">
                                    <field name="NUM"></field>
                                </block>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Procedimientos" colour="270">
                                <category name="Crear Procedimiento" colour="270" custom="PROCEDURE">
                                </category>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Interruptor" colour="0">
                                <block type="switch_new_block">
                                </block><block type="switch_open">
                                </block><block type="switch_close">
                                </block>
                            </category>
                            <sep gap="32"></sep> 
                            <category name="Leds" colour="20">
                                <block type="led"></block>
                                <block type="blink"></block>
                                <block type="turn_on_led"></block>
                                <block type="stop_led"></block>
                            </category>
                            <sep gap="32"></sep> 
                        </category>
                    </xml>`,
      },
    };
  }

  // SETUP

  block(Blockly) {
    Blockly.Blocks['button'] = {
      init: function () {
        this.appendValueInput('button_pin')
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/button.png',
              40,
              40,
              '*',
            ),
          )
          .setCheck('Number')
          .appendField('Crear Boton');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(315);
        this.setTooltip(
          'Crea un Boton, se debe agregar la entrada digital.',
        );
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
        this.setTooltip(
          'Este bloque se usa para manejar el evento de apretar un Boton.',
        );
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['button_hold'] = {
      init: function () {
        this.appendStatementInput('code_hold_button')
          .setCheck(null)
          .appendField('Mantener presionado')
          .appendField(
            new Blockly.FieldVariable('BOTON'),
            'current_hold_button',
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip(
          'Este bloque se usa para manejar el evento mantener apretado el Boton.',
        );
        this.setHelpUrl(url_documentation);
      },
    };

    Blockly.Blocks['button_up'] = {
      init: function () {
        this.appendStatementInput('code_up_button')
          .setCheck(null)
          .appendField('Soltar Boton')
          .appendField(
            new Blockly.FieldVariable('BOTON'),
            'current_up_button',
          );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip(
          'Este bloque se usa para manejar el evento de soltar el Boton.',
        );
        this.setHelpUrl(url_documentation);
      },
    };
  }

  code(Blockly) {
    Blockly.JavaScript['button'] = (block) => {
      let pin = Blockly.JavaScript.valueToCode(
        block,
        'button_pin',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `new five.Button({pin:${pin},custom:{type:'BUTTON'}})`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
    Blockly.JavaScript['button_press'] = (block) => {
      let button = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('button'),
        Blockly.Variables.NAME_TYPE,
      );
      let button_code = Blockly.JavaScript.statementToCode(
        block,
        'button_press_code',
      );
      let code = `${button}.on('press',function(){${button_code}});\n`;
      return code;
    };
    Blockly.JavaScript['button_hold'] = (block) => {
      let button = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_hold_button'),
        Blockly.Variables.NAME_TYPE,
      );
      let button_code = Blockly.JavaScript.statementToCode(
        block,
        'code_hold_button',
      );
      let code = `${button}.on('hold',function(){${button_code}});\n`;
      return code;
    };
    Blockly.JavaScript['button_up'] = (block) => {
      let button = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_up_button'),
        Blockly.Variables.NAME_TYPE,
      );
      let button_code = Blockly.JavaScript.statementToCode(
        block,
        'code_up_button',
      );
      let code = `${button}.on('hold',function(){
                  ${button_code}
              });\n`;
      return code;
    };
  }
};

module.exports = buttonComponent;
