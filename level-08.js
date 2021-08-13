function convertNumToTime(num) {
    var hour = Math.floor(num / 60);
    var minutes = (num % 60);
    
    var hourText;
    if(hour <= 1) {
        hourText = "hour";
    } else {
        hourText = "hours";
    }
    var minuteText; 
    if(minutes <= 1) {
        minuteText = "minute";
    } else {
        minuteText = "minutes";
    }

    console.log(hour + " " + hourText + ", " + minutes + " " + minuteText);
}
