
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

var input = "025468"
var array = [];
for (let index = 0; index < input.length; index++) {
  if (isEven(index)) {
    array.push(index + '-')
  } else {
    array.push(index)
  }
  }

console.log(array);

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
