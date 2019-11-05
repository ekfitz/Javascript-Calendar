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

var dom = ["day1", "day2", "day3", "day4", "day5", "day6", "day7", "day8", "day9", "day10", "day11", "day12", "day13", "day14", "day15", "day16", "day17", "day18", "day19", "day20", "day21", "day22", "day23", "day24", "day25", "day26", "day27", "day28", "day29", "day30", "day31", "day32", "day33", "day34", "day35"];
// [top, left];
var d1 = ["0%", "0%"];
var d2 = ["0%", "14.29%"];
var d3 = ["0%", "28.58%"];
var d4 = ["0%", "42.87%"];
var d5 = ["0%", "57.16%"];
var d6 = ["0%", "71.45%"];
var d7 = ["0%", "85.74%"];

var d8 = ["20%", "0%"];
var d9 = ["20%", "14.29%"];
var d10 = ["20%", "28.58%"];
var d11 = ["20%", "42.87%"];
var d12 = ["20%", "57.16%"];
var d13 = ["20%", "71.45%"];
var d14 = ["20%", "85.74%"];

var d15 = ["40%", "0%"];
var d16 = ["40%", "14.29%"];
var d17 = ["40%", "28.58%"];
var d18 = ["40%", "42.87%"];
var d19 = ["40%", "57.16%"];
var d20 = ["40%", "71.45%"];
var d21 = ["40%", "85.74%"];

var d22 = ["60%", "0%"];
var d23 = ["60%", "14.29%"];
var d24 = ["60%", "28.58%"];
var d25 = ["60%", "42.87%"];
var d26 = ["60%", "57.16%"];
var d27 = ["60%", "71.45%"];
var d28 = ["60%", "85.74%"];

var d29 = ["80%", "0%"];
var d30 = ["80%", "14.29%"];
var d31 = ["80%", "28.58%"];
var d32 = ["80%", "42.87%"];
var d33 = ["80%", "57.16%"];
var d34 = ["80%", "71.45%"];
var d35 = ["80%", "85.74%"];


var calendar = document.getElementById("calendar");

addElement(d1, 0);
addElement(d2, 1);
addElement(d3, 2);
addElement(d4, 3);
addElement(d5, 4);
addElement(d6, 5);
addElement(d7, 6);
addElement(d8, 7);
addElement(d9, 8);
addElement(d10, 9);
addElement(d11, 10);
addElement(d12, 11);
addElement(d13, 12);
addElement(d14, 13);
addElement(d15, 14);
addElement(d16, 15);
addElement(d17, 16);
addElement(d18, 17);
addElement(d19, 18);
addElement(d20, 19);
addElement(d21, 20);
addElement(d22, 21);
addElement(d23, 22);
addElement(d24, 23);
addElement(d25, 24);
addElement(d26, 25);
addElement(d27, 26);
addElement(d28, 27);
addElement(d29, 28);
addElement(d30, 29);
addElement(d31, 30);
addElement(d32, 31);
addElement(d33, 32);
addElement(d34, 33);
addElement(d35, 34);

// (x = d1, z = 0 (index of dom));
function addElement(x, z) {
  var date = setMonth();
  x = document.createElement("div");
  var y = document.createTextNode(date[z]);
  x.appendChild(y);

  calendar.appendChild(x);
  x.className = "days";
  y.className = "dtext";

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
var day8 = document.getElementById("day8");
var day9 = document.getElementById("day9");
var day10 = document.getElementById("day10");
var day11 = document.getElementById("day11");
var day12 = document.getElementById("day12");
var day13 = document.getElementById("day13");
var day14 = document.getElementById("day14");
var day15 = document.getElementById("day15");
var day16 = document.getElementById("day16");
var day17 = document.getElementById("day17");
var day18 = document.getElementById("day18");
var day19 = document.getElementById("day19");
var day20 = document.getElementById("day20");
var day21 = document.getElementById("day21");
var day22 = document.getElementById("day22");
var day23 = document.getElementById("day23");
var day24 = document.getElementById("day24");
var day25 = document.getElementById("day25");
var day26 = document.getElementById("day26");
var day27 = document.getElementById("day27");
var day28 = document.getElementById("day28");
var day29 = document.getElementById("day29");
var day30 = document.getElementById("day30");
var day31 = document.getElementById("day31");
var day32 = document.getElementById("day32");
var day33 = document.getElementById("day33");
var day34 = document.getElementById("day34");
var day35 = document.getElementById("day35");

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

day8.style.top = d8[0];
day8.style.left = d8[1];

day9.style.top = d9[0];
day9.style.left = d9[1];

day10.style.top = d10[0];
day10.style.left = d10[1];

day11.style.top = d11[0];
day11.style.left = d11[1];

day12.style.top = d12[0];
day12.style.left = d12[1];

day13.style.top = d13[0];
day13.style.left = d13[1];

day14.style.top = d14[0];
day14.style.left = d14[1];

day15.style.top = d15[0];
day15.style.left = d15[1];

day16.style.top = d16[0];
day16.style.left = d16[1];

day17.style.top = d17[0];
day17.style.left = d17[1];

day18.style.top = d18[0];
day18.style.left = d18[1];

day19.style.top = d19[0];
day19.style.left = d19[1];

day20.style.top = d20[0];
day20.style.left = d20[1];

day21.style.top = d21[0];
day21.style.left = d21[1];

day22.style.top = d22[0];
day22.style.left = d22[1];

day23.style.top = d23[0];
day23.style.left = d23[1];

day24.style.top = d24[0];
day24.style.left = d24[1];

day25.style.top = d25[0];
day25.style.left = d25[1];

day26.style.top = d26[0];
day26.style.left = d26[1];

day27.style.top = d27[0];
day27.style.left = d27[1];

day28.style.top = d28[0];
day28.style.left = d28[1];

day29.style.top = d29[0];
day29.style.left = d29[1];

day30.style.top = d30[0];
day30.style.left = d30[1];

day31.style.top = d31[0];
day31.style.left = d31[1];

day32.style.top = d32[0];
day32.style.left = d32[1];

day33.style.top = d33[0];
day33.style.left = d33[1];

day34.style.top = d34[0];
day34.style.left = d34[1];

day35.style.top = d35[0];
day35.style.left = d35[1];
