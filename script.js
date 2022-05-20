fetch("http://worldtimeapi.org/api/ip").then((response)=> response.json().then((data)=>{
    console.log(data);
var timezone = data.timezone;
var day_of_week = data.day_of_week;
var day_of_year = data.day_of_year;
var week_number = data.week_number;
var unixtime = data.unixtime;
var abbreviation = data.abbreviation;
console.log(timezone)
console.log(day_of_week)
console.log(day_of_year)
console.log(week_number)
console.log(unixtime)
console.log(abbreviation)


let unixTimestamp = unixtime
//Since JavaScript works in milliseconds, you should convert 
// the time into milliseconds by multiplying it by 1000.
let date = new Date(unixTimestamp * 1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Will display time in 11:10 format
let formatTime = hours + ':' + minutes.substr(-2);
console.log(formatTime);

}));

fetch("https://programming-quotes-api.herokuapp.com/Quotes/random").then((response)=> response.json().then((quote)=>{
    var quoteCitation = quote.en;
    var quoteAuthor = quote.author;
    console.log(quoteCitation);
    console.log(quoteAuthor);
}));