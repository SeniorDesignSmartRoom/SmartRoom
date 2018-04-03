  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCM7rMbDXVSjniogqJHcxYQiPTxO8MjKG0",
    authDomain: "lightcontrol-ff3aa.firebaseapp.com",
    databaseURL: "https://lightcontrol-ff3aa.firebaseio.com",
    projectId: "lightcontrol-ff3aa",
    storageBucket: "lightcontrol-ff3aa.appspot.com",
    messagingSenderId: "470768906050"
  };
  firebase.initializeApp(config);
 
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var OneTwoThree = myFirebase.child("OneTwoThree");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
OneTwoThree.child("states").set({
    "001": true,
    "002": true,
    "003": true
});
