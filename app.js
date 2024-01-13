function generateQRCode() {
  const name = document.getElementById('name').value;
  const branch = document.getElementById('branch').value;
  const college = document.getElementById('college').value;

  const data = `Name: ${name}\nBranch: ${branch}\nCollege: ${college}`;
  const qrCodeDiv = document.getElementById('qr-code');
  qrCodeDiv.innerHTML = '';

  new QRCode(qrCodeDiv, {
      text: data,
      width: 128,
      height: 128
  });
}
