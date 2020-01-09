function returnsEmptyUnorderedListAfterInstantiation() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul></ul>")
}

function returnsHtmlStringWithNotes() {
  var noteList = new NoteList();
  noteList.addNote("first note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>first note</div></li></ul>")
}

function returnsFirstTwentyCharacters() {
  var noteList = new NoteList();
  noteList.addNote("12345678901234567890123");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>12345678901234567890</div></li></ul>")
}

returnsEmptyUnorderedListAfterInstantiation();
returnsHtmlStringWithNotes();
returnsFirstTwentyCharacters();
