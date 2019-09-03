

function Journal (name, entry) {
  this.name = name;
  this.entry = entry;
}

Journal.prototype.pushEntry = function(entries) {
  this.entry.push(entries);
};









var vowelArray = [];
var conArray = [];


function Entry (title, date, teaser, body) {
  this.title = title;
  this.date = date;
  this.teaser = teaser;
  this.body = body;
}

Entry.body.prototype.wordCount = function() {
  var entrySplit = this.split(" ");
  return entrySplit.length();
};


Entry.prototype.getTeaser = function() {
  var firstPeriod = this.body.search(".");
  this.teaser = this.body.slice(0, firstPeriod);
};

Entry.prototype.vowelCheck = function() {
  var characterArray = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase().split("");
  characterArray.forEach(function(character) {
    if (character === "a" || "e" || "i" || "o" || "u") {
      character.push(vowelArray)
    }
    else {
      character.push(conArray)
    }
  })






  for (var i = 0; i < body.length; i++) {
    var letter = i;
    if (i === "a" || "e" || "i" || "o" || "u") {
      i.push(vowelArray);
    }
  }
}
