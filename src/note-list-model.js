(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype = {
    listNotes: function() {
      return this._notes;
    },

    add: function(noteText) {
      this._notes.push(new Note(noteText));
    }
  }
  exports.NoteList = NoteList;
})(this);
