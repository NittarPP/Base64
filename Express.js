const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const base64Text = data.base64Text;
                console.log("Received Base64 text:", base64Text);
                // ทำอย่างไรก็ตามที่คุณต้องการกับ Base64 text ที่ได้รับ
                // เช่น บันทึกลงในฐานข้อมูล หรือทำการประมวลผลต่อไป
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Data received successfully.');
            } catch (error) {
                console.error('Error parsing JSON:', error);
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Error parsing JSON.');
            }
        });
    } else {
        res.statusCode = 405; // Method Not Allowed
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method not allowed.');
    }
});

const port = process.env.PORT || 3000; // เลือก port ที่ต้องการให้เซิร์ฟเวอร์รันอยู่
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
