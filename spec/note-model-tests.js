function returnsNoteText() {
  var noteText = new Note('My favourite language is JavaScript');
  assert.isTrue(noteText.getText() === 'My favourite language is JavaScript');
}

returnsNoteText();
