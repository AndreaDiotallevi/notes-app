(function(exports) {
  function NoteController(noteList) {
    noteList.addNote("Favourite drink")
    this._noteListView = new NoteListView(noteList);
  };

  NoteController.prototype = {
    addHtmlString: function() {
      var htmlString = this._noteListView.htmlString();
      document.getElementById("app").innerHTML = htmlString;
    }
  }

  exports.NoteController = NoteController;
})(this);
