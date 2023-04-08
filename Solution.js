
/**
 * @param {string} input
 * @param {string} chars
 * @param {number[]} values
 * @return {number}
 */
var maximumCostSubstring = function (input, chars, values) {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const costForChar = Array.from(Array(ALPHABET_SIZE).keys(), n => n + 1);
    for (let i = 0; i < chars.length; ++i) {
        costForChar[chars.codePointAt(i) - ASCII_SMALL_CASE_A] = values[i];
    }

    let maxCost = 0;
    let currentCost = 0;
    for (let i = 0; i < input.length; ++i) {
        currentCost = Math.max(0, currentCost + costForChar[input.codePointAt(i) - ASCII_SMALL_CASE_A]);
        maxCost = Math.max(maxCost, currentCost);
    }
    return maxCost;
};
