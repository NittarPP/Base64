<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base64 Converter</title>
</head>
<body>
    <form id="base64Form">
        <label for="url">URL:</label>
        <input type="text" id="url" name="url" value="https://eo443omdoa6867w.m.pipedream.net">
        <br>
        <label for="text">Text:</label>
        <input type="text" id="text" name="text">
    </form>
    <p id="base64Result"></p>

    <script>
        document.getElementById("text").addEventListener("input", function() {
            const url = document.getElementById("url").value;
            const text = this.value;
            const base64Text = btoa(text); // Encode text to Base64

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ base64Text: base64Text }) // Send Base64 text as JSON
            })
            .then(response => response.json())
            .then(data => {
                // Handle response from API
                console.log(data); // You can do something with the response here
                document.getElementById("base64Result").textContent = "Base64 text sent successfully.";
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById("base64Result").textContent = "Error occurred while sending Base64 text.";
            });
        });
    </script>
</body>
</html>
