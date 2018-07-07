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

    database.ref().on('value', function() {

    });

    $('#submit-button').on('click', function() {
        
    })
})