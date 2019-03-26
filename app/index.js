
console.log('!!!!', A);
document.getElementsByTagName('body')[0].appendChild(document.createElement("B").appendChild( document.createTextNode("Water")));
// ================================
// START YOUR APP HERE
// ================================

fetch('http://api.apixu.com/v1/current.json?key=c08f9f8a7ac34b338d1140437192203&q=Paris')
  .then(function(response) {
    console.log(response)
  })


import {twelveTotwenty, twentyToTwelve} from './utils/dateConverter';
console.log(twentyToTwelve('18:54'), twelveTotwenty('06:15 PM'));