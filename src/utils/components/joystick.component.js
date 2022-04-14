const blocklyPlatform = require('./blocklyPlatform');

const joystickComponent = class JoystickComponent extends blocklyPlatform {
  validate(code, programNodes) {
    programNodes = [];
    code.forEach((node) => {
      // Declaracion de la variable
      if (node.type === 'VariableDeclaration') {
        validators.addVariable(node, programNodes);
      }
    });
    return programNodes;
  }

  createJoystick(programNodes, blockName, typeName) {
    programNodes.push({
      name: blockName,
      type: typeName ? typeName : '',
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      validators.createJoystick(
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
                        <sep gap="32"></sep>
                        <category name="Texto" colour="210">
                            <block type="text"></block>
                        </category>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Procedimientos" colour="270">
                        <category name="Crear Procedimiento" colour="270" custom="PROCEDURE"/> 
                    </category>
                    <sep gap="32"></sep>
                    <category name="LEDS" colour="20">
                        <block type="led"></block>
                        <block type="blink"></block>
                        <block type="stop_led"></block>
                        <block type="turn_off_led"></block>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Joystick" colour="150">
                        <category name="Crear Joystick" colour="150">
                            <block type="joystick"></block>
                        </category>
                        <sep gap="32"></sep>
                        <category name="Movimientos" colour="150">
                            <block type="joy_detected_movement"></block>
                            <block type="joy_movement_up"></block>
                            <block type="joy_movement_down"></block>
                            <block type="joy_movement_left"></block>
                            <block type="joy_movement_right"></block>
                        </category>
                    </category>
                    <sep gap="32"></sep>
                </category>
            </xml>
            `,
      },
    };
  }
};

module.exports = joystickComponent;
