(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList.listNotes();
  }

  NoteListView.prototype = {
    htmlString: function() {
      var HTMLString = "";
      this._noteList.forEach(function(note) {
        HTMLString += `<li><div>${note.text()}</div></li>`
      })
      return "<ul>" + HTMLString + "</ul>";
    }
  }

  exports.NoteListView = NoteListView;
})(this);
