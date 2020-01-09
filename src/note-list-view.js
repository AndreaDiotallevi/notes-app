(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype = {
    htmlString: function() {
      var HTMLString = "";
      this._noteList.listNotes().forEach(function(note) {
        HTMLString += `<li><div>${note.text().substring(0, 20)}</div></li>`
      })
      return "<ul>" + HTMLString + "</ul>";
    }
  }

  exports.NoteListView = NoteListView;
})(this);
