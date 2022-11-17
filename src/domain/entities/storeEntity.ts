import Price from "./priceEntity";

/**
 * 앱 단에서 사용하는 User입니다.
 */
interface Store {
  id: string;
  name: string;
  address: string;
  price: Price;
}

export default Store;
