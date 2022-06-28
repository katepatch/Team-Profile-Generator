//This line keeps auto popping up i don't know what to do about it.
const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test('Employee class', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });

test('name', () => {
    const name = "Penny";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('id', () => {
    const id = 3;
    const employee = new Employee(id);
    expect(employee.id).toBe(id);
});

test('email', () => {
    const email = "fake123@fakermail.gov";
    const employee = new Employee(email);
    expect(employee.email).toBe(email);
});

test('getName returns name', () => {
    const getName = "Penny";
    const employee = new Employee(getName);
    expect(employee.getName).toBe(getName);
});

test('getId returns id', () => {
    const getId = 3;
    const employee = new Employee(getId);
    expect(employee.getId).toBe(getId);
});

test('getEmail returns email', () => {
    const getEmail = "fake123@fakermail.gov"
    const employee = new Employee(getEmail);
    expect(employee.getEmail).toBe(getEmail);
});

test('getRole returns role of employee', () => {
    const testRole = "Employee";
    const employee = new Employee();
    expect(employee.getRole).toBe(testRole);
});