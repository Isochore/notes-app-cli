const fs = require('fs');
const chalk = require('chalk');


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlue.bold('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
};

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.bold('New note added'));
    } else {
        console.log(chalk.bgRed.bold('Note title taken'));
        
    }
};


const removeNotes = (title) => {
    const notes = loadNotes()
    const notesKept = notes.filter((note) => note.title !== title)
    if (notesKept.length === notes.length) {
        console.log(chalk.bgRed.bold('Note not found'));
    } else {
        saveNotes(notesKept)
        console.log(chalk.bgGreen.bold('Removing the note ' + title));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if (note) {
        console.log(chalk.bgCyan.bold(note.title));
        console.log(chalk.bgGray.bold(note.body));
    } else {
        console.log(chalk.bgRed.bold('Note not found'));
    }
}

module.exports = {
    listNotes:  listNotes,
    addNotes:  addNotes,
    removeNotes:  removeNotes,
    readNotes: readNotes
};