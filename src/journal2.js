

export function Journal (name, entry) {
  this.name = name;
  this.entry = entry;
}

Journal.prototype.pushEntry = function(entries) {
  this.entry.push(entries);
};











export function Entry (title, date, teaser, body, vowels, cons) {
  this.title = title;
  this.date = date;
  this.teaser = teaser;
  this.body = body;
  this.vowels = vowels;
  this.cons = cons;
}

Entry.prototype.wordCount = function() {
  var entrySplit = this.body.split(" ");
  return entrySplit.length();
};


Entry.prototype.getTeaser = function() {
  var firstPeriod = this.body.search(".");
  this.teaser = this.body.slice(0, firstPeriod);
};

Entry.prototype.vowelCheck = function() {
  var characterArray = this.body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase().split(""); //eslint-disable-line
  characterArray.forEach(function(character) {
    if (character === "a" || "e" || "i" || "o" || "u") {
      console.log(character);
      return this.vowels;
    }
    else {
      this.cons.push(character);
    }
  });
};
