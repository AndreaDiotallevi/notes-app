(function(exports) {
  function Note(noteText) {
    this._text = noteText;
  };

  Note.prototype = {
    text: function() {
      return this._text;
    }
  }

  exports.Note = Note; 
})(this);
