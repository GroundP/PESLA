const express = require('express');
const dotenv = require('dotenv');
const mainRouter = require('./routes/main');
const resultRouter = require('./routes/result');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const { sequelize } = require('./models');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('success to connect db');
    })
    .catch((err) => {
        console.error(err);
    })

//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRouter);
app.use('/result', resultRouter);   // localhost:5000/result

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});