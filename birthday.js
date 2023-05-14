function remainingBirthday(event) { {
    event.preventDefault()
}

    let month = document.getElementById("month").value
    let date = document.getElementById("date").value

    date = Number(date)

    let currentFullDate = newDate()

    let currentMonth = currentFullDate.getMonth()
    currentMonth = Number(currentMonth)
    let currentDate = currentFullDate.getDate()
    currentDate = Number(currentDate)

    if (month === "January") {

        month2 = 0

    } else if (month = "February") {

        month2 = 1

    } else if (month = "March") {

        month2 = 2

    } else if (month = "April") {

        month2 = 3

    } else if (month = "May") {

        month2 = 4

    } else if (month = "June") {

        month2 = 5

    } else if (month = "July") {

        month2 = 6

    } else if (month = "August") {

        month2 = 7

    } else if (month = "September") {

        month2 = 8

    } else if (month = "October") {

        month2 = 9

    } else if (month = "November") {

        month2 = 10

    } else if (month = "December") {

        month2 = 11

    }

    let months = month2 - currentMonth 

    let dates = date - currentDate
    
    // title = `$(months) months $(dates) dates`

    // document.getElementById("title").innerHTML = title
}

