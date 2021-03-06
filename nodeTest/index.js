const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000); //포트번호 지정

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.listen(app.get('port'), ()=> {
    console.log(app.get('port'), '번 포트에서 대기 중');
});