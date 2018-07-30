class Dictionary {

    /**
     * Get list of character equivalents
     *
     * @param character
     * @returns {*}
     */
    static getEquivalentList(character) {
        let expression = character.toLowerCase();
        switch(expression) {
            case ' ':
                return ['_', '-'];
            case 'a':
                return ['A', 'a', '@'];
            case 'b':
                return ['B', 'b'];
            case 'c':
                return ['C', 'c', '('];
            case 'd':
                return ['D', 'd'];
            case 'e':
                return ['E', 'e', '3'];
            case 'f':
                return ['F', 'f'];
            case 'g':
                return ['G', 'g'];
            case 'h':
                return ['H', 'h', '|-|'];
            case 'i':
                return ['I', 'i', '|', '1'];
            case 'j':
                return ['J', 'j'];
            case 'k':
                return ['K', 'k'];
            case 'l':
                return ['L', 'l', '1', '|_'];
            case 'm':
                return ['M', 'm'];
            case 'n':
                return ['N', 'n'];
            case 'o':
                return ['O', 'o', '0'];
            case 'p':
                return ['P', 'p'];
            case 'q':
                return ['Q', 'q'];
            case 'r':
                return ['R', 'r'];
            case 's':
                return ['S', 's', '$'];
            case 't':
                return ['T', 't'];
            case 'u':
                return ['U', 'u'];
            case 'v':
                return ['V', 'v'];
            case 'w':
                return ['W', 'w'];
            case 'x':
                return ['X', 'x'];
            case 'y':
                return ['Y', 'y'];
            case 'z':
                return ['Z', 'z'];
            case '0':
                return ['0', 'O', 'o'];
            case '1':
                return ['1', '!'];
            case '2':
                return ['2'];
            case '3':
                return ['3', 'E'];
            case '4':
                return ['4'];
            case '5':
                return ['5', '$'];
            case '6':
                return ['6'];
            case '7':
                return ['7', '?'];
            case '8':
                return ['8', '&'];
            case '9':
                return ['9'];
            default:
                return ['#', '%', '^', '*', ')', '_', '-', '=', '+'];
        }
    }

    /**
     * Get a random character equivalent
     *
     * @param character
     * @returns {*}
     */
    getEquivalent(character) {
        let equivalents = this.getEquivalentList(character);
        let position = Math.floor(Math.random() * equivalents.length);

        return equivalents[position];
    }
}

module.exports = Dictionary;