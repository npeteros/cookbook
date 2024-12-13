import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(session());

app.listen(port, () => {
    console.log('Listening to port!' + port);
});