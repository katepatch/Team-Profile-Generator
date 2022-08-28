const genManager = manager => {
    return `
        <div class="card manager-card">
            <div class="card-header>
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
        </div>

        <div class="card-body manager-info">
            <ul class="manager-list">
                <li>ID: ${manager.id}</li>
                <li>Email: <a href="mailto:{{ email }}>${manager.email}</a></li>
                <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    `
}

const genEngineer = engineer => {
    return `
        <div class="card engineer">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
        </div>

        <div class="card-body engineer-info">
            <ul class="engineer-list">
                <li>ID: ${engineer.id}</li>
                <li>Email: <a herf="mailto:{{ email }}>${engineer.email}</a></li>
                <li>Github Username: <a href="https://github.com//{{ github }}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    `
}

const genIntern = intern => {
    return `
        <div class="card intern">
            <div class="card-header>
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
        </div>

        <div class="card-body intern-info">
            <ul class="intern-list">
                <li>ID: ${intern.id}</li>
                <li>Email: <a herf="mailto:{{ email }}>${intern.email}</a></li>
                <li>School: ${intern.school}</li>
            </ul>
        </div>
    `
}

htmlRenderer = data => {
    teamCardsArr = [];

    for (let i = 0; i < data.length; i ++) {
        const employee = data[i];
        const role = employee.getRole(); //this is not a function error
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