import Dictionary from './Dictionary'

class Translator {

  /**
   * Constructor
   */
  constructor () {
    this.dictionary = new Dictionary()
  }

  /**
   * Translate a word
   *
   * @param word
   * @returns {string}
   */
  translate (word) {
    let translation = ''
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      translation += this.dictionary.getEquivalent(char)
    }

    return translation
  }
}

export default Translator
