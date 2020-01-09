function testReturnNoteId() {
  var note = new Note('first note');
  assert.isTrue(note.id() === 0);
}

function testReturnNoteText() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue(note.text() === 'My favourite language is JavaScript');
}

testReturnNoteId();
testReturnNoteText();
