import { PrismaClient } from '@prisma/client';
import { CreateProviderInput, UpdateProviderInput } from '../schemas/provider.schema';

const prisma = new PrismaClient();

export class ProviderRepository {
  getAll() {
    return prisma.provider.findMany({
      include: {
        demands: {
          include: {
            actions: true
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });
  }

  getById(id: number) {
    return prisma.provider.findUnique({ 
      where: { id },
      include: {
        demands: {
          include: {
            actions: {
              orderBy: { createdAt: 'asc' }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });
  }

  create(data: CreateProviderInput) {  // ✅ Tipagem específica
    return prisma.provider.create({ data });
  }

  update(id: number, data: UpdateProviderInput) {  // ✅ Tipagem específica
    return prisma.provider.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.provider.delete({ where: { id } });
  }
}