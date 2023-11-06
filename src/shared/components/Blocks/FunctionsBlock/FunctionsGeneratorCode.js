import { javascriptGenerator, Order } from 'blockly/javascript';
const moment = require('moment');
moment.locale('es');

javascriptGenerator.forBlock['timer'] = (block, generator) => {
  let timer_code = generator.statementToCode(block, 'timer_block');
  let timer_value = block.getFieldValue('current_value_time');
  let timer_type = block.getFieldValue('current_time');
  let time = 0;
  switch (timer_type) {
    case 'miliseconds':
      time = parseInt(timer_value) * 100;
      break;
    case 'seconds':
      time = parseInt(timer_value) * 1000;
      break;
    case 'minutes':
      time = parseInt(timer_value) * 60000;
      break;

    default:
      break;
  }
  let code = `setTimeout(() => {${timer_code}},${time});\n`;
  return code;
};
javascriptGenerator.forBlock['interval_time'] = (block, generator) => {
  let interval_time = block.getFieldValue('current_value_timer');
  let interval_type = block.getFieldValue('current_timer');
  let interval_code = generator.statementToCode(block, 'code_inteval');
  let time = 0;
  switch (interval_type) {
    case 'miliseconds':
      time = parseInt(interval_time) * 100;
      break;
    case 'seconds':
      time = parseInt(interval_time) * 1000;
      break;
    case 'minutes':
      time = parseInt(interval_time) * 60000;
      break;
    default:
      break;
  }
  let code = `setInterval(function(){${interval_code}},${time});\n`;
  return code;
};
javascriptGenerator.forBlock['getDay'] = (block) => {
  let code = `"${moment().format('dddd')}"`;
  return code;
};
javascriptGenerator.forBlock['getMonth'] = (block) => {
  let code = `"${moment().format('MMMM')}"`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['getYear'] = (block) => {
  let code = `"${moment().format('YYYY')}"`;
  return [code, Order.NONE];
};
javascriptGenerator.forBlock['getDate'] = (block) => {
  let code = `"${moment().format('MMMM/D/YYYY')}"`;
  return [code, Order.NONE];
};
