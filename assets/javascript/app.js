$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBSJJcs5rbxaFMsW3sHR8puX4IhR-AX-g0",
        authDomain: "portfolio-contact-ff50a.firebaseapp.com",
        databaseURL: "https://portfolio-contact-ff50a.firebaseio.com",
        projectId: "portfolio-contact-ff50a",
        storageBucket: "portfolio-contact-ff50a.appspot.com",
        messagingSenderId: "196034384234"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    console.log("hello");

    $("#submitButton").on("click", function (event) {

        // Stop button from submitting form
        event.preventDefault();

        // Set variables for contact input
        var contactName = $("#nameInput").val().trim();
        var contactEmail = $("#emailInput").val().trim();
        var contactMessage = $("#messageInput").val().trim();

        console.log(contactName);
        console.log(contactEmail);
        console.log(contactMessage);

        // Keys and values for Firebase database
        var contactInfo = {
            contactName: contactName,
            contactEmail: contactEmail,
            contactMessage: contactMessage,
        };

        // Push keys and values to database
        database.ref().push(contactInfo);

        $(".form-control").val("");
    });

    database.ref().on("child_added", function (childSnapshot) {
        // Log changes
        console.log(childSnapshot.val());

        // Save changes as variables
        var contactName = childSnapshot.val().contactName;
        var contactEmail = childSnapshot.val().contactEmail;
        var contactMessage = childSnapshot.val().contactMessage;

        console.log(contactName);
        console.log(contactEmail);
        console.log(contactMessage);

    });
});