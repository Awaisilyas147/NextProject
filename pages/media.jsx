import React, { useEffect } from "react";
import Accordions from "../src/Components/Accordions";

export default function Home() {
  useEffect(() => {
    console.log("hello NEW small");
  });
  return (
    <>
  

      <div class="w-full">
        <Accordions page={3} />
        <Accordions page={3} />
      </div>
    </>
  );
}
