const genManager = manager => {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h2>${manager.getName()}</h2>
                    <h3>Manager</h3><i class="material-icons">&#128203;</i>
                </div> 
            </div>
            <div class="card-body manager-info">
                <p>ID: ${manager.getId()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    `
}

const genEngineer = engineer => {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h3>Engineer</h3><i class="material_icons">&#128187;</i>
                </div>
            </div>
            <div class="card-body engineer-info">
                <p>ID: ${engineer.getId()}</p>
                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>Github Username: <a href="https://github.com//{{ github }}" target="_blank">${engineer.getGithub()}</a></p>
            </div>
        </div>
    `
}

const genIntern = intern => {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h2>${intern.getName()}</h2>
                    <h3>Intern</h3><i class"material_icons">&#128210;</i>
                </div>
            </div>    
            <div class="card-body intern-info">
                <p>ID: ${intern.getId()}</p>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School: ${intern.getSchool()}</p>
            </div>
        </div>
    `
}

htmlRenderer = data => {
    let teamCards = [];

    for (let i = 0; i < data.length; i ++) {
        console.log(data[i].getRole());
        const employee = data[i];
        console.log(data[i]);
        const role = employee.getRole();
        

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
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
        <title>Employee Profiles</title>
    </head>
    <body>
        <header>
            <h1>Team Members</h1>
        </header>
    
        <section class="container">
            <div class="flex-row flex-wrap justify-content-center">
                ${teamCards}
            </div>
        </section>
    </body>
    </html>
    `
}

module.exports = htmlRenderer;