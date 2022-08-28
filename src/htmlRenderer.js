const genManager = manager => {
    return `
        <div class="manager">
            <h2>${manager.name}</h2>
            <h3>Manager</h3>
        </div>

        <div class="manager-info">
            <ul class="manager-list">
                <li>ID: ${manager.id}</li>
                <li>Email: ${manager.email}</li>
                <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    `
}

const genEngineer = engineer => {
    return `
        <div class="engineer">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </div>

        <div class="engineer-info">
            <ul class="engineer-list">
                <li>ID: ${engineer.id}</li>
                <li>Email: ${engineer.email}</li>
                <li>Github Username: ${engineer.github}</li>
            </ul>
        </div>
    `
}

const genIntern = intern => {
    return `
        <div class="intern">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>

        <div class="intern-info">
            <ul class="intern-list">
                <li>ID: ${intern.id}</li>
                <li>Email: ${intern.email}</li>
                <li>School: ${intern.school}</li>
            </ul>
        </div>
    `
}

renderPage = data => {
    teamCardsArr = [];

    for (let i = 0; i < data.length; i ++) {
        const employee = data[i];
        const role = employee.getRole();
        console.log(role);

        if (role === "Manager") {
            const managerCard = genManager(employee);

            teamCards.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = genEngineer(employee);

            teamCards.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = genIntern(employee);

            teamCards.push(internCard);
        }
    }

    const teamCards = teamCardsArr.join("");

    const renderTeam = createTeamHtml(teamCards);
    return renderTeam;
}

const createTeamHtml = teamCards => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Profiles</title>
    </head>
    <body>
        <header>
            <h1>Team Members</h1>
        </header>
    
        <section>
            ${teamCards}
        </section>
    </body>
    </html>
    `
}

module.exports = htmlRenderer;