const blocklyPlatform = require('./blocklyPlatform');

const potentiometerComponent = class PotentiometerComponent extends blocklyPlatform {
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

  createPotentiometer(programNodes, blockName, typeName) {
    programNodes.push({
      name: blockName,
      type: typeName ? typeName : '',
    });
  }

  addVariable(node, programNodes) {
    node.declarations.forEach((variable) => {
      this.createPotentiometer(
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
                        <sep gap="32"></sep>
                        <category name="Texto" colour="210">
                            <block type="text"></block>
                        </category>
                    </category>
                    <sep gap="32"></sep>
                    <category name="LEDS" colour="20">
                        <block type="led"></block>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Potenciometro" colour="240">
                        <block type="potentiometer" />
                        <block type="potentiometer_blink" />
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
                    <category name="Variables" custom="VARIABLE" colour="210">
                    </category>
                    <sep gap="32"></sep> 
                    <category name="Tipos de datos" colour="120">
                        <category name="Número" colour="210">
                            <block type="math_number">
                                <field name="NUM"></field>
                            </block>
                        </category> 
                        <category name="Texto" colour="210">
                            <block type="text"></block>
                        </category>
                        <sep gap="32"></sep>
                    </category> 
                    <sep gap="32"></sep>
                    <category name="Procedimientos" colour="270">
                        <category name="Crear Procedimiento" colour="270" custom="PROCEDURE">
                        </category>
                    </category>
                    <sep gap="32"></sep>
                    <category name="Servomotor" colour="180">
                        <block type="servo_motor"></block>
                    </category>
                    <sep gap="32"></sep> 
                    <category name="Potenciometro" colour="240">
                        <block type="potentiometer"/>
                        <block type="potentiometer_servo_movement"/>
                    </category>
                    <sep gap="32"></sep> 
                </category>
            </xml>
        `,
      },
    };
  }
};

module.exports = potentiometerComponent;
