/**
 * @module M/control/AttributionsControl
 */
import AttributionsImplControl from 'impl/attributionscontrol';
import template from 'templates/attributions';

/**
 * @classdesc
 * Main constructor of the class. Creates a PluginControl
 * control
 */
export default class AttributionsControl extends M.Control {
  /**
   * @constructor
   * @extends {M.Control}
   * @api
   */
  constructor(position, closePanel) {
    if (M.utils.isUndefined(AttributionsImplControl)) {
      M.exception('La implementación usada no puede crear controles AttributionsControl');
    }
    const impl = new AttributionsImplControl();
    super(impl, 'Attributions');
    this.position = position;
    this.closePanel = closePanel;
  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api
   */
  createView(map) {
    this.map = map;
    return new Promise((success, fail) => {
      const html = M.template.compileSync(template, {
        vars: {
          icon: this.position === 'BR' || this.position === 'TR' ?
            'g-cartografia-flecha-derecha' : 'g-cartografia-flecha-izquierda',
        },
      });
      html.querySelector('#close-button').addEventListener('click', () => this.closePanel());
      this.html_ = html;

      success(html);
    });
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api
   */
  equals(control) {
    return control instanceof AttributionsControl;
  }
}