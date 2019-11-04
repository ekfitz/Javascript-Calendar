var cy2019 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];

var cy2020 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];

var cy2021 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
];

// S is for start
// E is for end
// M is for middle
var nov19S = cy2019[0].slice(26);
var nov19E = cy2019[1];

var dec19S = cy2019[2];
var dec19E = cy2020[0].slice(0, 4);

var jan20S = cy2019[2].slice(28);
var jan20M = cy2020[0];
var jan20E = cy2020[1].slice(0, 1);

var feb20S = cy2020[0].slice(25);
var feb20E = cy2020[1];

var mar20S = cy2020[2];
var mar20E = cy2020[3].slice(0, 4);

var apr20S = cy2020[2].slice(28);
var apr20M = cy2020[3];
var apr20E = cy2020[4].slice(0, 2);

var may20S = cy2020[3].slice(25);
var may20M = cy2020[4];
var may20E = cy2020[5].slice(0, 6);

var jun20S = cy2020[4][30];
var jun20M = cy2020[5];
var jun20E = cy2020[6].slice(0, 4);

var jul20S = cy2020[5].slice(27);
var jul20M = cy2020[6];
var jul20E = cy2020[7][0];

var aug20S = cy2020[6].slice(25);
var aug20M = cy2020[7];
var aug20E = cy2020[8].slice(0, 5);

var sep20S = cy2020[7].slice(29);
var sep20M = cy2020[8];
var sep20E = cy2020[9].slice(0, 3);

var oct20S = cy2020[8].slice(26);
var oct20E = cy2020[9];

var nov20S = cy2020[10];
var nov20E = cy2020[11].slice(0, 5);

var dec20S = cy2020[10].slice(28);
var dec20M = cy2020[11];
var dec20E = cy2021[0].slice(0, 2);

var nov19 = [...nov19S, ...nov19E];
var dec19 = [...dec19S, ...dec19E];
var jan = [...jan20S, ...jan20M, ...jan20E];
var feb = [...feb20S, ...feb20E];
var mar = [...mar20S, ...mar20E];
var apr = [...apr20S, ...apr20M, ...apr20E];
var may = [...may20S, ...may20M, ...may20E];
var jun = [jun20S, ...jun20M, ...jun20E];
var jul = [...jul20S, ...jul20M, jul20E];
var aug = [...aug20S, ...aug20M, ...aug20E];
var sep = [...sep20S, ...sep20M, ...sep20E];
var oct = [...oct20S, ...oct20E];
var nov = [...nov20S, ...nov20E];
var dec = [...dec20S, ...dec20M, ...dec20E];

var d = new Date();
var thisMonth = d.getMonth();

// [top, left];
var day1 = ["0%", "0%"];
var day2 = ["0%", "14.29%"];

var date1 = firstDay;

addElement(day1, day1[0], day1[1]);
addElement(day2, day2[0], day2[1]);
addText(date1, firstDay);

// (x = day1, t = day1[0], l = day1[1]);
function addElement(x, t, l) {
  x = document.createElement("div");

  var calendar = document.getElementById("calendar");
  calendar.appendChild(x);
  x.className = "days";
  x.style.top = t;
  x.style.left = l;
}

// (x = date1, y = firstDay);
function addText(x) {
  x = document.createTextNode(10);
  day1.appendChild(x);
}

function firstDay() {
  if (thisMonth == 10) {
    return nov19[0];
  }
}
