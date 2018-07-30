import Translator from './models/Translator'

/**
 * Export.
 */
exports.translate = function (text) {
  let translator = new Translator()

  return translator.translate(text)
}
