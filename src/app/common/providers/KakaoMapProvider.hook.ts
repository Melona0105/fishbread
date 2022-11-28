import { useEffect, useRef } from "react";

function useKakaoMapProvider() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const { kakao } = window;
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      new kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
    }
  }, []);

  return {
    refs: {
      mapRef,
    },
  };
}

export default useKakaoMapProvider;
