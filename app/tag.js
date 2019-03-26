const A = () => 15;

export default A();
//TEST

fetch('http://api.apixu.com/v1/current.json?key=c08f9f8a7ac34b338d1140437192203&q=Paris')
  .then(function(response) {
    return response.json();
  })
  