function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
console.log(titleCase('Here is a sentence'));
//
//
function at(arr, index) {
  // if (index > -1) {
  //   return arr[index];
  // } else {
  //   return arr[arr.lenth + index];
  // }
  return index > -1 ? arr[index] : arr[arr.length + index];
}
console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
