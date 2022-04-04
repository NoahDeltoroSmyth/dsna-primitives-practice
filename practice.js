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
//
//
function anagrams(wordOne, wordTwo) {
  const one = wordOne.split('').sort().join('');
  // console.log(wordOne.split('').sort().join(''));
  const two = wordTwo.split('').sort().join('');
  // console.log(wordTwo.split('').sort().join(''));

  return one === two;
  // if (one === two) {
  //   return 'true';
  // } else {
  //   return 'false';
  // }
}
console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));

// function uniqueString(strings) {
//   const set = new Set(strings);
//   const unique = [...set];
//   console.log(unique);
//   return unique;
// }
// console.log(uniqueString(strings));
