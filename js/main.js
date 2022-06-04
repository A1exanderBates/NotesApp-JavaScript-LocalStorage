// import NotesAPI from "./NotesAPI.js"
import NotesView from "./NotesView.js"

const app = document.getElementById("app");
const view = new NotesView(app, {

    onNoteAdd() {
        console.log("Add a new note.")
    },

    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody);
    },
});

/*
NotesAPI.saveNote({
    title: "New Note!",
    body: "I am a new note."
})

console.log(NotesAPI.getAllNotes());

*/