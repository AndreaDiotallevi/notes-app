(function(exports) {
  var idCounter = 0;

  function Note(noteText, id) {
    this._text = noteText;
    this._id = idCounter++ - 1;
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
