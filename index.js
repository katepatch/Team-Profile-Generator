const questionsManager = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter Manager name',
    },
    {
        type: 'input',
        name: 'id number',
        message: 'Manager ID number',
        validate: answer => {
            const pass = answer.match(
                /^[1-9]\d*$/
            );
            if (pass) {
                return true;
            }
            return "Please enter a number greater than zero.";
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Manager email',
    },
    {
        type: 'input',
        name: 'Manager Office Number',
        message: 'Please enter Manager office number',        
    },
]

