import { useEffect } from "react";
import { useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import fethImages from "../../API/fetchImages";

export default function backgroundContainer() {
  const [HoldBgUrl, setHoldBgUrl] = useState(false);

  useEffect(() => {
    const query = "Nature";

    if (!HoldBgUrl) {
      fethImages(query, setHoldBgUrl);
    }
  });

  return (
    <header
      style={{
        backgroundImage: HoldBgUrl && HoldBgUrl,
      }}
      className={`flex flex-col justify-center bg-black w-screen h-56 sm:h-52 2xl:h-96 bg-no-repeat bg-cover`}
    >
      <InputContainer />
    </header>
  );
}
