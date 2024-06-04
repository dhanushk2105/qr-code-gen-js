function generateQRCode() {
    const text = document.getElementById('text').value;
    const qrcodeContainer = document.getElementById('qrcode');
    
    // Clear previous QR code if any
    qrcodeContainer.innerHTML = '';

    if (text) {
        // Generate QR code
        QRCode.toCanvas(qrcodeContainer, text, function (error) {
            if (error) console.error(error);
            console.log('QR code generated!');
        });
    } else {
        alert('Please enter text or URL');
    }
}
