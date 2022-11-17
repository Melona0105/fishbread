import Price from "../entities/priceEntity";
import StoreRepository from "../repository/storeRepository";

/**
 * Repository에 정의된 Store에 관련된 함수들을 시행하는 use case입니다.
 */
class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  getStore = async () => await this.storeRepository.getStore();

  createStore = async (name: string, address: string, price: Price) =>
    await this.storeRepository.createStore(name, address, price);

  updateStore = async () => await this.storeRepository.updateStore();
}

export default StoreService;
