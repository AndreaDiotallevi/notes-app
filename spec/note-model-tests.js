function testReturnNoteText() {
  var noteText = new Note('My favourite language is JavaScript');
  assert.isTrue(noteText.text() === 'My favourite language is JavaScript');
}

testReturnNoteText();
