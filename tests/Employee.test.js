const Employee = require('../lib/Employee');

describe('Employee class', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });
