//I don't know how these autopopulated
// const { exportAllDeclaration } = require('@babel/types');
// const { default: test } = require('node:test');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('school', () => {
    const testSchool = "Cool School";
    const intern = new Intern("Foo", 3, "fake123@fakermail.gov", testSchool);
    expect(intern.school).toBe(testSchool);
});

test('getSchool returns school', () => {
    const testGetSchool = "Cool School";
    const intern = new Intern("Foo", 3, "fake123@fakermail.gov", testGetSchool);
    expect(intern.getSchool()).toBe(testGetSchool);
});

test('getRole return Intern', () => {
    const testRole = "Intern";
    const intern = new Intern("Foo", 3, 'fake123@fakermail.gov', "Cool School");
    expect(intern.getRole()).toBe(testRole);
});