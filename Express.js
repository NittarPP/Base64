const express = require('express');
const app = express();

// กำหนดเมธอด GET สำหรับเส้นทาง /encode
app.get('/encode', (req, res) => {
    // ดึงข้อความจาก URL parameter
    const text = req.query.text;

    // เข้ารหัสข้อความเป็น Base64
    const base64Text = Buffer.from(text).toString('base64');

    // ส่งข้อความ Base64 กลับไปยังผู้ใช้
    res.send(base64Text);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
