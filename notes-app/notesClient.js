class NotesClient {
    loadNotes(callback, errorMsg) {
      fetch("http://localhost:3000/notes")
        .then((response) => response.json())
        .then((data) => {
          callback(data);
        })
        .catch((error) => {
          errorMsg(error);
        })
    }

    createNote(note, errorMsg) {
      fetch("http://localhost:3000/notes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: note}),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", note)
        })
        .catch((error) => {
          errorMsg(error);
        })
    }
    removeNotes(errorMsg) {
      fetch('http://localhost:3000/notes', {
        method: "DELETE", 
      }).catch((error) => {
        errorMsg(error)
      })
    }

    
}
  
  module.exports = NotesClient;