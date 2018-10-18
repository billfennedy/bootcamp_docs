function printReverse(array_1) {
  for(var i = array_1.length -1; i >= 0; i--){
    console.log(array_1[i]);
  }
}

printReverse([1,2,3,2])

function isUniform(array_2) {
  var first = array_2[0]
  for(var i = 1; i < array_2.length; i++){
    if (array_2[i] !== first){
      return false;
    }
  }
  return true;
}

isUniform([2,2,2]);

function sumArray(array_3){
  var total = 0;
  array_3.forEach(function(asd){
    total += asd;
  })
  return total;
}

function max(array_4){
  var max = array_4[0];
  for(var i = array_4[0]; i <= array_4.length; i++){
    if (max < array_4[i]){
      max = array_4[i];
    }
  }
  return max;
}
max([1,23,3,2])
