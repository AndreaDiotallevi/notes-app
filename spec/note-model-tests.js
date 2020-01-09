function testReturnNoteText() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue(note.text() === 'My favourite language is JavaScript');
}

function testReturnNoteId() {
  var note = new Note('first note', 0);
  assert.isTrue(note.id() === 0);
}

testReturnNoteText();
testReturnNoteId();
