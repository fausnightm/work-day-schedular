// Display today's date
var todaydate = moment().format('dddd, MMM Do YYYY')
$('#currentDay').html(todaydate);

$(document).ready(function() {
    // saveBtn click listener
    $('.saveBtn').on('click', function (){
        // get nearby values using jQuery
        var text = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id');
    })
    // save text in local storage
    localStorage.setItem(time,text);
})

function timeTracker() {
    // get current number of hours
    var timeNow = moment().hour();

    // loop over time blocks
    $('.time-block').each(function (){
        var blockTime = parseInt($(this).attr('id').split('hour')[1]);
        // start for loops
    })
}

// loop over time blocks

// start function declare parse variable
    // check the time and addd the classes for background indicators


