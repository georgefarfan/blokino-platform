export const EDITOR_WORKSPACE = {
  TOOLBOX_XML: `
    <xml xmlns="http://www.w3.org/1999/xhtml">

      <category name="Program"   colour="210">
          <block type="program" id="blokino-app" movable="false" x="110" y="270">
              <field name="current_name">Nombre del programa ...</field>
          </block>
      </category>

      <category name="Procedimientos" colour="270">
          <category name="Crear Procedimiento" colour="300" custom="PROCEDURE"></category>
          <sep gap="32"></sep>
          <category name="Mensajes de ayuda" colour="60">
              <block type="block_message"></block>
          </category>
      </category>

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

            <block type="turn_off_led"></block>
            <block type="turn_on_led"></block>


            <block type="stop_led"></block>
            <block type="led_pwa_fade_out"></block>


            <block type="led_pwa_fade_in"></block>
            <block type="led_pwa_pulse"></block>


                   <block type="led_pwa_pulse_time"></block>
            <block type="brightness_led"></block>
        </category>
        
        
        <sep gap="32"></sep>
    </category>
    </xml>
  `,
  BUTTON: '',
  LED: `
  <xml xmlns="http://www.w3.org/1999/xhtml">

    <category name="Program"   colour="210">
        <block type="program" id="blokino-app" movable="false" x="110" y="270">
            <field name="current_name">Nombre del programa ...</field>
        </block>
    </category>

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

            <block type="turn_off_led"></block>
            <block type="turn_on_led"></block>

            <block type="stop_led"></block>
            <block type="led_pwa_fade_out"></block>

            <block type="led_pwa_fade_in"></block>
            <block type="led_pwa_pulse"></block>

            <block type="led_pwa_pulse_time"></block>
            <block type="brightness_led"></block>
        </category>
        
        <sep gap="32"></sep>

    </category>
  </xml>
`,
  CHALLENGES: {
    LED: {
      CHALLENGE_1: '',
      CHALLENGE_2: '',
      CHALLENGE_3: '',
    },
  },
};
