import { Kakao } from "./common/interfaces/kakaoMap";
import ServiceProvider from "./common/providers/ServiceProvider";
import HomeContainer from "./modules/home/HomeContainer";

declare global {
  interface Window {
    kakao: Kakao;
  }
}

function App() {
  return (
    <ServiceProvider>
      <HomeContainer />
    </ServiceProvider>
  );
}

export default App;
