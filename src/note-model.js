(function(exports) {
  function Note(noteText, id) {
    this._text = noteText;
    this._id = id;
  };

  Note.prototype = {
    text: function() {
      return this._text;
    },

    id: function() {
      return this._id;
    }
  }

  exports.Note = Note; 
})(this);
