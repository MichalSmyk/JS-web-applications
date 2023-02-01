class NotesView{
    constructor(model, client){
        this.model = model;
        this.client = client;
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#add-note-button').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note').value;
            this.addNewNote(newNote);
        })

        
    }


    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes()
    }

    displayNotes() {

        document.querySelectorAll('.note').forEach(element => {
            element.remove();
        })

        const notes = this.model.getNotes();

        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        });
    };
    displayNotesFromApi() {
        this.client.loadNotes(notes => {
            this.model.setNotes(notes);
            this.displayNotes();
        });
    }

};

module.exports = NotesView;