var wrapper = document.getElementById("content");
var header = document.querySelector(".header");

var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 0;

document.addEventListener("DOMContentLoaded", function() {
  init();
});

function init() {
 loadJSON(function(response) {
    var json = JSON.parse(response);
    var count = Object.keys(json.films).length;
    for(var i=0; i<count; i++){
      var div = document.createElement("div");
      div.setAttribute("id", "div" + i);
      div.setAttribute("class", "film");
      
      var img = document.createElement("img");
      img.src = json.films[i].url;
      img.setAttribute("class", "filmimage");
      div.appendChild(img);

      var filmTitle = document.createTextNode(json.films[i].title);
      var runTime = document.createTextNode("Run time: " + json.films[i].running_time);
      var desc = document.createTextNode(json.films[i].description);

      var titleDiv = document.createElement("div");
      var rtDiv = document.createElement("div");
      var descDiv = document.createElement("div");

      titleDiv.setAttribute("class", "title");
      rtDiv.setAttribute("class", "rt");
      descDiv.setAttribute("class", "desc");

      titleDiv.appendChild(filmTitle);
      rtDiv.appendChild(runTime);
      descDiv.appendChild(desc);

      div.appendChild(titleDiv);
      div.appendChild(rtDiv);
      div.appendChild(descDiv);

      wrapper.appendChild(div);
    }

    // header json
    var intro = json.introduction;
    var pageTitle = document.createElement("h1");
    var titleText = document.createTextNode(intro.page_title);
    pageTitle.appendChild(titleText);
    var subtitle = document.createTextNode(intro.page_description);
    pageTitle.setAttribute("class", "title");
    header.appendChild(pageTitle);
    header.appendChild(subtitle);m
 });
}

function carousel(direction) {
  if (direction === "left") {
    index++;
  } else {
    index--;
  }
  wrapper.style.marginLeft = index * 330 + 'px';
}

left.addEventListener("click", function() {
  if (index < 0) {
  carousel("left"); }
})

right.addEventListener("click", function() {
  if (index > -17) {
  carousel("right"); }
})

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'dist/json/data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
 }
