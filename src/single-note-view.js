(function(exports) {
  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype = {
    htmlString: function() {
      return `<div>${this._note.text()}</div>`
    }
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
