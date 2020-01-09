(function(exports) {
  function NoteController(noteList) {
    noteList.addNote("Favourite drink")
    this._noteListView = new NoteListView(noteList);
  };

  NoteController.prototype = {
    addHtmlString: function() {
      var htmlString = this._noteListView.htmlString();
      document.getElementById("app").innerHTML = htmlString;
    },

    addHtmlNote: function() {
      console.log("inside addHtmlNote")
      window.addEventListener("hashchange", this.changeToSingleNoteHtml);
    },

    changeToSingleNoteHtml: function() {
      console.log("inside changetosinglenotehtml")
      var noteId = parseInt(location.hash.split('#notes/'), 10);
      var note = this._noteListView.getNoteById(noteId)
      console.log(note)
      var singleNoteView = new SingleNoteView(note)
      var htmlString = singleNoteView.htmlString();
      document.getElementById("app").innerHTML = htmlString;
    }
  }

  exports.NoteController = NoteController;
})(this);
