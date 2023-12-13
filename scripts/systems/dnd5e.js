import { logger } from "../logger.js";
import { settings } from "../settings.js";

export function register_helper(){
    logger.info(`Registering DND5E Helpers`);
    
    /*
        Override
    */
    const itemMacroUseItem = function(name) {
        let actor;
        const speaker = ChatMessage.getSpeaker();
        if ( speaker.token ) actor = game.actors.tokens[speaker.token];
        actor ??= game.actors.get(speaker.actor);
        if ( !actor ) return ui.notifications.warn(game.i18n.localize("MACRO.5eNoActorSelected"));

        const collection = actor.items;
        const nameKeyPath = "name";

        // Find the item in collection
        const documents = collection.filter(i => foundry.utils.getProperty(i, nameKeyPath) === name);
        const type = game.i18n.localize(`DOCUMENT.Item`);
        if ( documents.length === 0 ) {
            return ui.notifications.warn(game.i18n.format("MACRO.5eMissingTargetWarn", { actor: actor.name, type, name }));
        }
        if ( documents.length > 1 ) {
            ui.notifications.warn(game.i18n.format("MACRO.5eMultipleTargetsWarn", { actor: actor.name, type, name }));
        }

        const item = documents[0];
        // Trigger the item usage
        if ( item.hasMacro() && settings.value("defaultmacro") ) {
            return item.executeMacro();
        }
        return item.use();
    }

    if ( settings.isV10 ) {
        dnd5e.documents = { ...dnd5e.documents };
        dnd5e.documents.macro = { ...dnd5e.documents.macro };
        dnd5e.documents.macro.rollItem = itemMacroUseItem;
    }
    else {
        console.log(game.i18n.localize("itemacro.dnd5e.v9deprecation"));
    }
}

export function sheetHooks()
{
  const renderSheets = {
    //Core
    ActorSheet5eCharacter: ".item .item-image",
    ActorSheet5eVehicle: ".item .item-image",
    ActorSheet5eNPC: ".item .item-image",
    //BetterNPC
    BetterNPCActor5eSheet: ".item .rollable",
    BetterNPCActor5eSheetDark: ".item .rollable",
    ActorSheet5eCharacterDark: ".item .item-image",
    //DarkSheet
    DarkSheet: ".item .item-image",
    ActorNPC5EDark: ".item .item-image",
    DynamicActorSheet5e: ".item .item-image",
    //DNDBeyond
    DNDBeyondCharacterSheet5e: ".item .item-name .item-image",
    //Tidy
    //Tidy5eSheet:  ".item .item-image",
    //Tidy5eNPC: ".item .item-image",
    //Monster Blocks
    MonsterBlock5e: ".item .item-name",
  };
  const renderedSheets = {
    Alt5eSheet : ".item .item-image", 
    Tidy5eSheet : ".item .item-image",
  };

  return { render : renderSheets, rendered : renderedSheets };
}
/**
 * Provides module compatibility with the new Tidy 5e Sheets: https://github.com/kgar/foundry-vtt-tidy-5e-sheets/
 */
export function applyTidy5eCompatibility() {
  /**
   * When the user clicks the use item button, allow Item Macro to override, based on settings.
   */
  Hooks.on("tidy5e-sheet.actorPreUseItem", (item, config, options) => {
    const shouldExecuteMacro =
      settings.value("charsheet") &&
      item.hasMacro();
    if (shouldExecuteMacro) {
      item.executeMacro();
      return false;
    }
  });

  /**
   * When the user right clicks the use item button, allow Item Macro to hook in and add behaviors, based on settings.
   */
  Hooks.on("tidy5e-sheet.actorItemUseContextMenu", (item, options) => {
    const shouldExecuteMacro =
      settings.value("charsheet") &&
      settings.value("click") &&
      item.hasMacro();
    if (shouldExecuteMacro) {
      item.executeMacro();
      options.event.preventDefault();
      options.event.stopPropagation();
    }
  });
}
