function split(wholeArray) {
  var endPoint = Math.ceil(wholeArray.length / 2);
  var firstHalf = wholeArray.slice(0, endPoint);
  var secondHalf = wholeArray.slice(endPoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  var outputArray = [];
  while(arr1.length || arr2.length){
    if(!arr1.length){
      outputArray = outputArray.concat(arr2);
      arr2 = [];
    } else if(!arr2.length){
      outputArray = outputArray.concat(arr1);
      arr1 = [];
    } else {
      arr1[0] > arr2[0] ? outputArray.push(arr2.shift()) : outputArray.push(arr1.shift());
    }
  }
  return outputArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else if (array.length > 1) {
    var splitArray = split(array);
    var sorted1 = mergeSort(splitArray[0]);
    var sorted2 = mergeSort(splitArray[1]);
    return merge(sorted1, sorted2);
  }
}
