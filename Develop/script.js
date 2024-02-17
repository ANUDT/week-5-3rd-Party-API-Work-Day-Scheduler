const d = new Date();
document.getElementById("demo").innerHTML = d;

var choosenDay = [
  {
    id: "0",
    hour: "09",
    time:"09",
    timeZone: "am",
    reminder:""
  },
  {
    id: "0",
    hour: "10",
    time:"10",
    timeZone: "am",
    reminder:""
  },
  {
    id: "0",
    hour: "11",
    time:"11",
    timeZone: "am",
    reminder:""
  },
  {
    id: "0",
    hour: "12",
    time:"12",
    timeZone: "am",
    reminder:""
  },
  {
    id: "0",
    hour: "1",
    time:"1",
    timeZone: "pm",
    reminder:""
  },
  {
    id: "0",
    hour: "2",
    time:"2",
    timeZone: "pm",
    reminder:""
  },
  {
    id: "0",
    hour: "3",
    time:"3",
    timeZone: "pm",
    reminder:""
  },
  {
    id: "0",
    hour: "4",
    time:"4",
    timeZone: "pm",
    reminder:""
  },





]
}







// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
