(function(exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype = {
    listNotes: function() {
      return this._list;
    }
  }
  exports.NoteList = NoteList;
})(this);