const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test('github', () => {
    const testGithub = "Github Name";
    const engineer = new Engineer(testGithub);
    expect(engineer.github).toBe(testGithub);
});

test('getGithub username', () => {
    const testGithubName = "Github Name";
    const engineer = new Engineer(testGithubName);
    expect(engineer.getGithub).toBe(testGithubName);
});

test('getRole', () => {
    const testRole = "Engineer";
    const engineer = new Engineer ("Foo", 3, "fake123@fakermail.gov", "Github Name");
    expect(engineer.getRole()).toBe(testRole);
})