function returnsEmptyUnorderedListAfterInstantiation() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul></ul>")
}

function returnsHtmlStringWithNotes() {
  var noteList = new NoteList();
  noteList.addNote("first note");
  var noteListView = new NoteListView(noteList);
  var noteId = noteList.listNotes()[0].id();
  assert.isTrue(noteListView.htmlString() === `<ul><li><a id="${noteId}" href="#notes/${noteId}">first note</a></li></ul>`)
}

function returnsFirstTwentyCharacters() {
  var noteList = new NoteList();
  noteList.addNote("12345678901234567890123");
  var noteListView = new NoteListView(noteList);
  var noteId = noteList.listNotes()[0].id();
  assert.isTrue(noteListView.htmlString() === `<ul><li><a id="${noteId}" href="#notes/${noteId}">12345678901234567890</a></li></ul>`)
}

returnsEmptyUnorderedListAfterInstantiation();
returnsHtmlStringWithNotes();
returnsFirstTwentyCharacters();
