/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Rachel Klimek
3SEP2019

Quotes found on: https://www.codeofliving.com/55-powerful-short-quotes-sayings-life/
Note: all citations and years are made up. The quotes I found did not contains any additional information besides quote and source.
******************************************/


//Array of quote objects
var quote = [

  {question: 'Problems are not stop signs, they are guidelines.',
   source: 'Robert H. Schiuller',
   citation: null,
    year: 2001},
  {question: 'One day the people that don’t even believe in you will tell everyone how they met you.',
   source: 'Johnny Depp',
    citation: 'unknown',
    year: null },
   {question: 'If I’m gonna tell a real story, I’m gonna start with my name.',
    source: 'Kendrick Lamar',
    citation: null,
    year: null },
  {question: 'If you tell the truth you don’t have to remember anything.',
    source: 'Mark Twain',
    year: 2010,
    citation: 'second unknown'},
  {question: 'Have enough courage to start and enough heart to finish.',
    source: 'Jessica N. S. Yourko',
    citation: null,
    year: null},
  {question: 'Hate comes from intimidation, love comes from appreciation.',
    source: 'Tyga',
    citation: null,
    year: null}
];

//log quotes in console for code tracking
console.log(quote);

//declare variables
var randQuote;
var randSource;
var randCitation;
var randYear;

//random quote function returning the random quote
function getRandomQuote() {
var topNum = Math.floor(Math.random() * quote.length);
return quote[topNum];
}
//log random quote in console for code tracking
console.log(getRandomQuote());

//start print function
function printQuote() {
  //introtuce print function variables
var useQuote = getRandomQuote();
var message = '';

message += '<p class="question">' + useQuote.question + '</p>';

message += '<p class="source">'+ useQuote.source;

//use conditional if statements to skip citation and year if they are null in the quote
if (useQuote.citation) {
  message +=  '<span class="citation"> '+ useQuote.citation + '</span>';
}
if (useQuote.year) {
  message += '<span class="year"> ' + useQuote.year + '</span>';
}
message += '</p>';


document.getElementById("quote-box").innerHTML = message;
}
printQuote();

//Show another quote buttom
document.getElementById('load-quote').addEventListener("click", printQuote, false);
