let Calculator = require ("../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start testing of getResult method");
  });

  it ("Test CleanUp function with usual params", function () {
    calc.plus(5);
    calc.cleanUp();
    expect(calc.result).toBe(0);
  });

  it ("Test CleanUp function with usual params: chain", function () {
    calc.plus(10)
        .minus(5)
        .multiply(10)
        .div(1);
    calc.cleanUp();
    expect(calc.result).toBe(0);
  });

});