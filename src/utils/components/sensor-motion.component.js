const blocklyPlatform = require('./blocklyPlatform');

const url_documentation = 'http://blokino-platform.com/get_started';
const sensorMotionComponent = class SensorMotionComponent extends blocklyPlatform {
  menu() {
    return {
      test_1: {
        code: `
        <xml id="blokino-toolbox">
            <category name="Bloques" colour="270">
                <sep gap="32"></sep>
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
                    <category name="Crear Procedimiento" colour="270" custom="PROCEDURE"></category>
                </category>
                <sep gap="32"></sep>
                <category name="LEDs" colour="20">
                    <block type="led"></block>
                    <block type="blink"></block>
                    <block type="stop_led"></block>
                </category>
                <sep gap="32"></sep>
                <category name="Sensor de Movimiento" colour="60">
                    <block type="motion_sensor_block"></block>
                    <block type="motion_sensor_fire"></block>
                    <block type="motion_sensor_out_fire"></block>
                </category>
                <sep gap="32"></sep>
            </category>
        </xml>
        `,
      },
    };
  }

  block(Blockly) {
    Blockly.Blocks['motion_sensor_block'] = {
      init: function () {
        this.appendValueInput('sensor_mov_pin')
          .appendField(
            new Blockly.FieldImage(
              '../../images/blocks/sensor-motion.png',
              40,
              40,
              '*',
            ),
          )
          .setCheck('Number')
          .appendField('Crear Sensor Movimiento');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(90);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motion_sensor_fire'] = {
      init: function () {
        this.appendStatementInput('code_motion_sensor')
          .setCheck(null)
          .appendField('Se detecto movimiento')
          .appendField(
            new Blockly.FieldVariable('SENSOR_MOVIMIENTO'),
            'current_motion',
          );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
    Blockly.Blocks['motion_sensor_out_fire'] = {
      init: function () {
        this.appendStatementInput('code_motion_sensor')
          .setCheck(null)
          .appendField('No se detecto movimiento')
          .appendField(
            new Blockly.FieldVariable('SENSOR_MOVIMIENTO'),
            'current_motion',
          );
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(90);
        this.setTooltip('');
        this.setHelpUrl(url_documentation);
      },
    };
  }
  code(Blockly) {
    Blockly.JavaScript['motion_sensor_block'] = (block) => {
      let pin = Blockly.JavaScript.valueToCode(
        block,
        'sensor_mov_pin',
        Blockly.JavaScript.ORDER_ATOMIC,
      );
      let code = `
                  new five.Motion(
                      {
                          pin:${pin},
                          custom:{
                              type:'SENSOR-MOTION'
                          }
                      })`;
      return [code, Blockly.JavaScript.ORDER_NONE];
    };
    Blockly.JavaScript['motion_sensor_fire'] = (block) => {
      let motion = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motion'),
        Blockly.Variables.NAME_TYPE,
      );
      let motion_code = Blockly.JavaScript.statementToCode(
        block,
        'code_motion_sensor',
      );
      let code = `
                      ${motion}.on('motionstart',function(){
                          ${motion_code}
                      })`;
      return code;
    };
    Blockly.JavaScript['motion_sensor_out_fire'] = (block) => {
      let motion = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('current_motion'),
        Blockly.Variables.NAME_TYPE,
      );
      let motion_code = Blockly.JavaScript.statementToCode(
        block,
        'code_motion_sensor',
      );
      let code = `
                  ${motion}.on('motionend',function(){
                      ${motion_code}
                  })`;
      return code;
    };
  }
};

module.exports = sensorMotionComponent;
