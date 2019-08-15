const twelveToTwenty = function (twelve) {
  let stringToNumber = twelve.length > 6 ?
    Number(twelve.substr(0, 2)) :
    Number(twelve.substr(0, 1));
  const amPmCrop = twelve.slice(-2).toLowerCase();
  const twelveTransformTwenty = stringToNumber + 12 === 24 ?
    '00' :
    amPmCrop === 'am' ?
      stringToNumber = '0' + stringToNumber :
      stringToNumber + 12;
  const addingMinToHour = stringToNumber > 9 ?
    twelve.substr(2, 3) :
    stringToNumber <= 9 && twelve.length > 4 ?
      twelve.substr(2, 3) :
      twelve.substr(1, 3);

  let twenty = twelveTransformTwenty + addingMinToHour;

  if (stringToNumber > 24 || twelve.length === 5) {
    twenty = null;
  }

  return twenty;
};

const twentyToTwelve = function (twenty) {
  const stringToNumber = twenty.length > 4 ?
    Number(twenty.substr(0, 2)) :
    Number(twenty.substr(0, 1));
  const twentyTransformTwelve = stringToNumber % 12 || 12;
  const addingMinToHour = stringToNumber > 9 ?
    twenty.substr(2, 3) :
    stringToNumber <= 9 && twenty.length > 4 ?
      twenty.substr(2, 3) :
      twenty.substr(1, 3);
  const amPmCheck = stringToNumber < 12 ?
    ' AM' :
    stringToNumber === 24 ?
      ' AM' :
      ' PM';
  let twelve = twentyTransformTwelve + addingMinToHour + amPmCheck;

  if (stringToNumber < 0 || stringToNumber > 24 || twenty.length > 5) {
    twelve = null;
  }

  return twelve;
};

export {twentyToTwelve, twelveToTwenty};
