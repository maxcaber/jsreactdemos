const increaseCounter = (function () {
    let counter = 0;

    return function () {
        counter = counter + 1;
        return counter;
    };
})();

  console.log(increaseCounter());
  console.log(increaseCounter());
  console.log(increaseCounter());
  console.log(increaseCounter());

const increaseCounter2 = function () {
    let counter = 0;
    var a = new Array();
    a.push(3);
    a.push(() => counter ++);
    return a;
};

let [val,increaseVal] = increaseCounter2();
  increaseVal();
  increaseVal();
  increaseVal();
  increaseVal();
console.log('val', val);

