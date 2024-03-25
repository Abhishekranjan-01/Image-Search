import { useContext, useEffect, useState } from "react";
import { APIdataProvider } from "../Home/Home";
import ContainerButtons from "../ImageContainerButtons/ContainerButtons";
import Footer from "../Footer/Footer";

export default function ImageContainer() {
  const { dataFromAPI, setDataFromAPI } = useContext(APIdataProvider);

  const [arrayOfImages, setArrayOfImage] = useState([]);
  const [loadImgs, setLoadImgs] = useState(true);

  const HandleScrollEvent = () => {
    if (
      Math.abs(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight -
          document.documentElement.scrollTop
      ) <= 15
    ) {
      let tempArr = [...dataFromAPI.slice(0, 9)];

      setArrayOfImage([...arrayOfImages, ...tempArr]);
      setDataFromAPI(dataFromAPI.slice(9, Infinity));
    }
  };

  useEffect(() => {
    if (loadImgs) {
      let tempArr = [...dataFromAPI.slice(0, 9)];

      setArrayOfImage([...arrayOfImages, ...tempArr]);
      setDataFromAPI(dataFromAPI.slice(9, Infinity));
      setLoadImgs(false);
    }
  }, []);

  window.addEventListener("scroll", HandleScrollEvent);

  return (
    <main className="sm:w-11/12 pb-12 mx-auto sm:overflow-x-hidden">
      <div className="mt-[40px] columns-1 sm:columns-3 gap-[15px]">
        {arrayOfImages.map((allData, i) => (
          <div
            key={allData.id}
            className="relative overflow-hidden mb-[15px] rounded-md shadow-md shadow-gray-600 w-fit max-sm:flex max-sm:flex-col max-sm:items-center"
          >
            <img
              className="w-full bg-cover max-sm:px-2 sm:rounded-md rounded-sm"
              src={allData.src["original"]}
              alt={allData.alt}
            />

            <ContainerButtons allData={allData} />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
