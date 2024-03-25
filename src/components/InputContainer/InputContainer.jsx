import { useRef } from "react";
import { useContext } from "react";
import fethImages from "../../API/fetchImages";
import { APIdataProvider } from "../Home/Home";

export default function inputContainer() {
  const { dataFromAPI, setDataFromAPI } = useContext(APIdataProvider);
  const inputRef = useRef("");

  return (
    <form
      className="block mx-auto w-11/12 sm:w-1/2 shadow-2xl"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        localStorage.removeItem("SEARCH_IMAGE_RESULTS");
        fethImages(inputRef.current.value, setDataFromAPI, dataFromAPI);
      }}
    >
      <div className="w-full flex rounded-md px-1 sm:px-2 sm:py-1 py-[2px] bg-white">
        <input
          ref={inputRef}
          className="w-full sm:text-lg rounded-md outline-none"
          type="text"
          name="search"
          placeholder="Search For Image"
        />
        <button
          className="bg-orange-600 text-sm sm:text-base font-semibold text-gray-200 px-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
