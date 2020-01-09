(function(exports) {
  function NoteController(noteList) {
    noteList.add("Favourite drink")
    this._noteListView = new NoteListView(noteList);
  };

  NoteController.prototype = {
    addHtml: function() {
      var htmlString = this._noteListView.htmlString();
      document.getElementById("app").innerHTML = htmlString;
    }
  }

  exports.NoteController = NoteController;
})(this);
