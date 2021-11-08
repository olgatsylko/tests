let Calculator = require ("../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start testing of div method");
  });

  afterEach(function(){
    calc.cleanUp();
  });

  it ("Test dev function with usual params", function () {
    calc.div(10)
    expect(calc.result).toBe(0);
  });

  it ("Test dev function with dot", function () {
    calc.plus(10)
        .div(2.3)
    expect(calc.result).toBe(4.347826086956522);
  });

  it ("Test dev function with usual params: chain", function () {
    calc.plus(10)
        .div(1)
        .div(2)
    expect(calc.result).toBe(5);
  });

  it ("Test dev function with negative params", function () {
    calc.plus(20)
        .div(-10)
    expect(calc.result).toBe(-2);
  });

  it ("Test div function: validate for 0", function () {
    let isErr = false;
    try {
      calc.div(0);
    } catch (err) {
      isErr = true;
      expect(err.message).toBe("No 0 parameter");
    } 
      expect(isErr).toBe(true);
  });

  it ("Test div function with String param", function () {
    let isErr = false;
    try {
      calc.div("10");
    } catch (err) {
      isErr = true;
      expect(err.message).toBe("Unsuportted type");
    } 
      expect(isErr).toBe(true);
  });

});