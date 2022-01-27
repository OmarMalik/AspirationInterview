// Helper function that returns true if a character is alphanumeric
function isAlphanumeric(char) {
    return (/[a-zA-Z0-9]/).test(char)
}

// Note: In Javascript we don't need to worry about the run-time efficiency of constantly appending to an immutable String (StringBuffer in Java for example). The runtime should do this operation more efficiently under the hood.
function capitalizeNthAlphanumericChar(str, n) {
    capitalizedString = ""

    var alphanumCount = 0
    for (var i  = 0; i < str.length; i++) {
        if (isAlphanumeric(str.charAt(i))) {
            alphanumCount += 1
        }

        if (alphanumCount % n === 0) {
            capitalizedString += str.charAt(i).toUpperCase()
        } else {
            capitalizedString += str.charAt(i).toLowerCase()
        }
    }

    return capitalizedString
}

module.exports = capitalizeNthAlphanumericChar