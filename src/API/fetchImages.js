import axios from "axios";
import getOrientation from "../Orientation/getOrientation";
export default function fethImages(
  query,
  setHoldBgUrlOrsetDataFromApi = null,
  dataFromAPI = null
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
      const random = Math.round(Math.random() * 80 - 1);
      if (dataFromAPI != null) {
        localStorage.setItem(
          "DATA_FROM_API_IMAGE_RESULTS",
          JSON.stringify(res.data.photos)
        );
        setHoldBgUrlOrsetDataFromApi(res.data.photos);
      } else {
        setHoldBgUrlOrsetDataFromApi(
          `url(${res.data.photos[random].src[getOrientation()]})`
        );
      }
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
}
