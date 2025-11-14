import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function seed() {
  try {
    const provider = await prisma.provider.create({
      data: {
        name: 'Thiago Dev',
        email: 'thiago@example.com',
        // Adicione outros campos conforme seu schema
      },
    });

    console.log('Provider criado:', provider);
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();