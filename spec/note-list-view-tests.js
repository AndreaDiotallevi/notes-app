function returnsEmptyUnorderedListAfterInstantiation() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul></ul>")
}

function returnsHtmlStringWithNotes() {
  var noteList = new NoteList();
  noteList.add("first note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>first note</div></li></ul>")
}

returnsEmptyUnorderedListAfterInstantiation();
returnsHtmlStringWithNotes();
