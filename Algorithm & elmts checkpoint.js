function sentenceRead() {
  let sentence = prompt("enter your sentence ended with a dot", "");
  let sentenceArrW = sentence.split(" ");
  let sentenceArr = sentence.split("");

  let vowels = ["a", "e", "i", "o", "u"];

  let letterCount = 0;
  let words = 0;
  let vowelsCount = 0;

  if (sentence != null && sentence.slice(-1) == ".") {

    for (let i = 0; i < sentenceArr.length; i++) {
      if (sentenceArr[i] !== " ") {
        letterCount++;
        for (let j = 0; j < vowels.length; j++) {
          if (sentenceArr[i] === vowels[j]) {
            vowelsCount++;
          }
        }
      }
    }

    while (sentenceArrW[words] && sentenceArrW[words] != ".") {
      words++;
    }
  return (
    "length of the sentence: (" +
    letterCount +
    "), number of words in the sentence: (" +
    words +
    "), number of vowels in the sentence: (" +
    vowelsCount +
    ")."
  );
  }
}

console.log(sentenceRead());
