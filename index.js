'use strict'

let Translator = require('./models/Translator')

/**
 * Export translate()
 */
export default {

  /**
   * Translates text to passwords
   *
   * @param text
   * @returns {string}
   */
  translate: function (text) {
    const translator = new Translator.default()

    return translator.translate(text)
  }
}
