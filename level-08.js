function convertToTime(num) {
    let hours = Math.floor(num / 60);
    let minutes = (num % 60);
    
    let hourText;
    if(hours == 1) {
        hourText = "hour";
    } else {
        hourText = "hours";
    }
    let minuteText; 
    if(minutes == 1) {
        minuteText = "minute";
    } else {
        minuteText = "minutes";
    }

    console.log(hours + " " + hourText + ", " + minutes + " " + minuteText);
}