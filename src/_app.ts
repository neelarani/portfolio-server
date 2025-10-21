import compression from 'compression';
import cors from 'cors';
import express from 'express';
import routes from './app/routes';
import cookieParser from 'cookie-parser';
import { defaultError } from './app/middlewares';

const app = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route for testing
app.get('/', (_req, res) => {
  res.send('API is running');
});

app.use('/api/v1', routes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found',
  });
});

app.use(defaultError);

export default app;
