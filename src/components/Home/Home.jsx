import { createContext, useEffect, useState } from "react";
import BackgroundContainer from "../HeaderContainer/BackgroundContainer";
import ImageContainer from "../ImageContainer/ImageContainer";
import AuroraBackgroundDemo from "../Background/BackgroundAurora";

const APIdataProvider = createContext(null);

function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(false);
  // alert("Wait");
  useEffect(() => {
    if (localStorage.getItem("DATA_FROM_API_IMAGE_RESULTS") != null) {
      setDataFromAPI(
        JSON.parse(localStorage.getItem("DATA_FROM_API_IMAGE_RESULTS"))
      );
    }
  }, []);

  return (
    <APIdataProvider.Provider value={{ dataFromAPI, setDataFromAPI }}>
      <BackgroundContainer />
      {dataFromAPI ? <ImageContainer /> : <AuroraBackgroundDemo />}
    </APIdataProvider.Provider>
  );
}
export default Home;
export { APIdataProvider };
