const express = require('express');
const app = express();
const port = 3000;

app.get('/joyboy', (req, res) => {
    res.json({ message: 'joyboy' });
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port + '');
});

//NEXT STEPS OR TO:DO, DO THEM ON THE ORDER BELOW!!!
//OBS: COMMIT TO GIT EVERY SO OFTEN, AT MINIMUM DAILY, BUT AFTER EACH MINOR FEATURE IS THE DESIRED APPROACH

//1) BASIC CRUD IMPLEMENTED, ONLY CONSIDERING 1 FIELD FOR EACH OPERATION, SUCH AS GET RETURNING ONLY 1 KEY:VALUE COMBO, ETC [IN PROGRESS]
//2) INCREASE LEVEL OF BASIC CRUD BY ALLOWING USER TO CREATE MULTIPLE OBJECTS AT ONCE, EACH OBJECT WITH A BUNCH OF DIFFERENT DATA WITH A MULTITUDE OF DATA TYPES (STRING, INT ETC) [BACKLOG]
//3) ORGANIZE PROJECT FOLDER STRUCTURE AND CLASS NAMES [BACKLOG]
//4) START PERSISTING DATA ON DATABASE OF YOUR CHOICE [BACKLOG]
//5) ADD YOUR DESIRED FLAVOUR TO YOUR PROJECT (SUCH AS MAKING ALL DATA RELATED TO HELLO KITTY, OR WW1, OR CHRISTMAS, ETC) [BACKLOG]
//5) POST ON LINKEDIN [BACKLOG]
