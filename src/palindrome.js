/**
 * @param {string} word
 *
 * @returns {boolean}
 */

function palindrome(word) {
  const lowerWord = word.toLocaleLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let direct = '';
  let revers = '';

  for (const char of lowerWord) {
    if (alphabet.includes(char)) {
      direct += char;
      revers = char + revers;
    }
  }

  return direct === revers;
}

module.exports = { palindrome };
