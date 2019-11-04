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

var dom = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"];
// [top, left];
var d1 = ["0%", "0%"];
var d2 = ["0%", "14.29%"];
var d3 = ["0%", "28.58%"];
var d4 = ["0%", "42.87%"];
var d5 = ["0%", "57.16%"];
var d6 = ["0%", "71.45%"];
var d7 = ["0%", "85.74%"];


var calendar = document.getElementById("calendar");

addElement(d1, 0);
addElement(d2, 1);
addElement(d3, 2);
addElement(d4, 3);
addElement(d5, 4);
addElement(d6, 5);
addElement(d7, 6);

// (x = d1, z = 0 (index of dom));
function addElement(x, z) {
  var date = setMonth();
  x = document.createElement("div");
  var y = document.createTextNode(date[z]);
  x.appendChild(y);

  calendar.appendChild(x);
  x.className = "days";
  x.id = dom[z];
}

function setMonth() {
  if (thisMonth == 10) {
    return nov19;
  }
}


var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");
var day7 = document.getElementById("day7");

day1.style.top = d1[0];
day1.style.left = d1[1];

day2.style.top = d2[0];
day2.style.left = d2[1];

day3.style.top = d3[0];
day3.style.left = d3[1];

day4.style.top = d4[0];
day4.style.left = d4[1];

day5.style.top = d5[0];
day5.style.left = d5[1];

day6.style.top = d6[0];
day6.style.left = d6[1];

day7.style.top = d7[0];
day7.style.left = d7[1];
