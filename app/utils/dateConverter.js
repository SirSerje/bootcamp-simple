const twentyToTwelve = function (twelve) {
    for (let i = 0; i < twelve.length; i++) {
        return twelve[i];
    }
    const hours = twelve[0] + twelve[1];
    const minutes = twelve[3] + twelve[4];
    if (hours >= 12 && hours <= 24 && minutes >= 0 && minutes < 60) {
        return `${Number(hours) - 12}:${minutes} PM`;
    } else if (hours >= 0 && hours <= 12 && minutes >= 0 && minutes < 60) {
        return `${Number(hours)}:${minutes} AM`;
    }
};
twentyToTwelve('09:31');

const twelveTotwenty = function (twenty) {
    for (let i = 0; i < twenty.length; i++) {
        return twenty[i];
    }
    const hours = twenty[0] + twenty[1];
    const minutes = twenty[3] + twenty[4];
    if (hours >= 0 && hours <= 12 && minutes >= 0 && minutes < 60) {
        return `${Number(hours) + 12}:${minutes}`;
    } else {
        return 'формат после 12 часов до 59 минут';
    }
};
twelveTotwenty('04:00 PM');