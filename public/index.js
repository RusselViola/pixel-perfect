function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else
  {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var urlParams = new URLSearchParams(window.location.search);
var keys = urlParams.keys();
var values = urlParams.values();
var keysArray = [];
var valuesArray = [];

for(key of keys) {
  keysArray.push(key);
};
for(value of values) {
  valuesArray.push(value);
};

var params = {};
for(var i = 0; i < keysArray.length; i++) {
  var key = keysArray[i];
  var value = valuesArray[i];
  if(params[key] === undefined) {
    params[key] = value;
  }
};
var cookieName = params.p1 + params.p2

document.addEventListener('DOMContentLoaded', function(){
  var myCookie = getCookie(cookieName);
  if (myCookie == null) {
    var img = document.createElement('img');
    img.src = 'http://i.w55c.net/a.gif?p1=' + params.p1 + '&p2=' + params.p2
    if(document.body != null){ document.body.appendChild(img); }
    var imgTwo = document.createElement('img');
    imgTwo.src = 'http://i.w55c.net/b.gif?price=500&p2=' + params.p2 + '&sku=d90&p1=' + params.p1 + '&t=conversion'
    if(document.body != null){ document.body.appendChild(imgTwo); }
    setCookie(cookieName,window.location.href, .0005);
  }
}, false);
