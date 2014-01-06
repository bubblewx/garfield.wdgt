/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */
 
var date = new Date();

function leadingZero(n) {
  if (n < 10) {
    return "0" + n.toString();
  }
  return n;
}

function update()
{
  document.getElementById("loading").style.display = "block";
  var yyyy = date.getFullYear().toString();
  var mm = leadingZero(date.getMonth() + 1);
  var dd = leadingZero(date.getDate());
  var yy = yyyy.charAt(2) + yyyy.charAt(3);
  var wday = date.getDay();
  if (wday==0) {
    var image_ext = '.jpg';
  }
  else {
    var image_ext = '.gif';
  }
  document.getElementById("yyyy").innerHTML = yyyy;
  document.getElementById("mm").innerHTML = mm;
  document.getElementById("dd").innerHTML = dd;
  document.getElementById("comic").src = 
    "http://images.ucomics.com/comics/ga/" + yyyy + "/ga" + yy + mm + dd + image_ext;
  if (document.getElementById("comic").naturalWidth > 0) {
    document.getElementById("loading").style.display = "none";
  }
}

function loaded() {
  document.getElementById("loading").style.display = "none";
  window.resizeTo(document.getElementById("comic").naturalWidth + 42,
                  document.getElementById("comic").naturalHeight + 42);
}

function error() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("yyyy").innerHTML = "????";
  document.getElementById("mm").innerHTML = "??";
  document.getElementById("dd").innerHTML = "??";
  document.getElementById("comic").src = "Default.png";
}

function addToDate(y, m, d) {
  var firstDate = getFirstDate();
  var latestDate = getLatestDate();  
  var newDate = new Date();  
  newDate.setYear(date.getFullYear() + y);
  newDate.setMonth(date.getMonth() + m);
  newDate.setDate(date.getDate() + d);
  if ((firstDate <= newDate) && (newDate <= latestDate)) {
    date = newDate;
    update();
  }
}

function getFirstDate() {
  return new Date(1978, 6 - 1, 19)
}

function first() {
  date = getFirstDate();
  update();
}

function getLatestDate() {
  var newDate = new Date();
  if (newDate.getHours() < 7) {
    newDate.setDate(newDate.getDate() - 1);
  }
  return newDate;
}

function latest() {
  date = getLatestDate();
  update();
}

function random() {
  var newDate = getFirstDate();
  var firstDate = getFirstDate();
  var latestDate = getLatestDate();
  var daysApart = Math.round((latestDate - firstDate) / 86400000);
  newDate.setDate(newDate.getDate() + Math.round(daysApart * Math.random()));
  date = newDate;
  update();
}

function state(n) {
  document.getElementById("navigation").style.display = (n > 0) ? "block" : "none";
}

function show() {
  var latestDate = getLatestDate();
  var daysApart = (latestDate - date) / 86400000;  
  if (daysApart < 2) {
    latest();
  }
}

if (window.widget) {
  widget.onshow = show;
}
