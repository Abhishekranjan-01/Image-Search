import { createContext, useEffect, useState } from "react";
import BackgroundContainer from "../HeaderContainer/BackgroundContainer";
import ImageContainer from "../ImageContainer/ImageContainer";
import AuroraBackgroundDemo from "../Background/BackgroundAurora";

const APIdataProvider = createContext(null);

function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(false);
  const [update, setUpdate] = useState(false);
  // alert("Wait");

  console.log("In HOme");
  useEffect(() => {
    if (localStorage.getItem("DATA_FROM_API_IMAGE_RESULTS") != null) {
      setDataFromAPI(
        JSON.parse(localStorage.getItem("DATA_FROM_API_IMAGE_RESULTS"))
      );
      console.log("In If");
    }
    console.log("In Use Effect");
  }, []);

  return (
    <APIdataProvider.Provider
      value={{ dataFromAPI, setDataFromAPI, update, setUpdate }}
    >
      <BackgroundContainer />
      {console.log("Inside Provider")}
      {dataFromAPI ? <ImageContainer /> : <AuroraBackgroundDemo />}
    </APIdataProvider.Provider>
  );
}
export default Home;
export { APIdataProvider };
