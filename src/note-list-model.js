(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype = {
    listNotes: function() {
      return this._notes;
    },

    addNote: function(noteText) {
      this._notes.push(new Note(noteText, this.nextNoteId()));
    },

    nextNoteId: function() {
      return this._notes.length;
    }
  }
  exports.NoteList = NoteList;
})(this);
