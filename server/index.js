import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', async (req, res) => {
    res.send('Hello from the server!');
});

const startServer = async () => {
    app.listen(8080, () => {
        console.log('Server is running on http://localhost:8080');
    });
};

startServer();