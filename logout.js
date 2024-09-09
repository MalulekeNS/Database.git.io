document.addEventListener('DOMContentLoaded', function() {
    const returnHomeButton = document.getElementById('return-home');
    const loginAgainButton = document.getElementById('login-again');

    // Function to perform logout
    function performLogout() {
        fetch('http://localhost:5000/api/logout', {  // Update this URL as necessary
            method: 'POST',
            credentials: 'include'  // Include cookies or session info
        })
        .then(response => {
            if (response.ok) {
                // Redirect to home page
                window.location.href = 'index.html';  // Change this to your home page URL
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => console.error('Error during logout:', error));
    }

    // Handle Return to Home button click
    returnHomeButton.addEventListener('click', function() {
        window.location.href = 'index.html';  // Change this to your home page URL
    });

    // Handle Log In Again button click
    loginAgainButton.addEventListener('click', function() {
        performLogout();
        // Redirect to login page after logout
        setTimeout(() => window.location.href = 'login.html', 1000);  // Adjust timeout if needed
    });
});
