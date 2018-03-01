function split(wholeArray) {
  var half = Math.floor(wholeArray.length / 2);

  var firstHalf = wholeArray.slice(0, half);
  var secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  var arr = [];

  while(array1.length && array2.length) {
    if(array1[0] < array2[0]) {
      arr.push(array1[0]);
      array1 = array1.slice(1);
    }
    else {
      arr.push(array2[0]);
      array2 = array2.slice(1);
    }
  }

  if(array1.length) {
    arr = arr.concat(array1);
  }
  else {
   arr = arr.concat(array2);
  }

  return arr;
}

function mergeSort(array) {
  if(array.length === 1) {
    return array;
  }
  else {
    var splitArray = split(array);
    var firstHalf = mergeSort(splitArray[0]);
    var secondHalf = mergeSort(splitArray[1]);
  }

return merge(firstHalf, secondHalf);
}
