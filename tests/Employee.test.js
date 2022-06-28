//This line keeps popping up i don't know what to do about it.
//const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test('Employee class', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });

test('name', () => {
    const name = "Penny";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})