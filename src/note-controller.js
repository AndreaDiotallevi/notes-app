(function(exports) {
  function NoteController(noteList) {
    noteList.addNote("Favourite drink");
    this._noteListView = new NoteListView(noteList);
  };

  NoteController.prototype = {
    addHtmlNoteList: function() {
      var htmlString = this._noteListView.htmlString();
      document.getElementById("app").innerHTML = htmlString;
    },

    addHtmlNote: function() {
      // var self = this;
      var noteListView = this._noteListView;
      window.addEventListener("hashchange", function() {
        var noteId = parseInt(location.hash.split('#notes/')[1], 10);
        var note = noteListView.getNoteById(noteId);
        var singleNoteView = new SingleNoteView(note);
        var htmlString = singleNoteView.htmlString();
        document.getElementById("app").innerHTML = htmlString;
      });
    },
  }

  exports.NoteController = NoteController;
})(this);
