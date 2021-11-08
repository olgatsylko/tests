let Calculator = require ("../../src/calculator/calculator");

describe ("Test Calculator class", function() {
  let calc = new Calculator();
  
  beforeEach(function() {
    console.log("Start testing of minus method");
  });

  afterEach(function(){
    calc.cleanUp();
  });

  it ("Test minus function with usual params", function () {
    calc.minus(10)
    expect(calc.result).toBe(-10);
  });

  it ("Test min function with dot", function () {
    calc.minus(5.05);
    expect(calc.result).toBe(-5.05);
  });

  it ("Test min function with dot: chain", function () {
    calc.minus(5.05)
        .minus(5.06)
    expect(calc.result).toBe(-10.11);
  });

  it ("Test minus function with negative params", function () {
    calc.minus(-10)
    expect(calc.result).toBe(10);
  });

  it ("Test minus function with Int params", function () {
    calc.minus(2147483647)
    expect(calc.result).toBe(-2147483647);
  });

  it ("Test minus function: Int Min", function () {
    calc.minus(2147483648)
    expect(calc.result).toBe(-2147483648);
  });

  it ("Test minus function with String param", function () {
    let isErr = false;
    try {
      calc.minus("10");
    } catch (err) {
      isErr = true;
      expect(err.message).toBe("Unsuportted type");
    } 
      expect(isErr).toBe(true);
  });

});