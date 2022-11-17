import { useServiceContext } from "src/app/common/providers/ServiceProvider";

function HomeContainer() {
  const { storeService } = useServiceContext();

  storeService.getStore();

  return <div>홈</div>;
}

export default HomeContainer;
