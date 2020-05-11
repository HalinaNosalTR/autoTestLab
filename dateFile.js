let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

let date = new Date (2012, 1, 19, 3, 12);
console.log(date);

function getWeekDay(date) {
    let daysWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return daysWeek[date.getDay()];
  }
console.log(getWeekDay(date));

function getLocalDay(date) {
    let localDay = date.getDay();
    if (localDay == 0) {
        localDay = 7;
    }
    return localDay;
  }
console.log(getLocalDay(date));

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
console.log(getDateAgo(date, 1));

function getLastDayOfMonth (year, month) {
    let lastDate = new Date (year, month+1, 0);
    let lastDay = lastDate.getDate(); 
    return lastDay;
}
console.log(getLastDayOfMonth(2020, 1)); 

function getSecondsToday() {
    let today = new Date().setHours(0, 0, 0, 0);
    return Math.round((Date.now() - today) / 1000);
}    
console.log(getSecondsToday()); 

function getSecondsToday() {
    let today = new Date().setHours(0, 0, 0, 0);
    return 86400 - Math.round((Date.now() - today) / 1000);
}
console.log(getSecondsToTomorrow()); 

function formatDate(){
    let result = now - date;

    if (result < 1000){
        return 'прямо сейчас';
    } 
    if (Math.floor(result / 1000) < 60){
        return Math.floor(result / 1000) + ' сек. назад';
    } 
    if (Math.floor(result / 60000) < 60){
        return Math.floor(result / 60000) + ' мин. назад';
    }
    let formatDatePast = date;
    formatDatePast = [
        '0' + formatDatePast.getDate(),
        '0' + (formatDatePast.getMonth() + 1),
        '' + formatDatePast.getFullYear(),
        '0' + formatDatePast.getHours(),
        '0' + formatDatePast.getMinutes()
    ].map(component => component.slice(-2));
    return formatDatePast.slice(0, 3).join('.') + ' ' + formatDatePast.slice(3).join(':');
}
console.log(formatDate());