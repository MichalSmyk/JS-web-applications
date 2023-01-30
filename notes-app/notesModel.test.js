const NotesModel = require('./notesModel');

describe('notesModel', () => {

    it('returns list of  empty notes', () => {
        const newNote = new NotesModel();
        expect(newNote.getNotes()).toEqual([]);
    });
    it('adds a note', () => {
        const newNote = new NotesModel();
        newNote.addNote("Buy Milk")
        expect(newNote.getNotes()).toEqual(["Buy Milk"]);
    });
    it('clears all notes', () => {
        const newNote = new NotesModel();
        newNote.addNote("Buy Milk")
        newNote.reset();
        expect(newNote.getNotes()).toEqual([])
    });
});