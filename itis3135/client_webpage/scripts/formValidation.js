function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Validate email format
    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone number format
    var phoneRegex = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/;
    if (!phone.match(phoneRegex)) {
        alert("Please enter a valid phone number (XXX-XXX-XXXX) or (XXXXXXXXXX).");
        return false;
    }

    return true;
}
