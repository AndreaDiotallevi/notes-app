function canBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
}

function changesElementInnerHtml() {
  function NoteListView() {};

  NoteListView.prototype = {
    htmlString: function() {
      return "<ul><li><div>Favourite drink</div></li></ul>"
    }
  }

  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addHtmlNoteList();
  noteId = noteList.listNotes()[0].id();
  
  assert.isTrue(document.getElementById("app").innerHTML === `<ul><li><a id="${noteId}" href="#notes/${noteId}">Favourite drink</a></li></ul>`)
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
    assert.isTrue(document.getElementById("app").innerHTML === '<div>12345678901234567890123</div>');
  }, 1000)
}

canBeInstantiated();
changesElementInnerHtml();
showsSingleNoteHtml();
