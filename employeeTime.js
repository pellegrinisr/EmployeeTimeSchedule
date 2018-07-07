$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC3U1A-0ntSJRmVvPMH3jY6fIK8Iy4eEG8",
        authDomain: "timesheet-eb833.firebaseapp.com",
        databaseURL: "https://timesheet-eb833.firebaseio.com",
        projectId: "timesheet-eb833",
        storageBucket: "timesheet-eb833.appspot.com",
        messagingSenderId: "783877785753"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    database.ref().on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childKey);
            console.log(childData);
        });
    });

    $('#submit-button').on('click', function(event) {
        event.preventDefault();
        var fullName = $('#fname').val().trim();
        var role = $('#role').val().trim();
        var startDate = $('#startDate').val().trim();
        var monthlyRate = $('#monthlyRate').val().trim();
        console.log(fullName);
        console.log(role);
        console.log(startDate);
        console.log(monthlyRate);
        database.ref().push({
            fullName: fullName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });
        $('#fname').val('');
        $('#lname').val('');
        $('#startDate').val('');
        $('#monthlyRate').val('');
    });
    
        //here we will calculate the months between
       
       // var dateValue = moment().toISOString();

        //==========================================

    function addToTable(fullName, role, startDate, monthsWorked, monthlyRate, totalBilled) {
        var myNewRow = $('<tr>');
        var nameDataTag = $('<td>');
        nameDataTag.html(fullName);
        myNewRow.append(nameDataTag);
        var roleDataTag = $('<td>');
        roleDataTag.html(role);
        myNewRow.append(roleDataTag);
        var startDateDataTag = $('<td>');
        startDateDataTag.html(startDate);
        myNewRow.append(startDateDataTag);
        var monthsWorkedDataTag = $('<td>');
        monthsWorkedDataTag.html(monthsWorked);
        myNewRow.append(monthsWorkedDataTag);
        var monthlyRateDataTag = $('<td>');
        monthlyRateDataTag.html(monthlyRate);
        myNewRow.append(monthlyRateDataTag);
        var totalBilledDataTag = $('<td>');
        totalBilledDataTag.html(totalBilled);
        myNewRow.append(totalBilledDataTag);
        $('#employee-output'),append(myNewrow);
    }
});