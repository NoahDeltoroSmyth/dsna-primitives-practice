function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toLowerCase() + word.slice(1).toUpperCase();
    })
    .join(' ');
}
console.log(titleCase('Here is a sentence'));
