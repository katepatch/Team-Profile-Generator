const Engineer = require("../lib/Engineer");

test('github', () => {
    const testGithub = "Github Name";
    const engineer = new Engineer(testGithub);
    expect(engineer.github).toBe(testGithub);
});