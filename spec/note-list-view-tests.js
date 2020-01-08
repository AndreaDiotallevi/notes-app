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
