function generateQRCode() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (!name) {
        alert("Name parameter not found in the URL.");
        return;
    }
    console.log(name);

    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';

    new QRCode(qrCodeDiv, {
        text: name,
        width: 128,
        height: 128,
        // new thing added
        correctLevel : QRCode.CorrectLevel.L
    });
}
window.onload = function() {
    generateQRCode();
};
