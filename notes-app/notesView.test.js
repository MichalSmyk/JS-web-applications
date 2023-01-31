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
    it('adds user input ( as note) to the page with a button', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);

        const input = document.querySelector('#add-note');
        input.value = 'This is my new note';

        const button = document.querySelector('#add-note-button');
        button.click();

        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('This is my new note');
    });
    it('clears notes before displaying new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);

        model.addNote('first');
        model.addNote('second');

        view.displayNotes();
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});