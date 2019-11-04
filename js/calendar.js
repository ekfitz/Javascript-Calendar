document.body.onload = addElement;

//var calendar = document.getElementById("calendar");

function addElement() {
  var newDays = document.createElement("div");
  var newDates = document.createTextNode("4");
  newDays.appendChild(newDates);

  var calendar = document.getElementById("calendar");
  calendar.appendChild(newDays);
  newDays.className = "days";
//  document.body.insertBefore(newDays, calendar);
}
