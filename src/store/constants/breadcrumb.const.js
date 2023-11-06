export const BREADCRUMB_PATH_TYPE = {
  EDITOR: 'EDITOR',
  CHALLENGES: 'CHALLENGES',
  DASHBOARD: 'DASHBOARD',
  BUTTON: 'BUTTON',
  LED: 'LED',
  LED_RGB: 'LED_RGB',
  SWITCH: 'SWITCH',
  BUMPER: 'BUMPER',
  LCD: 'LCD',
  POTENTIOMETER: 'POTENTIOMETER',
  JOYSTICK: 'JOYSTICK',
  BUZZER: 'BUZZER',
  MATRIX_LED: 'MATRIX_LED',
  SERVO_MOTOR: 'SERVO_MOTOR',
  MOTION: 'MOTION',
  PROXIMITY: 'PROXIMITY',
  KEY_PAD: 'KEY_PAD',
  MOTOR: 'MOTOR',
  FULL_EDITOR: 'FULL_EDITOR',
};

export const BREADCRUMB_SUBTREE_PATH_TYPE = {
  MAIN: 'MAIN',
};

export const BREADCRUMB_TASK_TYPE = {
  TASKS: 'TASKS',
};

export const BREADCRUMBS_PATHS = {
  DASHBOARD: [
    {
      name: 'BREADCRUMBS.DASHBOARD.LABEL',
      position: 'End',
    },
  ],

  EDITOR: [
    {
      name: 'BREADCRUMBS.EDITOR.LABEL',
      position: 'End',
    },
  ],

  CHALLENGES: [
    {
      name: 'BREADCRUMBS.CHALLENGES.LABEL',
      position: 'End',
    },
  ],

  FULL_EDITOR: [
    {
      name: 'BREADCRUMBS.FULL_EDITOR.LABEL',
      position: 'End',
    },
  ],

  LED: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.LED.LABEL',
        position: 'End',
      },
    ],
    TASKS: {
      FIRST_TASK: [
        {
          name: 'BREADCRUMBS.CHALLENGES.LABEL',
          position: 'Breadcrumb',
          path: '/challenges',
        },

        {
          name: 'BREADCRUMBS.LED.LABEL',
          position: 'Breadcrumb',
          path: '/led',
        },

        {
          name: 'BREADCRUMBS.LED.TASKS.FIRST.TITLE',
          position: 'End',
        },
      ],

      SECOND_TASK: [
        {
          name: 'BREADCRUMBS.CHALLENGES.LABEL',
          position: 'Breadcrumb',
          path: '/challenges',
        },

        {
          name: 'BREADCRUMBS.LED.LABEL',
          position: 'Breadcrumb',
          path: '/led',
        },

        {
          name: 'BREADCRUMBS.LED.TASKS.SECOND.TITLE',
          position: 'End',
        },
      ],

      THIRD_TASK: [
        {
          name: 'BREADCRUMBS.CHALLENGES.LABEL',
          position: 'Breadcrumb',
          path: '/challenges',
        },

        {
          name: 'BREADCRUMBS.LED.LABEL',
          position: 'Breadcrumb',
          path: '/led',
        },

        {
          name: 'BREADCRUMBS.LED.TASKS.THIRD.TITLE',
          position: 'End',
        },
      ],
    },
  },

  LED_RGB: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.LED_RGB.LABEL',
        position: 'End',
      },
    ],
  },

  BUTTON: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.BUTTON.LABEL',
        position: 'End',
      },
    ],
  },

  SWITCH: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.SWITCH.LABEL',
        position: 'End',
      },
    ],
  },

  BUMPER: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.BUMPER.LABEL',
        position: 'End',
      },
    ],
  },

  LCD: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.LCD.LABEL',
        position: 'End',
      },
    ],
  },

  POTENTIOMETER: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.POTENTIOMETER.LABEL',
        position: 'End',
      },
    ],
  },

  JOYSTICK: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.JOYSTICK.LABEL',
        position: 'End',
      },
    ],
  },

  BUZZER: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.BUZZER.LABEL',
        position: 'End',
      },
    ],
  },

  MATRIX_LED: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.MATRIX_LED.LABEL',
        position: 'End',
      },
    ],
  },

  SERVO_MOTOR: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.SERVO_MOTOR.LABEL',
        position: 'End',
      },
    ],
  },

  MOTION: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.MOTION.LABEL',
        position: 'End',
      },
    ],
  },

  PROXIMITY: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.PROXIMITY.LABEL',
        position: 'End',
      },
    ],
  },

  KEY_PAD: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.KEY_PAD.LABEL',
        position: 'End',
      },
    ],
  },

  MOTOR: {
    MAIN: [
      {
        name: 'BREADCRUMBS.CHALLENGES.LABEL',
        position: 'Breadcrumb',
        path: '/challenges',
      },
      {
        name: 'BREADCRUMBS.MOTOR.LABEL',
        position: 'End',
      },
    ],
  },
};
