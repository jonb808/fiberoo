
function fib(){
  let list = [0, 1];

  for(var i = 2; i < 100; i++) {
    list[i] = list[i-1] + list[i-2];
  }
  return list;
}

console.log(fib());

function numsToStrings(nlist) {
  return _.map(nlist, function (num) { return num.toString(); });
}

console.log(numsToStrings(fib()));

function numEvenNums(list) {
  return _.size(_.filter(list, function (num) { return num % 2 === 0; }));
}

console.log(numEvenNums(fib()));
