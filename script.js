document.addEventListener('DOMContentLoaded', function() {
    

    
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form's default submit action
        event.preventDefault();

        
        // Clear the form fields
        form.reset();

        // Show the success message
        successMessage.style.display = 'block';

        // Optionally, hide the message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 5000);
    });
});