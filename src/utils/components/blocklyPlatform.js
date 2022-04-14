const blocklyPlatform = class BlocklyPlatform {
  constructor() {
    this.COLOURS = [
      '#FFFFFF',
      '#FF0000',
      '#008000',
      '#0000FF',
      '#FFFF00',
      '#00FFFF',
      '#FF00FF',
      '#33A8FF',
      '#C907DC',
      '#6D1414',
      '#082975',
      '#F4C121',
    ];
    this.ZOOM = {
      controls: true,
      wheel: true,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
      startScale: 1.3,
    };
    this.GRID = {
      spacing: 20,
      length: 5,
      colour: '#9E9E9E',
      snap: true,
    };
    this.PAGES = {
      blokino: 'http://blokino-platform.com/blokino',
      documentation: 'http://blokino-platform.com/get_started',
      frietzing: 'http://fritzing.org/download/',
      nodebot: 'https://nodebots.io/',
    };
  }

  beautify(code) {
    return {
      indent_size: 4,
      space_in_empty_paren: true,
      end_with_newline: true,
      preserve_newlines: false,
    };
  }

  mirror(code) {
    return {
      value: code,
      mode: 'javascript',
      lineNumbers: true,
      readOnly: true,
      tabSize: 4,
      theme: 'dracula',
    };
  }
};

module.exports = blocklyPlatform;
