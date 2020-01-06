(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList.listNotes();
  }

  NoteListView.prototype = {
    returnHTML: function() {
      var HTMLString = "";
      this._noteList.forEach(function(note) {
        HTMLString += `<li><div>${note.getText()}</div></li>`
      })
      return "<ul>" + HTMLString + "</ul>";
    }
  }

  exports.NoteListView = NoteListView;
})(this);
