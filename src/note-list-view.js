(function(exports) {
  function NoteListView(noteList) {
    this._noteList = noteList;
  }

  NoteListView.prototype = {
    htmlString: function() {
      var htmlString = "";
      this._noteList.listNotes().forEach(function(note) {
        htmlString += `<li><a href="#notes/${note.id()}">${note.text().substring(0, 20)}</a></li>`
      })
      return "<ul>" + htmlString + "</ul>";
    },

    getNoteById: function(noteId) {
      return this._noteList.listNotes().find(note => note.id() === noteId)
    }
  }

  exports.NoteListView = NoteListView;
})(this);
