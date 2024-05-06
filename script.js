function decodeBase64() {
  const base64Input = document.getElementById('base64Input').value;
  try {
    const decodedText = atob(base64Input);
    document.getElementById('decodedText').innerText = decodedText;
  } catch (error) {
    document.getElementById('decodedText').innerText = 'Invalid Base64 data!';
  }
}
