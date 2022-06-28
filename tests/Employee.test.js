const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });


})