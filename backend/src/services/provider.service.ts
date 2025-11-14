import { ProviderRepository } from '../repositories/provider.repository';
import { CreateProviderInput, UpdateProviderInput } from '../schemas/provider.schema';

export class ProviderService {
  private repo = new ProviderRepository();

  getAll() {
    return this.repo.getAll();
  }

  getById(id: number) {
    return this.repo.getById(id);
  }

  create(data: CreateProviderInput) {  // ✅ Tipagem específica
    return this.repo.create(data);
  }

  update(id: number, data: UpdateProviderInput) {  // ✅ Tipagem específica
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}