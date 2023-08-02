// scripts.js
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to handle form submission
function signup(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById("username").value;
    const contact = document.getElementById("Contact").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const option = document.querySelector('input[name="option"]:checked').value;

    // Register the user with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registration successful
            const user = userCredential.user;

            // Save additional user information to Firestore or Realtime Database if needed
            // For simplicity, we'll just display a success message here
            document.getElementById("message").textContent = "User registration successful!";
        })
        .catch((error) => {
            // Handle errors during user registration
            const errorMessage = error.message;
            document.getElementById("message").textContent = errorMessage;
        });
}





