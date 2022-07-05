var daysOfMonth = 0;
var events = [];
var eventNumber = 0;
var currentMonth = new Date().getMonth();
//receives month as a value from 0-11
var prevDaysOfMonth = 0;
var prevMonth = new Date().getMonth() - 1;
var nextDaysOfMonth = 1;
var nextMonth = new Date().getMonth()+1;
var currentDay = new Date().getDate();
//value of what the date is (1st-31st)
var currentDayOfWeek = new Date().getDay();
//value of which day of the week it is (Sun-Sat)
var tableBody;
// get form reference
var formReference = document.getElementById("eventListArea");

// create a function that will execute on every form submit
function onFormSubmit(event) {
  event.preventDefault();
}

// bind the function to the form submit event
formReference.addEventListener("submit", onFormSubmit);

function currentMonthConversion() {
  var currentYear = new Date().getFullYear();
  var headingDiv = document.getElementById("headerName");

  //converting numeric value of month to actual month name
  if (currentMonth == 0) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1> January " + currentYear + "</h1>";
  } else if (currentMonth == 1) {
    daysOfMonth = 28;
    headingDiv.innerHTML = "<h1> February " + currentYear + "</h1>";
  } else if (currentMonth == 2) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1> March " + currentYear + "</h1>";
  } else if (currentMonth == 3) {
    daysOfMonth = 30;
    headingDiv.innerHTML = "<h1> April " + currentYear + "</h1>";
  } else if (currentMonth == 4) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1> May " + currentYear + "</h1>";
  } else if (currentMonth == 5) {
    daysOfMonth = 30;
    headingDiv.innerHTML = "<h1> June " + currentYear + "</h1>";
  } else if (currentMonth == 6) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1> July " + currentYear + "</h1>";
  } else if (currentMonth == 7) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1> August " + currentYear + "</h1>";
  } else if (currentMonth == 8) {
    daysOfMonth = 30;
    headingDiv.innerHTML = "<h1> September " + currentYear + "</h1>";
  } else if (currentMonth == 9) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1>October " + currentYear + "</h1>";
  } else if (currentMonth == 10) {
    daysOfMonth = 30;
    headingDiv.innerHTML = "<h1>November " + currentYear + "</h1>";
  } else if (currentMonth == 11) {
    daysOfMonth = 31;
    headingDiv.innerHTML = "<h1>December " + currentYear + "</h1>";
  }
}

function calcDaysOfMonth () {
    if (prevMonth == 0) {
        prevDaysOfMonth = 31;
    }
    else if (prevMonth == 1) {
        prevDaysOfMonth = 28;
    }
    else if (prevMonth == 2) {
        prevDaysOfMonth = 31;
    }
    else if (prevMonth == 3) {
        prevDaysOfMonth = 30;
    }
    else if (prevMonth == 4) {
        prevDaysOfMonth = 31;
    }
    else if (prevMonth == 5) {
        prevDaysOfMonth = 30;
    }
    else if (prevMonth == 6) {
        prevDaysOfMonth = 31;
    }
    else if (prevMonth == 7) {
        prevDaysOfMonth = 31;
    }
    else if (prevMonth == 8) {
        prevDaysOfMonth = 30;
    }
    else if (prevMonth == 9) {
        prevDaysOfMonth = 31;
    }
    else if (prevMonth == 10) {
        prevDaysOfMonth = 30;
    }
    else if (prevMonth == 11) {
        prevDaysOfMonth = 31;
    }
}

function calcDate() {
  tableBody = document.createElement("tbody");
  //creates table body dynamically
  calcDaysOfMonth();

  for (var i = 0; i < 1; i++) {
    var row = document.createElement("tr");
    //adds table row to display current week
    for (var j = -currentDayOfWeek; j < 7 - currentDayOfWeek; j++) {
      //displays date for the range of the week
      var cell = document.createElement("td");
      //creates table data dynamically
      if (j == currentDayOfWeek) {
        //for today, displays date to the table cell
        var cellText = document.createTextNode(currentDay);
        cell.appendChild(cellText);
      } else if (j != currentDayOfWeek) {
        // for every day that is not today, calculate what the day for the rest of the week it is
        if (currentDay+j < 1){
            var cellText = document.createTextNode(prevDaysOfMonth);
            cell.appendChild(cellText);
            prevDaysOfMonth--;
        }
        if (currentDay + j > daysOfMonth) {
          var cellText = document.createTextNode(nextDaysOfMonth);
          cell.appendChild(cellText);
          nextDaysOfMonth++;
        } 
        else if (currentDay+j < -currentDayOfWeek) {
            calcDaysOfMonth();
            var cellText = document.createTextNode(prevDaysOfMonth);
            cell.appendChild(cellText);
        }
        else {
          var cellText = document.createTextNode(currentDay + j);
          cell.appendChild(cellText);
        }
      }
      row.appendChild(cell);
      //adds the table cell to the table row
    }
    tableBody.appendChild(row);
    //adds table row to the table body
  }
  daysOfWeek.appendChild(tableBody);
  document.body.appendChild(daysOfWeek);
}

function previousWeek() {
    currentDay = new Date().getDate()-7;
    calcDate();
}

function nextWeek() {
  currentDay = new Date().getDate()+7;
  calcDate();
}

function eventTracker() {
//able to know what day of the week the event is on
    var eventDate = formReference.value;
    events.push(eventDate.id);
    updateEventList();
    alert("You have created an event on "+ eventDate.value + "!");
}

function updateEventList() {
    for (var i = 0; i < events.length; i++){
        document.getElementById("eventListItems").innerText = events[i];
        document.getElementById("eventListItems").innerHTML.join(" ") = events;
    }
}

currentMonthConversion();
calcDate();