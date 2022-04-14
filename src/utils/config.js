'use strict';

/**
 * @author jorge Farfan Coaguila
 * @description Este módulo contiene datos de configuración.
 */

const // Components
  programComponent = require('./blocks/app-blocks'),
  bumperComponent = require('./blocks/bumper-blocks'),
  proximityComponent = require('./blocks/proximity-blocks'),
  switchComponent = require('./blocks/switch-blocks'),
  microfonoComponent = require('./blocks/microphone-blocks'),
  motorComponent = require('./blocks/motor-blocks'),
  // Base
  ProgramCodeBase = require('../utils/program/blokino-program'),
  // Libs
  { spawn } = require('child_process'),
  platform = require('../../resources/libs/config/platform'),
  { BrowserWindow } = require('electron'),
  shell = require('electron').shell,
  path = require('path'),
  BLOCKLY_PLATFORM = require('./components/blocklyPlatform'),
  // Components
  LED_COMPONENT = require('./components/led.component'),
  LED_RGB_COMPONENT = require('./components/led-rgb.component'),
  BUTTON_COMPONENT = require('./components/button.component'),
  LCD_COMPONENT = require('./components/lcd.component'),
  JOYSTICK_COMPONENT = require('./components/joystick.component'),
  BUZZER_COMPONENT = require('./components/joystick.component'),
  VARIABLE_TYPE_COMPONENT = require('./components/variable-type.component'),
  SERVO_COMPONENT = require('./components/servo.component'),
  SENSOR_PROX_COMPONENT = require('./components/sensor-prox.component'),
  POTENTIOMETER_COMPONENT = require('./components/potentiometer.component'),
  MATRIX_LED_COMPONENT = require('./components/matrix.component'),
  SENSOR_MOTION_COMPONENT = require('./components/sensor-motion.component'),
  KEY_PAD_COMPONENT = require('./components/keypad.component'),
  MOTOR_COMPONENT = require('./components/motor.component'),
  EXPERT_COMPONENT = require('./components/expert.component'),
  Function = require('./components/function.component');

let aboutPage,
  instanceHelpPage = 0;

const bloPlatform = new BLOCKLY_PLATFORM(),
  Led = new LED_COMPONENT(),
  LedRGB = new LED_RGB_COMPONENT(),
  button = new BUTTON_COMPONENT(),
  lcd = new LCD_COMPONENT(),
  joystick = new JOYSTICK_COMPONENT(),
  buzzer = new BUZZER_COMPONENT(),
  variableType = new VARIABLE_TYPE_COMPONENT(),
  servo = new SERVO_COMPONENT(),
  sensorProx = new SENSOR_PROX_COMPONENT(),
  potentiometer = new POTENTIOMETER_COMPONENT(),
  matrixLeds = new MATRIX_LED_COMPONENT(),
  sensorMotion = new SENSOR_MOTION_COMPONENT(),
  keyPad = new KEY_PAD_COMPONENT(),
  motor = new MOTOR_COMPONENT(),
  expert = new EXPERT_COMPONENT(),
  functionComponent = new FUNCTION_COMPONENT();

let settings = {
  urls: () => {
    return bloPlatform.PAGES;
  },
  createPageHelp: () => {
    return [
      {
        label: 'Archivo',
        submenu: [
          {
            role: 'minimize',
          },
          {
            role: 'close',
          },
        ],
      },
      {
        label: 'Editar',
        submenu: [
          {
            role: 'undo',
          },
          {
            role: 'redo',
          },
          {
            type: 'separator',
          },
          {
            role: 'cut',
          },
          {
            role: 'copy',
          },
          {
            role: 'paste',
          },
          {
            role: 'pasteandmatchstyle',
          },
          {
            role: 'delete',
          },
          {
            role: 'selectall',
          },
        ],
      },
      {
        label: 'Vista',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click(item, focusedWindow) {
              if (focusedWindow) focusedWindow.reload();
            },
          },
          {
            type: 'separator',
          },
          {
            label: 'Toggle Developer Tools',
            accelerator:
              process.platform === 'darwin'
                ? 'Alt+Command+I'
                : 'Ctrl+Shift+I',
            click(item, focusedWindow) {
              if (focusedWindow)
                focusedWindow.webContents.toggleDevTools();
            },
          },
          {
            type: 'separator',
          },
          {
            role: 'resetzoom',
          },
          {
            role: 'zoomin',
          },
          {
            role: 'zoomout',
          },
          {
            type: 'separator',
          },
          {
            role: 'togglefullscreen',
          },
        ],
      },
      {
        label: 'Ayuda',
        submenu: [
          {
            label: 'Acerca de Blokino',
            click() {
              settings.openPageHelp();
            },
          },
          {
            label: 'Página web',
            click() {
              if (platform.arch().includes('win')) {
                shell.openExternal(bloPlatform.PAGES.blokino);
              } else {
                spawn('chromium-browser', [
                  '--no-sandbox',
                  bloPlatform.PAGES.blokino,
                ]);
              }
            },
          },
          {
            label: 'Node-Bots',
            click() {
              if (platform.arch().includes('win')) {
                shell.openExternal(bloPlatform.PAGES.nodebot);
              } else {
                spawn('chromium-browser', [
                  '--no-sandbox',
                  bloPlatform.PAGES.nodebot,
                ]);
              }
            },
          },
          {
            label: 'Frietzing',
            click() {
              if (platform.arch().includes('win')) {
                shell.openExternal(bloPlatform.PAGES.frietzing);
              } else {
                spawn('chromium-browser', [
                  '--no-sandbox',
                  bloPlatform.PAGES.frietzing,
                ]);
              }
            },
          },
        ],
      },
    ];
  },
  openPageHelp: () => {
    instanceHelpPage++;
    if (instanceHelpPage == 1) {
      aboutPage = new BrowserWindow({
        resizable: false,
        height: 400,
        width: 360,
        modal: true,
        icon: path.join(__dirname, '../images/blokino.png'),
      });
      aboutPage.setMenuBarVisibility(false);
      aboutPage.loadFile('./src/pages/help/help-about.html');
      aboutPage.on('closed', () => {
        instanceHelpPage = 0;
      });
    }
  },
  beautify: (code) => {
    return bloPlatform.beautify(code);
  },
  codeMirror: (code) => {
    return bloPlatform.mirror(code);
  },
  blockly: (Blockly, typeToolBar) => {
    // Defino configuraciones globales para Blockly
    Blockly.FieldColour.COLOURS = bloPlatform.COLOURS;
    Blockly.FieldColour.COLUMNS = 3;
    Blockly.HSV_SATURATION = 0.5;
    Blockly.HSV_VALUE = 0.7;

    return settings.selectToolBox(typeToolBar);
  },
  selectToolBox: (typeToolBar) => {
    switch (typeToolBar) {
      case 'Expert':
        return {
          toolbox: expert.menu().main.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
        };
        break;
      case 'Led':
        return {
          toolbox: Led.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'LedRGB':
        return {
          toolbox: LedRGB.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'Buzzer':
        return {
          toolbox: buzzer.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'Button':
        return {
          toolbox: button.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'KeyPad':
        return {
          toolbox: keyPad.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'Motors':
        return {
          toolbox: motor.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'ScreenMatrix':
        return {
          toolbox: matrixLeds.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'SensorMov':
        return {
          toolbox: sensorMotion.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'SensorProx':
        return {
          toolbox: sensorProx.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'Servomotor':
        return {
          toolbox: servo.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'LCD':
        return {
          toolbox: lcd.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'Joystick':
        return {
          toolbox: joystick.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
      case 'Potentiometer':
        return {
          toolbox: potentiometer.menu().test_1.code,
          zoom: bloPlatform.ZOOM,
          grid: bloPlatform.GRID,
          trashcan: true,
          comments: false,
        };
        break;
    }
  },
  challenges: (Blockly, test, challengeType) => {
    Blockly.FieldColour.COLOURS = bloPlatform.COLOURS;
    Blockly.FieldColour.COLUMNS = 3;
    Blockly.HSV_SATURATION = 0.8;
    Blockly.HSV_VALUE = 0.8;
    switch (challengeType) {
      case 'ChallengeLED':
        switch (test) {
          case 'test_1':
            return {
              toolbox: Led.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
              comments: false,
            };
            break;
          case 'test_2':
            return {
              toolbox: Led.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
              comments: false,
            };
            break;
          case 'test_3':
            return {
              toolbox: Led.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
              comments: false,
            };
            break;
          case 'test_4':
            return {
              toolbox: Led.menu().test_4.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
              comments: false,
            };
            break;
        }
        break;
      case 'ChallengeLEDRGB':
        switch (test) {
          case 'test_1':
            return {
              toolbox: LedRGB.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: LedRGB.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeBUTTON':
        switch (test) {
          case 'test_1':
            return {
              toolbox: button.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: button.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: button.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeBUZZER':
        switch (test) {
          case 'test_1':
            return {
              toolbox: buzzer.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: buzzer.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeLCD':
        switch (test) {
          case 'test_1':
            return {
              toolbox: lcd.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: lcd.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: lcd.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeJOYSTICK':
        switch (test) {
          case 'test_1':
            return {
              toolbox: joystick.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeKEYPAD':
        switch (test) {
          case 'test_1':
            return {
              toolbox: Led.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: Led.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: Led.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_4':
            return {
              toolbox: Led.menu().test_4.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeMATRIXLEDS':
        switch (test) {
          case 'test_1':
            return {
              toolbox: matrixLeds.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: matrixLeds.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: matrixLeds.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeSENSORMOTION':
        switch (test) {
          case 'test_1':
            return {
              toolbox: sensorMotion.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeMOTORS':
        switch (test) {
          case 'test_1':
            return {
              toolbox: Led.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: Led.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: Led.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_4':
            return {
              toolbox: Led.menu().test_4.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengePOTENTIOMETER':
        switch (test) {
          case 'test_1':
            return {
              toolbox: potentiometer.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: potentiometer.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengePROXIMITY':
        switch (test) {
          case 'test_1':
            return {
              toolbox: Led.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: Led.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: Led.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_4':
            return {
              toolbox: Led.menu().test_4.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
      case 'ChallengeSERVOMOTORS':
        switch (test) {
          case 'test_1':
            return {
              toolbox: servo.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: servo.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: servo.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;

      case 'ChallengeSWITCH':
        switch (test) {
          case 'test_1':
            return {
              toolbox: Led.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: Led.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: Led.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_4':
            return {
              toolbox: Led.menu().test_4.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;

      case 'TutorialVariableTypeData':
        switch (test) {
          case 'test_1':
            return {
              toolbox: variableType.menu().test_1.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_2':
            return {
              toolbox: variableType.menu().test_2.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_3':
            return {
              toolbox: variableType.menu().test_3.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
          case 'test_4':
            return {
              toolbox: variableType.menu().test_4.code,
              zoom: bloPlatform.ZOOM,
              grid: bloPlatform.GRID,
              trashcan: true,
            };
            break;
        }
        break;
    }
  },
  cleanWorkspace: (Blockly, workspace) => {
    let xml = Blockly.Xml.textToDom(
      ProgramCodeBase.application().program,
    );
    Blockly.mainWorkspace.clear();
    Blockly.Xml.domToWorkspace(xml, workspace);
  },
  loadComponents: (Blockly) => {
    Function.block(Blockly);
    Function.code(Blockly);
    Led.block(Blockly);
    Led.code(Blockly);
    LedRGB.block(Blockly);
    LedRGB.code(Blockly);
    button.block(Blockly);
    button.code(Blockly);
    potentiometer.block(Blockly);
    potentiometer.code(Blockly);
    joystick.block(Blockly);
    joystick.code(Blockly);
    buzzer.block(Blockly);
    buzzer.code(Blockly);
    keyPad.block(Blockly);
    keyPad.code(Blockly);
    matrixLeds.block(Blockly);
    matrixLeds.code(Blockly);
    servo.block(Blockly);
    servo.code(Blockly);
    sensorMotion.block(Blockly);
    sensorMotion.code(Blockly);
    lcd.block(Blockly);
    lcd.code(Blockly);
    motor.block(Blockly);
    motor.code(Blockly);

    /**
     * TODO Migrate this setup to class Component
     */
    programComponent.block(Blockly);
    programComponent.code(Blockly);
    bumperComponent.block(Blockly);
    bumperComponent.code(Blockly);
    switchComponent.block(Blockly);
    switchComponent.code(Blockly);
    proximityComponent.block(Blockly);
    proximityComponent.code(Blockly);
    microfonoComponent.block(Blockly);
    microfonoComponent.code(Blockly);
  },
};
module.exports = settings;
