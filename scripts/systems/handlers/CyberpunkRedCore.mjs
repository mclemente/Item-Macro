import {BaseSystem} from "../BaseSystem.mjs";

export class CyberpunkRedCore extends BaseSystem {
  static system = 'cyberpunk-red-core';

  registerSettings() {}

  registerSheetListeners() {}

  registerOther() {}

  registerHooks() {}

  get sheetRenderHooks() {
    const {render, rendered, onChange} = super.sheetRenderHooks;

    return {render, rendered, onChange};
  }

  systemValidation(macro) {
    return true;
  }
}