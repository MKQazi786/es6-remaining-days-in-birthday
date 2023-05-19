setInterval(
    function remainingBirthday() {
    
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
    
        } else if (month === "February") {
    
            newMonth = 1
    
        } else if (month === "March") {
    
            newMonth = 2
    
        } else if (month === "April") {
    
            newMonth = 3
    
        } else if (month === "May") {
    
            newMonth = 4
    
        } else if (month === "June") {
    
            newMonth = 5
    
        } else if (month === "July") {
    
            newMonth = 6
    
        } else if (month === "August") {
    
            newMonth = 7
    
        } else if (month === "September") {
    
            newMonth = 8
    
        } else if (month === "October") {
    
            newMonth = 9
    
        } else if (month === "November") {
    
            newMonth = 10
    
        } else if (month === "December") {
    
            newMonth = 11
    
        }
    
        let months = newMonth - currentMonth 
    
        if (months < 0) {
    
            months = months + 12
    
        } else {
    
            months = months
    
        }
    
        let dates = date - currentDate
    
        if (dates < 0) {
    
            dates = dates + 30
            months = months - 1
    
        } else {
    
            dates = dates
    
        }
    
        let hour = currentFullDate.getHours()
    
        let hours = 23 - hour
    
        if (hour === 0) {
    
            dates = dates - 1
    
        } else {
    
            dates = dates
    
        }
    
        let minute = currentFullDate.getMinutes()
    
        let minutes =  60 - minute
    
        if (minutes === 0) {
    
            hour = hour - 1
    
        } else {
    
            hour = hour
    
        }
    
        let second = currentFullDate.getSeconds()
    
        let seconds = 60 - second
    
        if (seconds === 0) {
    
            minutes = minutes - 1
    
        } else {
    
            minutes = minutes
    
        }
    
        let milliSecond = currentFullDate.getMilliseconds()
    
        let milliSeconds = 1000 - milliSecond
    
        if (milliSeconds === 0) {
    
            seconds = seconds - 1
    
        } else {
    
            seconds = seconds
    
        }
    
        if (months === 1) {
            
            month1 = 'month'
    
        } else {
            month1 = 'months'
        }
        
        if (dates === 1) {
            
            date1 = 'day'
    
        } else {
            date1 = 'days'
        }
    
        if (hours === 1) {
            
            hour1 = 'hour'
    
        } else {
            hour1 = 'hours'
        }
    
        if (minutes === 1) {
            
            minutes1 = 'minute'
    
        } else {
            minutes1 = 'minutes'
        }
    
        if (seconds === 1) {
            
            seconds1 = 'second'
    
        } else {
            seconds1 = 'seconds'
        }
    
        if (milliSeconds === 1) {
            
            milliSeconds1 = 'milli second'
    
        } else {
            milliSeconds1 = 'milli seconds'
        }
    
        
    
        
        title = `${months} ${month1} ,<hr/> ${dates} ${date1} ,<hr/> ${hours} ${hour1} ,<hr/> 
        ${minutes} ${minutes1} ,<hr/> ${seconds} ${seconds1} ,<hr/> ${milliSeconds} ${milliSeconds1}`
    
        // console.log(title)
        document.querySelector('#title').innerHTML = title
    }, 1    
)