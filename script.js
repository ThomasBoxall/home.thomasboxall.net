function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
// https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd



function getDate(){
    var element = document.getElementById("dateTime");
    var currentDate = Date.now();
    formattedDate = formatDate(currentDate);
    element.innerHTML = "Date: " + formattedDate;
    
}
