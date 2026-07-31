import express  from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import favoriteRoutes from './routes/favorite.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoriteRoutes);

export default app;