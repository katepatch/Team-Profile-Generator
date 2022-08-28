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

