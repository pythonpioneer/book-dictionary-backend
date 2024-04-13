// importing requirements
import express, { Request, Response } from 'express';
import cors from 'cors';


// required data to start and maintain the app
const PORT: number = Number(process.env.APP_PORT) || 5500;
const APIPATH: string = process.env.API_PATH || '';

// development environment specifications
const app = express();

// to use req.body, we have to use this middleware
app.use(express.json());
app.use(cors({
    credentials: true,
}));

// to check the health of the system
app.use(`${APIPATH}/health`, (_: Request, res: Response) => {
    return res.status(200).json({ status: 200, message: "Server is up and running!" });
});

// running the app, during development
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});