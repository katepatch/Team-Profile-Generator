//const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test('github', () => {
    const testGithub = "Github Name";
    const engineer = new Engineer("Foo", 3, "fake123@fakermail.gov", testGithub);
    expect(engineer.github).toBe(testGithub);
});

test('getGithub returns username', () => {
    const testGithub = "Github Name";
    const engineer = new Engineer("Foo", 3, "fake123@fakermail.gov", testGithub);
    expect(engineer.getGithub()).toBe(testGithub);
});

test('getRole returns new role', () => {
    const testRole = "Engineer";
    const engineer = new Engineer ("Foo", 3, "fake123@fakermail.gov", "Github Name");
    expect(engineer.getRole()).toBe(testRole);
});