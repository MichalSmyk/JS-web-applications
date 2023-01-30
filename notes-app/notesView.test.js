/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 


describe('notesView', () => {

    it('shows two notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        
        const model = new NotesModel();
        const view = new NotesView(model);
        
        model.addNote('first note');
        model.addNote('another note');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});