import Price from "../entities/priceEntity";
import Store from "../entities/storeEntity";

/**
 * 가게에 관련된 서비스들의 형태를 추상화합니다.
 */
interface StoreRepository {
  getStore(): Promise<Store | void>;
  createStore(
    name: string,
    address: string,
    price: Price
  ): Promise<Store | void>;
  updateStore(): Promise<void>;
}

export default StoreRepository;
