import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['potentiometer'] = (block, generator) => {
  let pin = generator.valueToCode(block, 'potentiometer_pin', Order.ATOMIC);
  let code = `
                    new five.Sensor({
                        pin:${pin},
                        freq: 250,
                        custom:{
                            type: 'POTENTIOMETER',
                            pin:${pin}
                        }
                    })
            `;
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['potentiometer_blink'] = (block, generator) => {
  let potentiometer = block.getFieldValue(
    block.getFieldValue('current_potentiometer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let led = block.getFieldValue(block.getFieldValue('current_led')); // , Blockly.Variables.NAME_TYPE
  let code = `
                spinBlink(${led}); 
                function spinBlink(${led}){
                    let old_data;
                    ${potentiometer}.on('data',function(){
                        if(this.value !== old_data){
                            old_data = this.value;
                            ${led}.blink(this.value)
                        }
                    })
                }
                `;
  return code;
};
javascriptGenerator.forBlock['potentiometer_brightness'] = (block, generator) => {
  let potentiometer = block.getFieldValue(
    block.getFieldValue('current_potentiometer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let led = block.getFieldValue(block.getFieldValue('current_led')); // , Blockly.Variables.NAME_TYPE
  let code = `
                let old_data;
                ${potentiometer}.on('data',function(){
                    if(this.value / 10 !== old_data){
                        old_data = this.value / 10;
                        ${led}.brightness(this.value / 10)
                    }
                })
            `;
  return code;
};
javascriptGenerator.forBlock['potentiometer_brightness_list'] = (block, generator) => {
  let potentiometer = block.getFieldValue(
    block.getFieldValue('current_potentiometer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let leds = generator.valueToCode(block, 'current_list_leds', Order.ATOMIC);
  let code = `
                    let old_data;
                    ${potentiometer}.on('data',function(){
                        if(this.value / 10 !== old_data){
                            old_data = this.value / 10;
                            ${leds}.forEach(currentLed =>{
                                currentLed.brightness(this.value / 10)
                            })
                        }
                    })
                `;
  return code;
};
javascriptGenerator.forBlock['potentiometer_blink_list'] = (block, generator) => {
  let potentiometer = block.getFieldValue(
    block.getFieldValue('current_potentiometer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let leds = generator.valueToCode(block, 'current_list_leds', Order.ATOMIC);
  let code = `
            let old_data;
            ${potentiometer}.on('data',function(){
                if(this.value ===0 && this.value < 20){ 
                    ${leds}.forEach(currentLed =>{
                        currentLed.stop();
                        currentLed.off()
                    })
                } else{
                    if(this.value / 3 !== old_data){
                        old_data = this.value / 3;
                        ${leds}.forEach(currentLed =>{
                            currentLed.blink(this.value / 3)
                        })
                    }
                }
            })`;
  return code;
};

javascriptGenerator.forBlock['potentiometer_servo_movement'] = (block, generator) => {
  let potentiometer = block.getFieldValue(
    block.getFieldValue('current_potentiometer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let servo = block.getFieldValue(
    block.getFieldValue('current_servo'),
    // Blockly.Variables.NAME_TYPE,
  );
  let code = `
                ${servo}.to(0);
                ${potentiometer}.on('data', function(){
                    ${servo}.to(Math.round(this.value / 5))
                })`;
  return code;
};
javascriptGenerator.forBlock['potentiometer_servo_list_mov'] = (block, generator) => {
  let potentiometer = block.getFieldValue(
    block.getFieldValue('current_potentiometer'),
    // Blockly.Variables.NAME_TYPE,
  );
  let servos = generator.valueToCode(block, 'current_list_servos', Order.ATOMIC);
  let code = `
               ${servos}.forEach(currentServo =>{
                   currentServo.to(0)
                });
                ${potentiometer}.on('data',function(){
                    ${servos}.forEach(currentServo =>{
                        currentServo.to(Math.round(this.value / 5))
                    }) 
                })
               `;
  return code;
};
