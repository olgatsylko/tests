let Calculator = require ("../../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start testing of multiply method");
  });

  afterEach(function(){
    calc.cleanUp();
  });

  it ("Test mult function with usual params", function () {
    calc.multiply(10)
    expect(calc.result).toBe(0);
  });

  it ("Test mult function with negative params", function () {
    calc.plus(5) 
      .multiply(-10)
    expect(calc.result).toBe(-50);
  });

  it ("Test mult function with dot", function () {
    calc.plus(1)
        .multiply(0.000000001)
    expect(calc.result).toBe(0.000000001);
  });

  it ("Test mult function with large numbers", function () {
    calc.plus(10)
        .multiply(1000000000)
    expect(calc.result).toBe(10000000000);
  });

  it ("Test mult function with large numbers: chain", function () {
    calc.plus(10)
        .multiply(1000000000)
        .multiply(2)
    expect(calc.result).toBe(20000000000);
  });

  it ("Test mult function with bigInt", function () {
    calc.plus(1)
        .multiply(9223372036854775807)
    expect(calc.result).toBe(9223372036854775807);
  });

  it ("Test mult function with String param", function () {
    let isErr = false;
    try {
      calc.multiply("10");
    } catch (err) {
      isErr = true;
      expect(err.message).toBe("Unsuportted type");
    } 
      expect(isErr).toBe(true);
  });

});