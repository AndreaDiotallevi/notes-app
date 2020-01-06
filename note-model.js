function Note(noteText) {
  this.text = noteText;
};

Note.prototype = (function() {
  function getText() {
    return this.text;
  }

  return {
    getText: getText
  };

})();
