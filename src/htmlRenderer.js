const genManager = manager => {
    return `
        <div class="card manager-card">
            <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>Manager</h3>
            </div>        
        <div class="card-body manager-info">
            <ul class="manager-list">
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
    `
}

const genEngineer = engineer => {
    return `
        <div class="card engineer">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>Engineer</h3>
            </div>
        </div>

        <div class="card-body engineer-info">
            <ul class="engineer-list">
                <li>ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>Github Username: <a href="https://github.com//{{ github }}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    `
}

const genIntern = intern => {
    return `
        <div class="card intern">
            <div class="card-header>
                <h2>${intern.getName()}</h2>
                <h3>Intern</h3>
            </div>
        </div>

        <div class="card-body intern-info">
            <ul class="intern-list">
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    `
}

htmlRenderer = data => {
    let teamCards = [];

    for (let i = 0; i < data.length; i ++) {
        console.log(data[i].getRole());
        const employee = data[i];
        console.log(data[i]);
        const role = employee.getRole(); //this is not a function error
        

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

    teamCards = teamCards.join('');

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