/**
 * @module M/control/ZoomExtentControl
 */

import ZoomExtentImplControl from 'impl/zoomextentcontrol';
import template from 'templates/zoomextent';

export default class ZoomExtentControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api
   */
  constructor() {
    if (M.utils.isUndefined(ZoomExtentImplControl)) {
      M.exception('La implementación usada no puede crear controles ZoomExtentControl');
    }
    const impl = new ZoomExtentImplControl();
    super(impl, 'ZoomExtent');
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
    return new Promise((success, fail) => {
      const html = M.template.compileSync(template);
      success(html);
    });
  }

  /**
   * This function is called on the control activation
   *
   * @public
   * @function
   * @api
   */
  activate() {
    super.activate();
    this.getImpl().activateClick(this.map_);
  }
  /**
   * This function is called on the control deactivation
   *
   * @public
   * @function
   * @api
   */
  deactivate() {
    super.deactivate();
    this.getImpl().deactivateClick(this.map_);
  }

  /**
   * This function gets activation button
   *
   * @public
   * @function
   * @param {HTML} html of control
   * @api
   */
  getActivationButton(html) {
    return html.querySelector('.m-zoomextent button');
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
    return control instanceof ZoomExtentControl;
  }
}