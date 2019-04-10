const twelveTotwenty = function(twelve) {
    
  var strToNum = twelve.length > 6 ? +twelve.substr(0, 2) : +twelve.substr(0, 1);
  var AmCheck = twelve.slice(-2).toLowerCase();
  var PmCheck = twelve.slice(-2).toLowerCase();
  var a = strToNum + 12 == 24 ? a = '00' : AmCheck == 'am' ? strToNum = '0' + strToNum : strToNum + 12; 
  var b = strToNum > 9 ? twelve.substr(2, 3) : (strToNum <= 9 && twelve.length > 4) ? twelve.substr(2, 3) : twelve.substr(1, 3);
  var twenty = a + b; 

    if (strToNum > 24 || twelve.length == 5) {
      twenty = null;
    }

 
  return twenty;
}

const twentyToTwelve = function(twenty) {
    
    var strToNum = twenty.length > 4 ? +twenty.substr(0, 2) : +twenty.substr(0, 1);
    var a = (strToNum % 12) || 12;
    var b = (strToNum > 9) ? twenty.substr(2, 3) : (strToNum <= 9 & twenty.length > 4) ? twenty.substr(2, 3) : twenty.substr(1, 3);
    var amPm = strToNum < 12 ? " AM" : strToNum == 24 ? " AM" : " PM";
    var twelve = a + b + amPm;

    if (strToNum < 0 || strToNum > 24 || twenty.length > 5) {
      twelve = null;
    }

    return twelve;
  }

export { twentyToTwelve, twelveTotwenty }