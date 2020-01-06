// (function(exports) {
//   function returnTestNoteText() {
//     var noteText = new Note('My favourite language is JavaScript');

//     if (noteText.getText() !== 'My favourite language is JavaScript') {
//       throw new Error("The note text is not equal to 'My favourite language is JavaScript'");
//     } else {
//       console.log("it returns the test note text");
//     };
//   };

//   returnTestNoteText();
// })(this);

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
}

function testReturnNoteText() {
  var noteText = new Note('My favourite language is JavaScript');
  assert.isTrue(noteText.getText() === 'My favourite language is JavaScript');
}

testReturnNoteText();
