import React, { useEffect } from "react";
import Accordions from "../src/Components/Accordions";

export default function Home() {
  useEffect(() => {
    console.log("hello CHAR");
  });
  return (
    <>
   

      <div class="w-full">

        <Accordions page={1} />
      </div>
    </>
  );
}
