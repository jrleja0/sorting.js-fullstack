function bubbleSort(arr) {
  var correctCount = 0;
  while(correctCount < arr.length){
    correctCount = 0
    for (var i=0; i < arr.length; i++){
      arr[i] > arr[i+1] ? arr = swap(arr,i) : correctCount++;
    }
  }
  return arr;
}

function swap(arr, i) {
  var tempVal = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = tempVal
  return arr;
}
