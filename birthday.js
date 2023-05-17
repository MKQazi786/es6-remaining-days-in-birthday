function remainingBirthday(event) { {
    event.preventDefault()
}

    let month = document.getElementById("month").value
    let date = document.getElementById("date").value

    date = Number(date)

    let currentFullDate = new Date()

    let currentMonth = currentFullDate.getMonth()
    currentMonth = Number(currentMonth)
    let currentDate = currentFullDate.getDate()
    currentDate = Number(currentDate)

    if (month === "January") {

        newMonth = 0

    } else if (month = "February") {

        newMonth = 1

    } else if (month = "March") {

        newMonth = 2

    } else if (month = "April") {

        newMonth = 3

    } else if (month = "May") {

        newMonth = 4

    } else if (month = "June") {

        newMonth = 5

    } else if (month = "July") {

        newMonth = 6

    } else if (month = "August") {

        newMonth = 7

    } else if (month = "September") {

        newMonth = 8

    } else if (month = "October") {

        newMonth = 9

    } else if (month = "November") {

        newMonth = 10

    } else if (month = "December") {

        newMonth = 11

    }

    let months = newMonth - currentMonth 

    let dates = date - currentDate

    let hour = currentFullDate.getHours()

    let hours = 23 - hour

    let minute = currentFullDate.getMinutes()

    let minutes = minute - 60

    let second = currentFullDate.getSeconds()

    let seconds = 60 - second

    let milliSecond = currentFullDate.getMilliseconds()

    let milliSeconds = 1000 - milliSeconds



    if (newMonth === 1) {
        
        month1 = month

    } else {
        month1 = months
    }
    
    if (dates === 1) {
        
        date1 = day

    } else {
        date1 = days
    }

    if (hours === 1) {
        
        hour1 = hour

    } else {
        hour1 = hours
    }

    if (minutes === 1) {
        
        minutes1 = minute

    } else {
        minutes1 = minutes
    }

    if (seconds === 1) {
        
        seconds1 = seconds

    } else {
        seconds1 = second
    }

    

    
    title = `$(months) $(month1) ,<hr/> $(dates) $(date1) ,<hr/> $(hours) $(hour1) ,<hr/> 
    $(minutes) $(minute1) ,<hr/> $(seconds) $(second1) ,<hr/> $(milliSeconds) `

    console.log(title)
    // document.querySelector('#title').innerHTML = title
}

