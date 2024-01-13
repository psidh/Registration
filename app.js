function generateQRCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (!name) {
        alert("Name parameter not found in the URL.");
        return;
    }
    const data = `Name: ${name}`;

    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';

    new QRCode(qrCodeDiv, {
        text: data,
        width: 128,
        height: 128
    });
}
window.onload = function() {
    generateQRCode();
};