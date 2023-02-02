require("jest-fetch-mock").enableMocks();
const NotesClient = require("./NotesClient");
const notesClient = new NotesClient();

describe("NotesClient", () => {
  it("fetches and loads data", () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ["buy milk", "go to the gym"],
      })
    );
    notesClient.loadNotes((data) => {
      expect(data.notes).toStrictEqual(["buy milk", "go to the gym"]);
    });
  });
  it('sends a post request to create new note', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ["first", "second"],
      })
    );
    const note = {content: "a test note"};
    client.createNote(note);
    
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: note}),
    });
    done();
  });
  it("sends a post request to the notes server to delete notes", () => {
    fetch.mockResponseOnce("");

    const client = new NotesClient();

    client.removeNotes();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/notes", {
      method: "DELETE",
    });
  });
});