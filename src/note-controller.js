(function(exports) {
  function NoteController(noteList) {
    noteList.addNote("Favourite drink");
    this._noteListView = new NoteListView(noteList);
  };

  NoteController.prototype = {
    addHtmlNoteList: function() {
      var htmlString = this._noteListView.htmlString();
      document.getElementById("notes-container").innerHTML = htmlString;
    },

    addHtmlNote: function() {
      var self = this;
      window.addEventListener("hashchange", function() {
        var noteId = parseInt(location.hash.split('#notes/')[1], 10);
        var note = self._noteListView.getNoteById(noteId);
        var singleNoteView = new SingleNoteView(note);
        var htmlString = singleNoteView.htmlString();
        document.getElementById("single-note-container").innerHTML = htmlString;
      });
    },

    addNote: function() {
      document.getElementById('text').addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(event);
        console.log(event.target.elements["note-text"].value);
      });
    }
  }

  exports.NoteController = NoteController;
})(this);
