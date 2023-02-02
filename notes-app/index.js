const NotesClient = require('./notesClient')
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

view.displayNotesFromApi();

// client.loadNotes((notes) => {
//     model.setNotes(notes);
//     view.displayNotes();
// }, () => {
//     view.displayError();
// })