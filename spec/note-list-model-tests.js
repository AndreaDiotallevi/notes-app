function returnsEmptyArrayByDefault() {
  var noteList = new NoteList();
  assert.isTrue(noteList.listNotes().length === 0);
}

function returnsNoteList() {
  var noteList = new NoteList();

  noteList.add('first test note');
  noteList.add('second test note');

  assert.isTrue(noteList.listNotes().length === 2);
  assert.isTrue(noteList.listNotes()[0].getText() === 'first test note');
}

returnsEmptyArrayByDefault();
returnsNoteList();
