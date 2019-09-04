import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Entry } from './journal2';

// import { Journal } from './journal2';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    console.log("working");
    var userInput = $("#entry").val();
    var journalEntry = new Entry ("title", "date", "teaser", userInput);
    // journalEntry.vowelCheck();
    console.log(journalEntry.vowelCheck());
  });


});
