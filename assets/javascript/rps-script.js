

  
var config = {
	apiKey: "AIzaSyDI3iY0pqME0WKatwGYdSINUWejRu1YSjM",
	authDomain: "project-8743018060077641250.firebaseapp.com",
	databaseURL: "https://project-8743018060077641250.firebaseio.com",
	storageBucket: "project-8743018060077641250.appspot.com",
	};
firebase.initializeApp(config);

//create an instance of Google provider object
var provider = new firebase.auth.GoogleAuthProvider();

console.log(provider);

//sign in with popup
// firebase.auth().signInWithPopup(provider).then(function (result) {
// 	//This gives you a Google Access Token.
// 	console.log(result);
// 	var token = result.credential.accessToken;
// 	//The signed-in user info
// 	var user = result.user;
	// var username = user.displayName;
	// $('#welcome', {
	// 	text: 'Welcome '+username
	// }
// }).catch(function (error) {
// 	//Handle Errors here.
// 	var errorCode = error.code;
// 	var errorMessage = error.message;
// 	//The email of the user's account used.
// 	var email = error.email
// 	//The firebase.auth.Auth.AuthCredential type that was used.
// 	var credential = error.credential;
// 	console.log(errorMessage);
// });


//sign in with redirect
firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function (result) {
	if (result.credential) {
		alert('yay');
		//This gives you a Google Access Token.
		console.log(result);
		var token = result.credential.accessToken;
	}
	//The signed-in user info
	var user = result.user;
	var username = user.displayName;
	$('#welcome', {
		text: 'Welcome '+username
	}
}).catch(function (error) {
	alert('bad');
	//Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	//The email of the user's account used.
	var email = error.email
	//The firebase.auth.Auth.AuthCredential type that was used.
	var credential = error.credential;
});




// Create a variable to reference the database.
var dbRef = firebase.database().ref()
$('.usernameForm').on('submit', function () {
	var name = $('#nameInput').val();


	return false;
});

// dbRef.on('value', function (Snapshot) {
 	// console.log(Snapshot.val());

// });



// $('.box').on('click', '.choice', function () {
// 	console.log($(this).data('choice'));

// });









