function returnsEmptyArrayByDefault() {
  var noteList = new NoteList();
  assert.isTrue(noteList.listNotes().length === 0);
}

returnsEmptyArrayByDefault();