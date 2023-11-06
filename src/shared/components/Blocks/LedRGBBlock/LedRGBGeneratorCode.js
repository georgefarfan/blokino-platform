import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['led_rgb'] = (block, generator) => {
  let pin_red = generator(block, 'pin_red', Order.ATOMIC);
  let pin_green = generator(block, 'pin_green', Order.ATOMIC);
  let pin_blue = generator(block, 'pin_blue', Order.ATOMIC);
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
  return [code, Order.NONE];
};

javascriptGenerator.forBlock['color_led'] = (block, generator) => {
  let colour = block.getFieldValue('led_color');
  let led_rgb = generator(block, 'led', Order.ATOMIC);
  let code = `${led_rgb}.color('${colour}');
                        ${led_rgb}.custom.color='${colour}';`;
  return code;
};

javascriptGenerator.forBlock['led_rgb_intensity'] = (block, generator) => {
  let led_rgb = block.getFieldValue(
    block.getFieldValue('current_led_rgb'),
    //   Blockly.Variables.NAME_TYPE,
  );

  let intensity = block.getFieldValue('current_range_intensity');
  let code = `${led_rgb}.intensity(${intensity})`;
  return code;
};
