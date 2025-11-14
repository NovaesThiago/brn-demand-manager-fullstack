import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Conectado ao banco com sucesso!');
    const providers = await prisma.provider.findMany();
    console.log(`${providers.length} providers encontrados.`);
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();