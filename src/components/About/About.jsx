import { useLocation, useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import downloadImg from "../../Features/downloadImg";
import getOrientation from "../../Orientation/getOrientation";
import Footer from "../Footer/Footer";

export default function About() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section
      style={{ backgroundImage: location.state.src[getOrientation()] }}
      className="flex flex-col items-center gap-2 mt-10"
    >
      <div className="relative w-full h-fit flex flex-col items-center">
        <img
          className="w-11/12 sm:w-4/5 mx-auto sm:rounded-md rounded-sm"
          src={location.state.src[getOrientation()]}
          alt={location.state["alt"]}
        />
      </div>
      <h2 className="text-center text-lg sm:text-xl text-gray-900 max-sm:px-2 max-sm:font-semibold">
        {location.state.alt}
      </h2>
      <button
        className="w-fit mx-auto bg-orange-600 text-gray-200 text-base sm:text-lg font-semibold px-2 sm:rounded-md rounded-sm"
        type="button"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="flex flex-col gap-2 sm:gap-3">
        <button
          className="w-fit mx-auto bg-slate-800 text-gray-200 text-base sm:text-lg font-semibold px-2 sm:rounded-md rounded-sm"
          type="button"
          onClick={() => downloadImg(location.state.src["portrait"])}
        >
          Download portrait
        </button>
        <button
          className="w-fit mx-auto bg-slate-800 text-gray-200 text-base sm:text-lg font-semibold px-2 sm:rounded-md rounded-sm"
          type="button"
          onClick={() => downloadImg(location.state.src["landscape"])}
        >
          Download landscape
        </button>
      </div>
      <Footer />
    </section>
  );
}
