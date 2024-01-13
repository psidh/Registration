
const qrcode = new QRCode("qr-code");

function generateQRCode() {
    const name = document.getElementById("name").value;
    const branch = document.getElementById("branch").value;
    const college = document.getElementById("college").value;

    
    if (!name || !branch || !college) {
        alert("Please fill in all fields before generating QR code.");
        return;
    }

    
    const data = name;

    
    qrcode.makeCode(data);
}


generateQRCode();


document.getElementById("infoForm").addEventListener("input", generateQRCode);
