(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesClient.js
  var require_notesClient = __commonJS({
    "notesClient.js"(exports, module) {
      var NotesClient2 = class {
        loadNotes(callback, errorMsg) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            errorMsg(error);
          });
        }
        createNote(note, errorMsg) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: note })
          }).then((response) => response.json()).then((data) => {
            console.log("Success:", note);
          }).catch((error) => {
            errorMsg(error);
          });
        }
        removeNotes(errorMsg) {
          fetch("http://localhost:3000/notes", {
            method: "DELETE"
          }).catch((error) => {
            errorMsg(error);
          });
        }
      };
      module.exports = NotesClient2;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        setNotes(notes) {
          this.notes = notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.deleteButton = document.querySelector("#delete-button");
          document.querySelector("#add-note-button").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note").value;
            this.addNewNote(newNote);
          });
          document.querySelector("#delete-button").addEventListener("click", () => {
            this.model.reset();
            this.displayNotes();
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.client.createNote(newNote);
          this.displayNotes();
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.textContent = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        displayNotesFromApi() {
          this.client.loadNotes(
            (notes) => {
              this.model.setNotes(notes);
              this.displayNotes();
            },
            () => {
              this.displayError("Oops, something went wrong!");
            }
          );
        }
        displayError(error) {
          const errorEl = document.createElement("p");
          errorEl.className = "error";
          errorEl.innerText = error;
          this.mainContainerEl.append(errorEl);
        }
        deleteNotes() {
          this.mainContainerEl.querySelectorAll("div.note").forEach((note) => note.remove());
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesClient = require_notesClient();
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var client = new NotesClient();
  var model = new NotesModel();
  var view = new NotesView(model, client);
  view.displayNotesFromApi();
})();
