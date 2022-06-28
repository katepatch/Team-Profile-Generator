const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
// here they are again for a 4th time
// const { default: test } = require('node:test');
// const { exportAllDeclaration } = require('@babel/types');

test('officeNumber', () => {
    const testNumber = 5559874;
    const manager = new Manager("Foo", 3, "fake123@fakermail.gov", testNumber);
    expect(manager.officeNumber).toBe(testNumber);
});

test('getOfficeNumber returns number', () => {
    const testNumber = 5559874;
    const manager = new Manager("Foo", 3, "fake123@fakermail.gov", testNumber);
    expect(manager.getOfficeNumber()).toBe(testNumber);
});

test('getRole returns Manager', () => {
    const testRole = "Manager";
    const manager = new Manager("Foo", 3, "fake123@fakermail.gov", testRole);
    expect(manager.getRole()).toBe(testRole);
});