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