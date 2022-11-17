import ServiceProvider from "./common/providers/ServiceProvider";
import HomeContainer from "./modules/home/HomeContainer";

function App() {
  return (
    <ServiceProvider>
      <HomeContainer />
    </ServiceProvider>
  );
}

export default App;
