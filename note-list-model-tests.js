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

function returnsEmptyArrayByDefault() {
  var noteList = new NoteList();
  assert.isTrue(noteList.listNotes().length === 0);
}

function returnsNoteList() {
  var noteList = new NoteList();
  var note1 = 'first test note'
  var note2 = 'second test note'

  noteList.add(note1);
  noteList.add(note2);

  assert.isTrue(noteList.listNotes().length === 2);
  assert.isTrue(noteList.listNotes()[0].getText() === 'first test note');
}

returnsEmptyArrayByDefault();
returnsNoteList();