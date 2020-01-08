var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log('*');
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('.')
    }
  }
}

function returnsNoteText() {
  var noteText = new Note('My favourite language is JavaScript');
  assert.isTrue(noteText.getText() === 'My favourite language is JavaScript');
}

returnsNoteText();
