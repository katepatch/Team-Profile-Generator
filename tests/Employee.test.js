//This line keeps auto popping up i don't know what to do about it.
//const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test('Employee class', () => {
        const testEmployee = new Employee();
        expect(typeof(employee)).toBe('object');
    });

test('name', () => {
    const testName = "Penny";
    const employee = new Employee(testName);
    expect(employee.name).toBe(testName);
});

test('id', () => {
    const testId = 3;
    const employee = new Employee("Foo", testId);
    expect(employee.id).toBe(testId);
});

test('email', () => {
    const testEmail = "fake123@fakermail.gov";
    const employee = new Employee("Foo", 3, testEmail);
    expect(employee.email).toBe(testEmail);
});

test('getName returns name', () => {
    const testGetName = "Penny";
    const employee = new Employee(testGetName);
    expect(employee.getName()).toBe(testGetName);
});

test('getId returns id', () => {
    const testGetId = 3;
    const employee = new Employee("Foo", testGetId);
    expect(employee.getId()).toBe(testGetId);
});

test('getEmail returns email', () => {
    const testGetEmail = "fake123@fakermail.gov"
    const employee = new Employee("Foo", 3, testGetEmail);
    expect(employee.getEmail()).toBe(testGetEmail);
});

test('getRole returns role of employee', () => {
    const testRole = "Employee";
    const employee = new Employee("Penny", 3, "fake123@fakermail.gov");
    expect(employee.getRole()).toBe(testRole);
});