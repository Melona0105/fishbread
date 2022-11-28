import { CSSProperties } from "react";
import useKakaoMapProvider from "./KakaoMapProvider.hook";

interface KakaoMapProviderProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

function KakaoMapProvider({
  width = '100wv',
  height = '100vh',
}: KakaoMapProviderProps) {
  const { refs } = useKakaoMapProvider();
  const { mapRef } = refs;

  return <div ref={mapRef} style={{ width, height }}></div>;
}

export default KakaoMapProvider;
