let Calculator = require ("../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start testing of plus method");
  });

  afterEach(function(){
    calc.cleanUp();
  });
      
  it ("Test plus function with usual params", function () {
    calc.plus(5);
    expect(calc.result).toBe(5);
  });

  it ("Test plus function with dot", function () {
    calc.plus(5.05);
    expect(calc.result).toBe(5.05);
  });

  it ("Test plus function with dot: chain", function () {
    calc.plus(5.04)
        .plus(4.97)
    expect(calc.result).toBe(10.01);
  });

  it ("Test plus function with negative params", function () {
    calc.plus(-5);
    expect(calc.result).toBe(-5);
  });

  it ("Test plus function with large numbers", function () {
    calc.plus(2147483647);
    expect(calc.result).toBe(2147483647);
  });

  it ("Test plus function: ecxeed boundaries of Int", function () {
    calc.plus(2147483648);
    expect(calc.result).toBe(2147483648);
  });

  it ("Test plus function with bigInt number", function () {
    calc.plus(1)
        .plus(9223372036854775806)
    expect(calc.result).toBe(9223372036854775807);
  });

  it ("Test plus function: ecxeed boundaries of bigInt", function () {
    calc.plus(2)
        .plus(9223372036854775806)
    expect(calc.result).toBe(9223372036854775808);
  });

  it ("Test plus function with String param", function () {
    let isErr = false;
    try {
      calc.plus("5");
    } catch (err) {
      isErr = true;
      expect(err.message).toBe("Unsuportted type");
    } 
      expect(isErr).toBe(true);
  });

});