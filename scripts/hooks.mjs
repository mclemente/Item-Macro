import {settings} from './settings.mjs';
import {helper} from './helper.mjs';
import {ItemMacroConfig} from './ItemMacroConfig.mjs';
import {SystemManager} from "./systems/SystemManager.mjs";

Hooks.on('init', () => {
  SystemManager.registerHandlers();
  settings.register();
});

Hooks.on('ready', helper.register);

Hooks.on('renderItemSheet', ItemMacroConfig._init);

Hooks.on('getItemDirectoryEntryContext', (html, contextOptions) => helper.addContext(contextOptions, "Directory"));
