import Translator from './models/Translator'

class Passwordizer {
  // translate text to password
  translate(text) {
    return Translator.translate(text)
  }
}

exports.Passwordizer = Passwordizer
