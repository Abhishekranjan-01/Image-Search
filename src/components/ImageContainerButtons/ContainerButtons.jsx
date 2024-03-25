import { useNavigate } from "react-router-dom";
import downloadImg from "../../Features/downloadImg";
import { FaDownload } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";

export default function ContainerButtons({ allData }) {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0  sm:left-0 w-11/12 sm:w-full flex items-center justify-between p-1 max-sm:px-0 sm:p-3 bg-black bg-opacity-50 text-white">
      <div className="flex items-center gap-4">
        <div className="flex gap-1 sm:gap-2">
          <FcMindMap
            className="text-white font-bold sm:text-2xl text-lg"
            onClick={() => navigate("/About", { state: allData })}
          />
          <button
            className="italic sm:font-semibold sm:text-lg underline"
            onClick={() => navigate("/About", { state: allData })}
          >
            About
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => downloadImg(allData.src["original"])}>
          <FaDownload className="text-white sm:text-2xl text-lg" />
        </button>
      </div>
    </div>
  );
}
