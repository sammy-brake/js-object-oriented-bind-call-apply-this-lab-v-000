//Your code here

function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return arg.fn().call(thisValue);
};
