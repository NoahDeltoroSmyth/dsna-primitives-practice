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
// const arr = ['a', 'b', 'c', 'd'];
// const length = arr.length();
// function at(arr, index) {
//   // return arr.find().at(index[1]);
//   return arr[index] > -1;
// }
// console.log(at(arr[1]));
