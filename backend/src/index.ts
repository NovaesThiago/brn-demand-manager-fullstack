import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import providerRoutes from './routes/provider.routes';
import demandRoutes from './routes/demand.routes';
import actionRoutes from './routes/action.routes';
import { setupSwagger } from './config/swagger';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://brn-demand-manager-frontend.vercel.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());
app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionRoutes);

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Servidor BRN Demand Manager rodando!');
});

app.listen(PORT, () => {
  console.log('Servidor BRN Demand Manager rodando!');
  console.log(`Porta: ${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/docs`);
  console.log(`Frontend: https://brn-demand-manager-frontend.vercel.app`);
});