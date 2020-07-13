
var num = 1000;
var multiples = [];

for (let i = 0; i < num; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiples.push(i)
  }
}
var getMutiples = multiples.reduce(addTotal, 0)

function addTotal(total, num) {
  return total + num
}

taskOne = document.querySelector('.taskone')
taskOne.innerHTML = getMutiples


function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
} 
var tasktwo = document.querySelector('.tasktwo')

tasktwo.onclick = () => {
   function insertHyphen(str) {
  var strArr = str.split('');
  var numArr = strArr.map(Number);
  var result ="";
  for(var i = 0; i < numArr.length; i++) {
   if((numArr[i+1]!==undefined)&&(numArr[i]%2===0 && numArr[i+1]%2===0)) {
        //numArr.push('-');
        result = result + numArr[i] + "-";
    }else{
        result = result + numArr[i];
    }
  }
  return result;
}
 var inputs = prompt(' please input the numbers')

 alert(insertHyphen(inputs))

}


var taskthree = document.querySelector('.taskthree')

taskthree.onclick = () => {
  var inputs = prompt(' please input the numbers')

  var mf = 1;
  var m = 0;
  var item;
  
  for (var i = 0; i < inputs.length; i++) {
    for (var j = i; j < inputs.length; j++) {
      if (inputs[i] == inputs[j]) m++;
      if (mf < m) {
        mf = m;
        item = inputs[i];
      }
    }
  
    m = 0;
  }
  
  alert(item + " ( " + mf + " times ) ");
}


