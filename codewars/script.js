const button = document.getElementById("changeColorButton");
const sendAlertButton = document.getElementById('send_alert_button');
const alertMessageInput = document.getElementById('alert_message');
const successMessage = document.getElementById('success_message');
const redirectButton = document.getElementById('redirect_button');
            
button.addEventListener("click", () => {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#33A7FF", "#FF33A7"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

sendAlertButton.addEventListener('click', function () {
    // Get the value of the alert message from the input field.
    const alertMessage = alertMessageInput.value;

    // Check if the message is not empty.
    if (alertMessage.trim() !== '') {
        // Perform your action here, such as sending the message to a server.
        // For this example, we'll display an alert with the message.
        alert('Alert Message: ' + alertMessage);
    } else {
        alert('message sent successfully');
    }
});

// Add a click event listener to the redirect button to navigate to a new page.
redirectButton.addEventListener('click', function () {
    // Redirect to a new page (replace 'new_page.html' with your actual page URL).
    window.location.href = 'new_page.html';
});
