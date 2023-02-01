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
});