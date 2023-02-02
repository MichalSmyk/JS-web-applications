/**
 * @jest-environment jsdom
 */
require("jest-fetch-mock").enableMocks();
const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 
const NotesClient = require('./notesClient')

jest.mock("./notesClient.js");


describe('notesView', () => {
    let model;
    let client;
    let view;

    beforeEach(() => {
        NotesClient.mockClear();
        document.body.innerHTML = fs.readFileSync("./index.html");
    
        client = new NotesClient();
        model = new NotesModel();
        view = new NotesView(model, client);
      });
    

    it('shows two notes', () => {
       model.addNote('first note');
        model.addNote('another note');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
    it('adds user input ( as note) to the page with a button', () => {
       

        const input = document.querySelector('#add-note');
        input.value = 'This is my new note';

        const button = document.querySelector('#add-note-button');
        button.click();

        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('This is my new note');
    });
    it('clears notes before displaying new note', () => {
        

        model.addNote('first');
        model.addNote('second');

        view.displayNotes();
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
    it("displayNotesFromApi loads notes from server and displays the received notes", (done) => {
        client.loadNotes.mockImplementation((callback) => {
          callback(["Feed lawn", "Mow dog"]);
        });
        view.displayNotesFromApi();
        const notes = document.querySelectorAll("div.note");
        expect(notes.length).toBe(2);
        expect(notes[0].textContent).toBe("Feed lawn");
        expect(client.loadNotes).toHaveBeenCalled();
        expect(model.getNotes()).toEqual(["Feed lawn", "Mow dog"]);
        done();
      });
      it('displays error message',() => {
        view.displayError("Oops, something went wrong!");

        const error = document.querySelectorAll("p.error");

        expect(error[0].innerText).toBe("Oops, something went wrong!");
      });
});
