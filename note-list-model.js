(function(exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype = {
    listNotes: function() {
      return this._list;
    },

    add: function(noteText) {
      this._list.push(new Note(noteText));
    }
  }
  exports.NoteList = NoteList;
})(this);
