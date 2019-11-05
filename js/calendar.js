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

var dbox = ["day1", "day2", "day3", "day4", "day5", "day6", "day7", "day8", "day9", "day10", "day11", "day12", "day13", "day14", "day15", "day16", "day17", "day18", "day19", "day20", "day21", "day22", "day23", "day24", "day25", "day26", "day27", "day28", "day29", "day30", "day31", "day32", "day33", "day34", "day35"];
var dtb = ["date1", "date2"];

var day1;
var day2;
var day3;
var day4;
var day5;

var dt1;
var dt2;
var dt3;
var dt4;
var dt5;

document.body.onload = addElement();
//addMore(dbox[1], dtb[1]);
//addMore(dbox[2], dtb[2]);

addMore(day2, dt2);

function addElement() {
  var day1 = document.createElement("div");
  var date1 = document.createTextNode(dec);
  day1.appendChild(date1);

  var calendar = document.getElementById("calendar");
  calendar.appendChild(day1);
  day1.className = "days";
}

// x = dbox[0], y = [dtb[0]];
function addMore(x, y) {
  x = document.createElement("div");
  y = document.createTextNode(feb);
  x.appendChild(y);

  var day1 = document.getElementById("day1");
  calendar.appendChild(x);
  calendar.insertAfter(x, day1);

  x.className = "nodays";
}

//function addDivs() {
//  var day1 = document.createElement("div");
//  var date1 = document.createTextNode(feb);
//  day1.appendChild(date1);
//  calendar.appendChild(day1);
//  day1.className = "days";
//  document.body.insertAfter(day1, newDays)
//}
