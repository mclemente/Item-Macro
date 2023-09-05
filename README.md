# Item Macro
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Foundry-Workshop/Item-Macro?style=for-the-badge) ![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2FFoundry-Workshop%2FItem-Macro%2Fmaster%2Fmodule.json&label=Foundry%20Min%20Version&query=$.compatibility.minimum&colorB=orange&style=for-the-badge) ![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2FFoundry-Workshop%2FItem-Macro%2Fmaster%2Fmodule.json&label=Foundry%20Verified&query=$.compatibility.verified&colorB=orange&style=for-the-badge)  
![License](https://img.shields.io/github/license/Foundry-Workshop/Item-Macro?style=for-the-badge) ![GitHub Releases](https://img.shields.io/github/downloads/Foundry-Workshop/Item-Macro/latest/module.zip?style=for-the-badge) ![GitHub All Releases](https://img.shields.io/github/downloads/Foundry-Workshop/Item-Macro/module.zip?style=for-the-badge&label=Downloads+total)  
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white&link=https%3A%2F%2Fdiscord.gg%2FXkTFv8DRDc)](https://discord.gg/XkTFv8DRDc)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/foundryworkshop)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/forien)

This is a FoundryVTT module for the **DnD5e, WFRPP4e, SFRPG, SWADE, Old-School Essentials, Dungeon World, and Simple Worldbuilding** (as of now) systems. It allow macros to be saved inside of an item and for various different ways to execute macros.  

You can execute the macro from the "item" class using the executeMacro(...args) function, from the character sheet (if the settings are satisfied to do so), from the hotbar using the default rollItemMacro function for your system (if the settings are satisfied to do so), or from token-action-hud.

# Installation

1. Inside Foundry's Configuration and Setup screen, go to **Add-on Modules**
2. Click "Install Module"
3. Install module using one of the two approaches:
  - Search for the Module and install using the Module Manager, or
  - In the Manifest URL field paste: `https://github.com/Foundry-Workshop/Item-Macro/releases/latest/download/module.json`.

# Usage

Once activated, open an Item Sheet, click on the Item Macro button to open the Macro window.
![In Action](https://i.gyazo.com/a973845c112317bbef57691cfc657cb0.gif)

Various different settings will change the way Item Macro interacts with the game server.
![In Action](https://i.gyazo.com/34c41d778628a1b35adf11e0810e080c.png)

With no settings enabled, you can still execute the macro that is saved in the item, perfect for macros!
![In Action](https://i.gyazo.com/26ab88645e554ac5b7522a4e8b926e3c.gif)

Added context menu support allowing GM users to mass update item-macros on like named items throughout the game!
(the context menu is on items in the game directory, will update all item-macros in the item-directory, actor items, and token items)

## Added Item Functionality

1. Item.hasMacro() => returns boolean on if the item has a macro command
2. Item.getMacro() => returns Macro instance, if the item has a macro command
3. Item.setMacro(Macro) => overwrites and saves given Macro to the Item
4. Item.executeMacro(...args) => executes Macro command, giving `item`, `speaker`, `actor`, `token`, `character`, and `event` constants. This is recognized as the macro itself. Pass an event as the first argument.

## Added System Functionality

### Simple Worldbuilding

* Item names on actor sheets have been converted to rollable links that will execute the macro attached to the item when the "Enable Character Sheet Hook" is enabled.
* Item names will now highlight on hover to indicate this added functionality.
* Dragging an item to the hotbar will create a macro utilizing an added system helper `game.worldbuilding.rollItemMacro(itemNameString)`.
* Dropping formula-type item attributes will continue to create the default `new Roll` system macro.

# Contact

For questions, feature requests, or bug reports, feel free to contact me on the Foundry Discord (`forien`) or open an issue here directly.

You are also welcome to [join my Discord](https://discord.gg/XkTFv8DRDc) where you can talk about this and other Foundry modules.

# Support

If you wish to support module's development, please consider [becoming my Patreon](https://www.patreon.com/foundryworkshop) or donating [through Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6P2RRX7HVEMV2&source=url) or [Ko-Fi](https://ko-fi.com/forien). Thanks!

# Acknowledgements
* Big shoutout to Kekilla, the original author, for making this module!
* Thanks to Honeybadger for contributions and keeping module functional 

# License

This Foundry VTT module, written by Kekilla, is licensed under a [MIT License](https://github.com/Kekilla0/Item-Macro/blob/main/LICENSE).

This work is licensed under [Foundry Virtual Tabletop EULA - Limited License Agreement for module development](https://foundryvtt.com/article/license/).
