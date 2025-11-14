import { ActionRepository } from '../repositories/action.repository';

export class ActionService {
  private repo = new ActionRepository();

  getAll() {
    return this.repo.getAll();
  }

  getById(id: number) {
    return this.repo.getById(id);
  }

  getByDemand(demandId: number) {  // ✅ MUDAR para number
    return this.repo.getByDemand(demandId);
  }

  create(data: any) {
    return this.repo.create(data);
  }

  update(id: number, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}