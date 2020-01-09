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
  noteController.addHtmlString();
  noteId = noteList.listNotes()[0].id();
  
  assert.isTrue(document.getElementById("app").innerHTML === `<ul><li><a href="#notes/${noteId}">Favourite drink</a></li></ul>`)
}

function showsSingleNoteHtml() {

}

canBeInstantiated();
changesElementInnerHtml();
showsSingleNoteHtml();
