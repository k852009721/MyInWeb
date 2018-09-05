// import _ from 'lodash'; 

// function component() {
//     let element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
//   }

//   document.body.appendChild(component());

var _h1 = document.querySelector('h1');
var _h1Time = true;
var h1Timer = setInterval(function () {
  if (_h1Time) {
    _h1.style.fontSize = "80px";
    _h1Time = false;
  } else {
    _h1.style.fontSize = "50px";
    _h1Time = true;
  }
}, 1000);
var _span = document.createElement('span');
_span.innerHTML='hihi';
document.querySelector('body').appendChild(_span);