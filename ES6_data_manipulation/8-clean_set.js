export default function cleanSet(set, startString = '') {
  const modifiedArray = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      const newValue = value.slice(startString.length);
      modifiedArray.push(newValue);
    }
  }
  return modifiedArray.join('-');
}