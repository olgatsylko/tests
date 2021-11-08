let Calculator = require ("../../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start testing of getResult method");
  });

  afterEach(function(){
    calc.cleanUp();
  });

  it ("Test get Result function", function () {
    calc.plus(5000);
    expect(calc.getResult()).toBe(5000);
  });

  it ("Test get Result function: chain", function () {
    calc.plus(10)
        .minus(5)
        .multiply(100)
        .div(5)
    expect(calc.getResult()).toBe(100);
  });

});