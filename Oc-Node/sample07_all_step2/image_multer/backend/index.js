const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
// 최대 50메가
app.use(express.json({ limit: '50mb' }));
app.listen(3000, () => {
    console.log('서버 3000.');
});
// 디스크 저장소 정의
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadimages/')
        // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    // cb(null, file.originalname)
    // cb 콜백함수를 통해 전송된 파일 이름 설정
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname)); //시스템시간으로 파일 이름 설정
    }
})
// multer 객체 생성
const upload = multer({ storage: storage });
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file) // avatar 이름의 싱글 파일
    console.log(req.body) // 일반적인 폼 데이터
})
// photos 이름의 멀티 파일
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    console.log(req.files)
})