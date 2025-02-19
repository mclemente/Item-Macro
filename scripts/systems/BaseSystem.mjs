export class BaseSystem {
  static system;

  static get system() {
    if (this.system)
      return this.system;

    throw new Error(`${this.constructor.name} must populate the #system property.`);
  }

  static set system(value) {
    throw new Error(`Attempted to override ${this.constructor.name}#system property with ${value} value. Property is read-only.`);
  }

  /**
   *
   * @returns {{rendered: {}, onChange: *[], render: {}}}
   */
  get sheetRenderHooks() {
    return {render: {}, rendered: {}, onChange: []};
  }

  registerSettings() {
    throw new Error(`${this.constructor.name} must implement the registerSettings method.`);
  }

  registerHooks() {
    throw new Error(`${this.constructor.name} must implement the registerHooks method.`);
  }

  registerSheetListeners() {
    throw new Error(`${this.constructor.name} must implement the registerSheetListeners method.`);
  }

  registerOther() {
    throw new Error(`${this.constructor.name} must implement the registerOther method.`);
  }

  /**
   * @param {Macro} macro
   * @returns {boolean}
   */
  systemValidation(macro) {
    return true;
  }
}