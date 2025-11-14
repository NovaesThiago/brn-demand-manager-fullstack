import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middlewares/error.middleware';
import providerRoutes from './routes/provider.routes';
import demandRoutes from './routes/demand.routes';
import actionRoutes from './routes/action.routes';
import { setupSwagger } from './config/swagger';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'http://localhost:5173', // desenvolvimento
    'https://brn-demand-manager-frontend.vercel.app/', // produção
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use(errorHandler);

app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionRoutes);

setupSwagger(app);

// ROTA HEALTH CHECK
app.get('/', (req, res) => {
  res.send('Servidor BRN Demand Manager rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/docs`);
});