class NotesView{
    constructor(model, client){
        this.model = model;
        this.client = client;
        this.mainContainerEl = document.querySelector('#main-container');
         this.deleteButton = document.querySelector('#delete-button');
        

       

        document.querySelector('#add-note-button').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note').value;
            this.addNewNote(newNote);
        })

        document.querySelector('#delete-button').addEventListener('click', () => {
            this.model.reset();
            this.displayNotes();
        })

        
    }


    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.client.createNote(newNote)
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
        },
        () => {
            this.displayError('Oops, something went wrong!')
        });
    }

    displayError(error) {
        const errorEl = document.createElement('p');
        errorEl.className = 'error';
        errorEl.innerText = error;
        this.mainContainerEl.append(errorEl);
    }

    deleteNotes(){
        this.mainContainerEl.querySelectorAll('div.note').forEach((note) => note.remove())
    }
};

module.exports = NotesView;