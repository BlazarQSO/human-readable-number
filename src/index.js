module.exports = function toReadable (number) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

  const hundred = Math.trunc(number / 100);
  number = number % 100;
  let res = '';
  if (number === 0) res = 'zero';

  if (hundred > 0) {
    res = `${nums[hundred]} hundred `;
  }

  if (number < 20 && number > 0) {
    res += `${nums[number]} `;
  } else {
    const dec = Math.trunc(number / 10);
    number = number % 10;

    if (dec > 0) {
        res += `${nums[dec + 19]} `;
    }
    if (number > 0) {
        res += `${nums[number]} `;
    }
  }
  return res.trim();
}
