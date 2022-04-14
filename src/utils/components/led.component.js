'use strict';

/**
 * @author Jorge Farfan Coaguila
 * @description
 */

const blocklyPlatform = require('./blocklyPlatform');
const url_documentation = 'http://blokino-platform.com/get_started';

const ledComponent = class LedComponent extends blocklyPlatform {
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

  createLED(programNodes, ledName, typeName) {
    programNodes.push({
      name: ledName,
      type: typeName ? typeName : '',
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createLED(
        programNodes,
        variable.id.name,
        'LED',
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
                    <category name="Tipos de datos" colour="210">
                        <category name="Número" colour="210">
                            <block type="math_number">
                                <field name="NUM"></field>
                            </block>
                        </category>
                    </category>
                    <sep gap="32"></sep>
                    <category name="LEDs" colour="20">
                        <block type="led"></block>
                        <block type="blink"></block>
                    </category>
                    <sep gap="32"></sep>
                </category>
            </xml>
        `,
      },
      test_2: {
        code: `
            <xml id="blokino-toolbox">
                <category name="Bloques" colour="270"> 
                    <category name="Variables" custom="VARIABLE" colour="210"/>
                    <sep gap="32"></sep> 
                    <category name="Tipos de datos" colour="210">
                        <category name="Número" colour="210">
                            <block type="math_number">
                                <field name="NUM"></field>
                            </block>
                        </category>
                    </category>
                    <sep gap="32"></sep> 
                    <category name="LEDs" colour="20">
                        <block type="led"></block>
                        <block type="blink"></block>
                    </category>
                    <sep gap="32"></sep> 
                </category>
            </xml>`,
      },
      test_3: {
        code: `
            <xml id="blokino-toolbox">
                <category name="Bloques" colour="270"> 
                    <category name="Variables" custom="VARIABLE" colour="210"/><sep gap="32"></sep> 
                    <category name="Tipos de datos" colour="210">
                        <category name="Número" colour="210">
                            <block type="math_number">
                                <field name="NUM"></field>
                            </block></category>
                        </category>
                        <sep gap="32"></sep> 
                        <category name="Procedimientos" colour="270">
                            <category name="Crear Procedimiento" colour="270" custom="PROCEDURE"/> 
                        </category>
                        <sep gap="32"></sep> 
                        <category name="LEDs" colour="20">
                            <block type="led"/>
                            <block type="blink"/>
                        </category>
                        <sep gap="32"></sep> 
                </category>
            </xml>`,
      },
    };
  }

  // SETUP

  block(Blockly) {
    Blockly.Blocks['led'] = {
      init: function () {
        this.appendValueInput('led_pin')
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/led.png',
              30,
              30,
              '*',
            ),
          )
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_CENTRE)
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led',
          )
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led_off',
          );
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led',
          );
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led_stop',
          );
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led',
          );
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led',
          );
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led',
          );
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
          .appendField(
            new Blockly.FieldVariable('LED'),
            'current_led',
          );
        this.appendValueInput('current_time')
          .setCheck('Number')
          .appendField(' Tiempo');
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
  }
  code(Blockly) {
    Blockly.JavaScript['led'] = (block) => {
      let pin = Blockly.JavaScript.valueToCode(
        block,
        'led_pin',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `new five.Led({pin:${pin},custom:{type:'LED',blink:0}})`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['blink'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led'),
        Blockly.Variables.NAME_TYPE,
      );
      let time = 0;
      let blink_period = block.getFieldValue('blink_period');
      let blink_time = block.getFieldValue('time');
      switch (blink_period) {
        case 'miliseconds':
          time = blink_time * 100;
          break;
        case 'seconds':
          time = blink_time * 1000;
          break;
        case 'minutes':
          time = blink_time * 60000;
          break;
      }
      let code = `${led}.blink(${time});
                          ${led}.custom.blink=${time};`;

      return code;
    };
    Blockly.JavaScript['turn_off_led'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led_off'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${led}.stop().off();`;
      return code;
    };

    Blockly.JavaScript['turn_on_led'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${led}.on();`;
      return code;
    };

    Blockly.JavaScript['stop_led'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led_stop'),
        Blockly.Variables.NAME_TYPE,
      );

      let code = `${led}.stop();`;
      return code;
    };

    // Definir que se necesita un puerto PWA
    Blockly.JavaScript['brightness_led'] = (block) => {
      let grade = block.getFieldValue('grado');
      let led = Blockly.JavaScript.valueToCode(
        block,
        'current_led',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `${led}.brightness(${grade});`;
      return code;
    };

    Blockly.JavaScript['led_pwa_fade_out'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${led}.fadeOut();`;
      return code;
    };
    Blockly.JavaScript['led_pwa_fade_in'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${led}.fadeIn();`;
      return code;
    };
    Blockly.JavaScript['led_pwa_pulse'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led'),
        Blockly.Variables.NAME_TYPE,
      );
      let code = `${led}.pulse();`;
      return code;
    };
    Blockly.JavaScript['led_pwa_pulse_time'] = (block) => {
      let led = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led'),
        Blockly.Variables.NAME_TYPE,
      );
      let time_value = Blockly.JavaScript.valueToCode(
        block,
        'current_time',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let time_type = block.getFieldValue('current_time');
      let time = 0;
      switch (time_type) {
        case 'miliseconds':
          time = time_value * 100;
          break;
        case 'seconds':
          time = time_value * 1000;
          break;
        case 'minutes':
          time = time_value * 60000;
          break;
      }
      let code = `${led}.pulse(
                              {easing: 'linear',
                              duration:${time},
                              cuePoints:[0, 0.2, 0.4, 0.6, 0.8, 1], 
                              keyFrames: [0, 10, 0, 50, 0, 255] 
                          });`;
      return code;
    };
  }
};

module.exports = ledComponent;
