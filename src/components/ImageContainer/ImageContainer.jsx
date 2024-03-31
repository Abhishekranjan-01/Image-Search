import { useContext, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { APIdataProvider } from "../Home/Home";
import ContainerButtons from "../ImageContainerButtons/ContainerButtons";
import Footer from "../Footer/Footer";

export default function ImageContainer() {
  const { dataFromAPI, setDataFromAPI } = useContext(APIdataProvider);

  const [arrayOfImages, setArrayOfImage] = useState([]);
  const [loadImgs, setLoadImgs] = useState(true);

  const HandleScrollEvent = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 30 >=
      document.documentElement.scrollHeight
    ) {
      let tempArr = [...dataFromAPI.slice(0, 9)];
      console.log("DFAPI:\t", dataFromAPI);
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
  }, [dataFromAPI]);

  window.addEventListener("scroll", HandleScrollEvent);
  console.log("AOI:\t", arrayOfImages);
  console.log("DFAPI:\t", dataFromAPI);
  return (
    arrayOfImages[0]?.id && (
      <main
        id="img_container"
        className="sm:w-11/12 pb-12 mx-auto sm:overflow-x-hidden"
      >
        <div className="mt-[40px] columns-1 sm:columns-3 gap-[15px]">
          {console.log(arrayOfImages)}
          {console.log("isUndefined:\t", arrayOfImages[0]?.id == undefined)}
          {arrayOfImages[0]?.id !== undefined
            ? arrayOfImages.map((allData, i) => (
                <div
                  key={allData.id}
                  className="relative overflow-hidden mb-[15px] rounded-md shadow-md shadow-gray-600 w-fit max-sm:flex max-sm:flex-col max-sm:items-center"
                >
                  {console.log(arrayOfImages)}
                  {console.log(allData.src["original"])}
                  <LazyLoadImage
                    className="w-full bg-cover max-sm:px-2 sm:rounded-md rounded-sm"
                    effect="blur"
                    src={allData.src["original"]}
                    alt={allData.alt}
                  />

                  <ContainerButtons allData={allData} />
                </div>
              ))
            : ""}
        </div>
        <Footer />
      </main>
    )
  );
}
