/* eslint-disable no-console */
/**
 * @module M/control/TransparencyControl
 */

import TransparencyImplControl from 'impl/transparencycontrol';
import template from 'templates/transparency';

export default class TransparencyControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor(values) {
    // 1. checks if the implementation can create PluginControl
    if (M.utils.isUndefined(TransparencyImplControl)) {
      M.exception('La implementación usada no puede crear controles TransparencyControl');
    }
    // 2. implementation of this control
    const impl = new TransparencyImplControl();
    super(impl, 'Transparency');

    /**
     * Position plugin
     * @public
     * @type {String}
     */
    this.pluginOnLeft = values.pluginOnLeft;
    /**
     * All layers
     * @public
     * @public {Array}
     */
    this.layers = values.layers;
    /**
     * Radius selected
     * @private
     * @type {Number}
     */
    this.radius = values.radius;
    /**
     * Layer selected
     * @public
     * @type {M.layer}
     */
    this.layerSelected = null;

    /**
     * Template
     * @public
     * @type { HTMLElement }
     */
    this.template = null;
  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {
    this.map = map;
    return new Promise((success, fail) => {
      this.layers = this.transformToLayers(this.layers);

      if (this.pluginOnLeft) {
        document.querySelector('.m-panel.m-plugin-transparency').querySelector('.m-panel-btn.icon-gps4').addEventListener('click', (evt) => {
          let buttonOpened = document.querySelector('.m-panel.m-plugin-transparency.opened');
          if (buttonOpened !== null) {
            buttonOpened = buttonOpened.querySelector('.m-panel-btn.g-cartografia-flecha-izquierda');
          }
          if (buttonOpened && this.pluginOnLeft) {
            buttonOpened.classList.add('opened-left');
          }
        });
      }

      let names = this.layers.map(function(layer) {
        return layer instanceof Object ? { name: layer.name } : { name: layer };
      });
      let options = '';
      if (names.length > 1) {
        options = { jsonp: true, vars: { options: names } };
      }

      this.template = M.template.compileSync(template, options);

      // Radius
      this.template.querySelector('#input-transparent-radius').value = this.radius;
      this.template.querySelector('#input-transparent-radius').addEventListener('change', (evt) => {
        this.radius = Number(evt.target.value);
        this.getImpl().setRadius(this.radius);
      });

      if (this.layers.length == 0) {
        M.dialog.error('No se ha especificado una capa válida sobre la que aplicar el efecto');
      } else {
        // Botón efecto transparencia      
        this.template.querySelector('#m-transparency-transparent').addEventListener('click', (evt) => {

          if (this.layerSelected === null) this.layerSelected = this.layers[0];
          if (document.getElementsByClassName('buttom-pressed').length == 0) {
            this.template.querySelector('#m-transparency-transparent').classList.add('buttom-pressed');
            this.getImpl().effectSelected(this.layerSelected, this.radius);
            if (names.length > 1) this.activateElements();
          } else {
            this.template.querySelector('#m-transparency-transparent').classList.remove('buttom-pressed');
            this.removeEffects();
            this.layerSelected.setVisible(false);
            if (names.length > 1) this.deactivateElements();
          }

        });

        if (options !== '') {
          this.deactivateElements();
          this.template.querySelector('select').addEventListener('change', (evt) => {
            this.layerSelected.setVisible(false);
            this.removeEffects();
            const layer = this.layers.filter(function(layer) {
              return layer.name === evt.target.value
            });
            this.layerSelected = layer[0];
            this.getImpl().effectSelected(this.layerSelected, this.radius);
          });
        }
      }
      success(this.template);
    });
  }

  /**
   * Activate Select/Input
   *
   * @public
   * @function
   * @api stable
   */
  activateElements() {
    this.template.querySelector('select').disabled = false;
    this.template.querySelector('input').disabled = false;
  }

  /**
   * Deactivate Select/Input
   *
   * @public
   * @function
   * @api stable
   */
  deactivateElements() {
    this.template.querySelector('select').disabled = true;
    this.template.querySelector('input').disabled = true;
  }


  /**
   * This function is called to remove the effects
   *
   * @public
   * @function
   * @api stable
   */
  removeEffects() {
    this.getImpl().removeEffects();
  }

  /**
   * This function transform string to M.Layer
   *
   * @public
   * @function
   * @api stable
   * @param {string}
   * @return
   */
  transformToLayers(layers) {
    const transform = layers.map(function(layer) {
      let newLayer = null;
      if (!(layer instanceof Object)) {
        if (layer.indexOf('*') >= 0) {
          const urlLayer = layer.split('*');
          if (urlLayer[0].toUpperCase() == 'WMS') {
            newLayer = new M.layer.WMS({
              url: urlLayer[2],
              name: urlLayer[3]
            });
            this.map.addLayers(newLayer);
          } else if (urlLayer[0].toUpperCase() == 'WMTS') {
            newLayer = new M.layer.WMTS({
              url: urlLayer[2],
              name: urlLayer[3]
            });
            this.map.addLayers(newLayer);
          }
        } else {
          const layerByName = this.map.getLayers().filter(l => layer.includes(l.name))[0];
          newLayer = this.isValidLayer(layerByName) ? layerByName : null;
        }
      } else if (layer instanceof Object) {
        const layerByObject = this.map.getLayers().filter(l => layer.name.includes(l.name))[0];
        newLayer = this.isValidLayer(layerByObject) ? layerByObject : null;
      }
      if (newLayer !== null) {
        newLayer.displayInLayerSwitcher = false;
        newLayer.setVisible(false);
        return newLayer
      } else {
        this.layers.remove(layer);
      }
    }, this);
    return (transform[0] === undefined) ? [] : transform;
  }

  /**
   * This function transform string to M.Layer
   *
   * @public
   * @function
   * @api stable
   * @param {string}
   * @return {Boolean}
   */
  isValidLayer(layer) {
    return layer.type === 'WMTS' || layer.type === 'WMS';
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   * @return {Boolean}
   */
  equals(control) {
    return control instanceof TransparencyControl;
  }
}