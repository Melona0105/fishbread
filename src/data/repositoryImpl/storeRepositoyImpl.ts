import Price from "src/domain/entities/priceEntity";
import Store from "src/domain/entities/storeEntity";
import StoreRepository from "src/domain/repository/storeRepository";
import StoreAPIs from "../apis/storeAPIs";

class StoreRepositoryImpl implements StoreRepository {
  constructor(private readonly storeAPIs: StoreAPIs) {}

  getStore = async (): Promise<void | Store> => {
    await this.storeAPIs.getStore();
  };

  createStore = async (
    name: string,
    address: string,
    price: Price
  ): Promise<void | Store> => {
    await this.storeAPIs.createStore();
  };

  updateStore = async (): Promise<void> => {
    await this.storeAPIs.updateStore();
  };
}

export default StoreRepositoryImpl;
