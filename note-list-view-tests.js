// import { Note } from "./note-model";

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log('*');
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('.')
    }
  }
}

function returnsEmptyStringWhenNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === "<ul></ul>")
}

function returnsOneNoteInHTML() {
  var noteList = new NoteList();
  noteList.add("first note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>first note</div></li></ul>")
}

returnsEmptyStringWhenNoNotes();
returnsOneNoteInHTML();
