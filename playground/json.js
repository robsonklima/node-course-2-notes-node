/*********** Obj to string ************/
//var obj = {
//  name: 'Robson Lima'
//};
//
//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

/*********** String to obj ************/
//var personString = '{"name": "Robson Lima", "age": 31}';
//var person = JSON.parse(personString);
//
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

//note
console.log(typeof note);
console.log(note);