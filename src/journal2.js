function Journal (name, entry) {
  this.name = name;
  this.entry = entry;
}

Journal.prototype.pushEntry = function(entries) {
  this.entry.push(entries);
};





$(document).ready(function(){

});





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
