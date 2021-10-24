export default function displayCash(amount) {
  let amountString = amount.toString();
  if (amountString.length % 3 !== 0 && amountString.length > 3) {
    amountString = '0' + amountString;
    if (amountString.length % 3 !== 0) amountString = '0' + amountString;
  }
  let final = '';
  for (let i = 0; i < amountString.length; i++) {
    i > 0 && (i+1) % 3 === 0? final += amountString[i] + ',': final += amountString[i];
  }
  return final === '0'? final: final.replace(/^0+/g, '').replace(/,$/,'');
}
