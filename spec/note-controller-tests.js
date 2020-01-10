function canBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
}

function changesElementInnerHtml() {
  function NoteListView() {};

  NoteListView.prototype = {
    htmlString: function() {
      return "This is the output"
    }
  }

  var noteList;
  var noteController = new NoteController(noteList, NoteListView);
  noteController.addHtmlNoteList();

  assert.isTrue(document.getElementById("notes-container").innerHTML === `This is the output`)
}

function showsSingleNoteHtml() {
  function NoteListView() {};

  NoteListView.prototype = {
    htmlString: function() {
      return "<ul><li><div>Favourite drink</div></li></ul>"
    }
  }

  var initialUrl = document.URL;
  var noteList = new NoteList();
  noteList.addNote("12345678901234567890123");
  var noteId = noteList.listNotes()[0].id();
  var noteController = new NoteController(noteList);
  noteController.addHtmlNoteList();
  noteController.addHtmlNote();
  document.getElementById(noteId).click();
  setTimeout(function() {
    assert.isTrue(document.URL === initialUrl + `#notes/${noteId}`);
    assert.isTrue(document.getElementById("single-note-container").innerHTML === '<div>12345678901234567890123</div>');
  }, 1000)
}

function testAddingNotes() {
  var addNoteCounter = 0;
  var addedNoteText = "";
  var noteList = {
    addNote: function(noteText) {
      addNoteCounter++;
      addedNoteText = noteText;
    }
  }
  var noteController = new NoteController(noteList);
  var noteListUpdateCounter = 0;
  noteController.addHtmlNoteList = function() {
    noteListUpdateCounter++;
  }
  noteController.addNote();
  document.getElementById("new-note-text").value = 'test note';
  document.getElementById("new-note-submit").click();
  setTimeout(function() {
    assert.isTrue(addNoteCounter === 1);
    assert.isTrue(addedNoteText === 'test note');
    assert.isTrue(noteListUpdateCounter === 1);
  })
}

canBeInstantiated();
changesElementInnerHtml();
showsSingleNoteHtml();
testAddingNotes()
