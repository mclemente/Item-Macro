import {BaseSystem} from "../BaseSystem.mjs";
import {settings} from "../../settings.mjs";

export class DND5e extends BaseSystem {
  static system = 'dnd5e';

  registerSettings() {}

  registerSheetListeners() {}

  registerOther() {}

  registerHooks() {
    Hooks.on("dnd5e.preUseItem", this.preUseItem);
  }

  get sheetRenderHooks() {
    const {render, rendered, onChange} = super.sheetRenderHooks;

    return {render, rendered, onChange};
  }

  systemValidation(macro) {
    if (foundry.utils.isNewerVersion("3.0.0", game.system.version)) {
      ui.notifications.warn("itemacro.dnd5e.systemDeprecationv3", {localize: true, permanent: true});

      return false;
    }

    return true;
  }

  preUseItem(item, config, options) {
    if (options.skipItemMacro === true)
      return true;

    if (!item.hasMacro())
      return true;

    if (!settings.value("defaultmacro"))
      return true;

    item.executeMacro({config, options}).then((result) => {
      if (result === true) {
        options.skipItemMacro = true;
        item.use(config, options);
      }
    });

    return false;
  }
}