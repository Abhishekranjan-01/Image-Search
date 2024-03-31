import axios from "axios";
import getOrientation from "../Orientation/getOrientation";
export default async function fethImages(
  query,
  setHoldBgUrlOrsetDataFromApi = null,
  dataFromAPI = false
) {
  axios
    .get(
      `https://api.pexels.com/v1/search/?page=1&per_page=80&orientation=${getOrientation()}&query=${query}`,
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXEL_HEADER_BG_FETCH,
        },
      }
    )
    .then((res) => {
      if (res.data.total_results <= 1) {
        alert("No Result Found !");
        return null;
      }
      if (dataFromAPI != false) {
        setHoldBgUrlOrsetDataFromApi(res.data.photos);
        localStorage.setItem(
          "DATA_FROM_API_IMAGE_RESULTS",
          JSON.stringify(res.data.photos)
        );
      } else {
        const random = Math.round(Math.random() * 80 - 1);
        setHoldBgUrlOrsetDataFromApi(
          `url(${res.data.photos[random].src[getOrientation()]})`
        );
      }
    })
    .catch((err) => {
      console.log(err);
      // alert(err);
    });
}
