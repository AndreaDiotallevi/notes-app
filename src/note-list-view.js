(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype = {
    htmlString: function() {
      var htmlString = "";
      this._noteList.listNotes().forEach(function(note) {
        htmlString += `<li><div>${note.text().substring(0, 20)}</div></li>`
      })
      return "<ul>" + htmlString + "</ul>";
    }
  }

  exports.NoteListView = NoteListView;
})(this);
