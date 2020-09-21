let arr1 = [3, 1, 7, 9];
let arr2 = [2, 4, 1, 9, 3];

let count = 0;
var sum = 0;
let present = false;

for (j = 0; j < arr1.length; j++) {
  for (k = 0; k < arr2.length; k++) {
    if (arr1[j] === arr2[k]) {
      present = true;
    }
  }
  count++;
  if (count == 1 && present == false) {
    sum = sum + arr1[j];
  }
  present = false;
  count = 0;
}

for (k = 0; k < arr2.length; k++) {
  for (j = 0; j < arr1.length; j++) {
    if (arr2[k] === arr1[j]) {
      present = true;
    }
  }
  count++;
  if (count == 1 && present == false) {
    sum = sum + arr2[k];
  }
  present = false;
  count = 0;
}
console.log(sum);
