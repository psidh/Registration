// Create a QRCode instance
var qrcode = new QRCode("qr-code");

// Function to generate QR Code
function generateQRCode() {
    var name = document.getElementById("name").value;
    var branch = document.getElementById("branch").value;
    var college = document.getElementById("college").value;

    // Check if any input is empty
    if (!name || !branch || !college) {
        alert("Please fill in all fields before generating QR code.");
        return;
    }

    // Combine input values
    var data = `Name: ${name}\nBranch: ${branch}\nCollege: ${college}`;

    // Generate QR Code
    qrcode.makeCode(data);
}

// Initial QR Code generation
generateQRCode();

// Update QR Code on input changes
document.getElementById("infoForm").addEventListener("input", generateQRCode);
