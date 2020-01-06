(function(exports) {
  function NoteList() {
    this._list = [];
  }

  NoteList.prototype = {
    listNotes: function() {
      return this._list;
    },

    add: function(noteText) {
      this._list.push(noteText);
    }
  }
  exports.NoteList = NoteList;
})(this);