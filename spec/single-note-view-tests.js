function returnsNoteHtmlString() {
  var note = new Note('first note');
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.noteHtml() === "<div>first note</div>")
}

returnsNoteHtmlString();
