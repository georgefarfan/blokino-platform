const blocklyPlatform = require('./blocklyPlatform');

const url_documentation = 'http://blokino-platform.com/get_started';

const ledRGBComponent = class LedRGBComponent extends blocklyPlatform {
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

  createLEDRGB(programNodes, servomotorName, typeName) {
    programNodes.push({
      name: servomotorName,
      type: typeName ? typeName : '',
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createLEDRGB(
        programNodes,
        variable.id.name,
        'LED-RGB',
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
                    <category name="LEDS-RGB" colour="20">
                        <block type="led_rgb"></block>
                        <block type="color_led"></block>
                        <block type="blink"></block>
                    </category>
                    <sep gap="32"></sep>
                </category>
            </xml> `,
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
                        <sep gap="32"></sep>
                    </category>
                    <sep gap="32"></sep>  
                    <category name="Procedimientos" colour="270">
                        <category name="Crear Procedimiento" colour="270" custom="PROCEDURE"/>
                        <sep gap="32"></sep>
                        <category name="Procedimientos útiles" colour="270">
                            <block type="timer"/>
                        </category>
                    </category>
                    <sep gap="32"></sep>  
                    <category name="LEDS-RGB" colour="20">
                        <block type="led_rgb"></block>
                        <block type="blink"></block>
                        <block type = "color_led"></block>
                        <block type = "led_pwa_fade_out"></block>
                    </category>
                    <sep gap="32"></sep>  
                </category>
            </xml>`,
      },
    };
  }

  // SETUP

  block(Blockly) {
    Blockly.Blocks['led_rgb'] = {
      init: function () {
        this.appendValueInput('pin_red')
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/led-rgb.png',
              30,
              30,
              '*',
            ),
          )
          .setCheck('Number')
          .appendField('Crear LED-RGB')
          .appendField('Rojo');
        this.appendValueInput('pin_green')
          .setCheck('Number')
          .appendField('Verde');
        this.appendValueInput('pin_blue')
          .setCheck('Number')
          .appendField('Azul');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(30);
        this.setTooltip('Crea un Led RGB con su entrada.');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['led_rgb_intensity'] = {
      init: function () {
        this.appendDummyInput()
          .appendField('Intensidad LED-RGB')
          .appendField(
            new Blockly.FieldVariable('LED_RGB'),
            'current_led_rgb',
          )
          .appendField('Rango')
          .appendField(
            new Blockly.FieldNumber(0, 0, 100),
            'current_range_intensity',
          );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['color_led'] = {
      init: function () {
        this.appendValueInput('led')
          .setCheck(null)
          .appendField('Dar color')
          .appendField(
            new Blockly.FieldColour('#FF0000'),
            'led_color',
          )
          .appendField(' al Led');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip('Asigna color al led RGB.');
        this.setHelpUrl(url_documentation);
      },
    };
  }

  code(Blockly) {
    Blockly.JavaScript['led_rgb'] = (block) => {
      let pin_red = Blockly.JavaScript.valueToCode(
        block,
        'pin_red',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let pin_green = Blockly.JavaScript.valueToCode(
        block,
        'pin_green',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let pin_blue = Blockly.JavaScript.valueToCode(
        block,
        'pin_blue',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `new five.Led.RGB(
                  {
                      pins:{ 
                          red:${pin_red},
                          green:${pin_green},
                          blue:${pin_blue}
                      },custom:{
                          type:'LED-RGB',
                          blink:0,
                          color:''
                      }
                  }
              )`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.JavaScript['color_led'] = (block) => {
      let colour = block.getFieldValue('led_color');
      let led_rgb = Blockly.JavaScript.valueToCode(
        block,
        'led',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `${led_rgb}.color('${colour}');
                          ${led_rgb}.custom.color='${colour}';`;
      return code;
    };

    Blockly.JavaScript['led_rgb_intensity'] = (block) => {
      let led_rgb = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_led_rgb'),
        Blockly.Variables.NAME_TYPE,
      );
      let intensity = block.getFieldValue('current_range_intensity');
      let code = `${led_rgb}.intensity(
                                      ${intensity})`;
      return code;
    };
  }
};

module.exports = ledRGBComponent;
