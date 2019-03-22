/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import A from 'tag';

console.log('!!!!', A);
document.getElementsByTagName('body')[0].appendChild(document.createElement("B").appendChild( document.createTextNode("Water")));
// ================================
// START YOUR APP HERE
// ================================

fetch('http://api.apixu.com/v1/current.json?key=c08f9f8a7ac34b338d1140437192203&q=Paris')
  .then(function(response) {
    console.log(response)
  })