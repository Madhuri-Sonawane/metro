document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    setTimeout(function() {
        // Hide the splash screen after a delay (e.g., 3 seconds)
        hideSplashScreen();
    }, 3000); // Adjust the delay as needed
});

function hideSplashScreen() {
    var splashScreen = document.querySelector('.splash_screen');
    if (splashScreen) {
        splashScreen.style.display = 'none';

        window.location.href= 'home.html'
    }
}
