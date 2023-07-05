import React, { useEffect } from "react";
import Accordions from "../src/Components/Accordions";


export default function Home() {
  useEffect(() => {
    console.log("hello HOME");
  });
  return (
    <>
  

      <div class="w-full">
     
        <Accordions page={0} />
       
      </div>
    </>
  );
}
