(function(exports) {
  function NoteController(noteList, noteListView = NoteListView) {
    this._noteListView = new noteListView(noteList);
  };

  NoteController.prototype = {
    addHtmlNoteList: function() {
      var htmlString = this._noteListView.htmlString();
      document.getElementById("notes-container").innerHTML = htmlString;
    },

    addHtmlNote: function() {
      window.addEventListener("hashchange", function() {
        var noteId = parseInt(location.hash.split('#notes/')[1], 10);
        var note = this._noteListView.getNoteById(noteId);
        var singleNoteView = new SingleNoteView(note);
        var htmlString = singleNoteView.htmlString();
        document.getElementById("single-note-container").innerHTML = htmlString;
      }.bind(this));
    },

    addNote: function() {
      document.getElementById('text').addEventListener("submit", function(event) {
        event.preventDefault();
        var noteText = event.target.elements["note-text"].value;
        this._noteListView._noteList.addNote(noteText);
        this.addHtmlNoteList();
      }.bind(this));
    }
  }

  exports.NoteController = NoteController;
})(this);
