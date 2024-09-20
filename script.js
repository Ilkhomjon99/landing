function correctDate(date) {
    return date < 10 ? "0" + date : date;
}

function sale (){
    let saleDate = new Date (2024, 8, 25)
    let currantDate = new Date ()
    let date = saleDate - currantDate
    let day = Math.floor(date/(24*60*60*1000))
    let hours = Math.floor((date %(24*60*60*1000))/(60*1000*60))
    let minuts = Math.floor((date %(60*60*1000))/(60*1000))
    let seconds = Math.floor((date %(60*1000)/1000))
    let timeValue = document.getElementsByClassName("date")
    timeValue[0].innerHTML = day
    timeValue[1].innerHTML = hours
    timeValue[2].innerHTML = minuts
    timeValue[3].innerHTML = seconds
    if(date<= 0) {
        timeValue[0].innerHTML ="00";
        timeValue[1].innerHTML ="00";
        timeValue[2].innerHTML ="00";
        timeValue[3].innerHTML ="00";
    }

}
    
 sale()
 setInterval(()=>  {
    sale()
 }, 1000);  