function generateQRCode() {
  const name = document.getElementById('name').value;
  const branch = document.getElementById('branch').value;
  const college = document.getElementById('college').value;

  // Update URL with parameters
  const params = new URLSearchParams({
      name: name,
      branch: branch,
      college: college,
  });

  const url = window.location.href.split('?')[0] + '?' + params.toString();
  window.history.replaceState({}, '', url);

  // Generate QR Code
  const data = `Name: ${name}\nBranch: ${branch}\nCollege: ${college}`;
  const qrCodeDiv = document.getElementById('qr-code');
  qrCodeDiv.innerHTML = '';

  new QRCode(qrCodeDiv, {
      text: data,
      width: 128,
      height: 128
  });
  
}
