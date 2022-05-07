import * as myModules from "./index.js";

let {stringLength, reverseString, Calculator} = myModules;

describe('my string functions', () => {

    test('count the characters', () => {
        expect(stringLength('string')).toBe(6);
        expect(stringLength('this is string')).toBe('Error! String out of range.');
      });
    
    test('reverse the string', () => {
        expect(reverseString('string')).toBe('gnirts');
        expect(reverseString('my book')).toBe('koob ym');
        expect(reverseString('@ninja')).toBe('ajnin@');
      });
});

describe('my calculator', () => {
    let calc = new Calculator();
    test('addition', () => {
        expect(calc.add(4,5)).toBe(9);
        expect(calc.add(20,3)).toBe(23);
        expect(calc.add(0,103)).toBe(103);
      });
    
    test('subtraction', () => {
        expect(calc.subtract(4,5)).toBe(-1);
        expect(calc.subtract(20,3)).toBe(17);
        expect(calc.subtract(0,103)).toBe(-103);
      });

    test('multiplication', () => {
        expect(calc.multiply(4,5)).toBe(20);
        expect(calc.multiply(20,3)).toBe(60);
        expect(calc.multiply(0,103)).toBe(0);
      });

    test('division', () => {
        expect(calc.divide(4,5)).toBe(0.8);
        expect(calc.divide(20,4)).toBe(5);
        expect(calc.divide(10,5)).toBe(2);
      });
})