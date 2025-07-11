import * as handlers from "./handlers/_module.mjs";

export class SystemManager {
  /**
   * @var {BaseSystem|null}
   */
  static #instance;

  /**
   *
   */
  static #systemHandlers = handlers;

  /**
   * @type {{string: handlers.BaseSystem}}
   */
  static #registeredHandlers = {};

  /**
   * @returns {handlers.BaseSystem}
   */
  static get instance() {
    if (this.#instance)
      return this.#instance;

    return this.#getSystemHandler();
  }

  static set instance(value) {
    throw new Error(`Attempted to override ${this.constructor.name}#instance property with ${value} value. Property is read-only.`);
  }

  static registerHandlers() {
    for (const handler of Object.values(this.#systemHandlers)) {
      if (handler.prototype instanceof handlers.BaseSystem)
        this.#registeredHandlers[handler.system] = handler;
    }
  }

  /**
   * @returns {handlers.BaseSystem}
   */
  static #getSystemHandler() {
    const handler = this.#registeredHandlers[game.system.id] ?? handlers.BaseSystem;

    this.#instance = new handler();

    return this.#instance;
  }
}


