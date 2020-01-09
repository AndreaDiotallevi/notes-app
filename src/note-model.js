(function(exports) {
  var idCounter = 0;

  function Note(noteText) {
    this._text = noteText;
    this._id = idCounter++;
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
