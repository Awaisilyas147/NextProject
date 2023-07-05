import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
// import YourComponent from "./input";
export default function BlogAccordions({ pages = -1 }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showMenu, setShowMenu] = useState(false);
  console.log(currentRoute);
  console.log("currentRoute");
  const [expanded, setExpanded] = useState(false);
  const [expandedblockchain, setExpandedBlockchain] = useState(false);
  const toggleContent = () => {
    setExpanded(!expanded);
  };
  const toggleContentblockchain = () => {
    setExpandedBlockchain(!expandedblockchain);
  };
  const customStyle = {
    borderBottom: '2px dashed black',
    // with: "20px"

    // add any other custom styles here
  };  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const borderClass = isClicked ? 'border-black' : 'border-white';

  return (
    <>
      <div className="">
        <div className="border-l border-r border-black">
          <div className="flex flex-col justify-between w-full bg-black">
            <div className="flex flex-row justify-between w-full border-b border-white ">
              <Link href={"./"}>
                <div className=" text-white py-4 px-4 Azeret-mono cursor-pointer">
                  Sigchain
                </div>
              </Link>
              <div className="hidden md:block lg:block">
                <div className="flex justify-between px-4">
                  <Link href={"/contact"}>
                  <div className=" text-white py-4 px-4 Azeret-mono cursor-pointer">
                    Contact
                  </div>
                  </Link>
                  <Link href={"/blog"}>
                    <div className=" text-white py-4 px-4 Azeret-mono">
                      Blog
                    </div>
                  </Link>
                </div>
              </div>
              <div className="md:hidden ">
                <div className="flex justify-between px-4 ">
                  <div className=" text-white py-4 px-4 Azeret-mono ">
                    <div id="menuToggle" onClick={() => setShowMenu(!showMenu)}>
                      <input type="checkbox" />
                      <span id="span1"></span>
                      <span id="span2"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showMenu && (
              <div className="block md:hidden ">
                <div className="flex justify-between w-full bg-black ">
                  <div className="flex justify-between px-4">
                    <div className=" text-white py-4 pr-4 Azeret-mono">
                      Contact
                    </div>
                  <Link href={"/blog"}>

                    <div className=" text-white py-4 px-4 Azeret-mono">
                      Blog
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <YourComponent /> */}
          <Accordion defaultIndex={pages} className="w-full">

          

            <AccordionItem className="border-b border-black  dark:!border-black Azeret-mono ">
            <h2 className={`border-b px-6 py-6 ${borderClass}`} onClick={handleClick}>
                <AccordionButton
                  className="flex justify-between "
                  // onClick={() => handleOpen(3)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black "
                    flex="1"
                    textAlign="left"
                  >
                   CONTACT THE SIGCHAIN GROUP
                  </span>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-14 "
                pb={4}
              >
              <div className="flex items-center gap-[64px] mt-6">
              <div htmlFor="" className="relative top-1 Azeret-mono">Name</div>
              <input type="text" className="border-b border-dashed border-black w-48 Azeret-mono" style={customStyle}  />
              </div>


              <div className="flex items-center gap-14 mt-6">
              <div htmlFor="" className="relative top-1 Azeret-mono">Email</div>
              <input type="text" className="border-b border-dashed border-black w-48 Azeret-mono" style={customStyle}  />
              </div>





              <div className="flex items-center gap-[42px] mt-4 mb-7">
              <div htmlFor="" className="relative top-3 Azeret-mono">Massage</div>
              <textarea type="text" className="border-b border-dashed border-black  Azeret-mono" style={customStyle}  />
              </div>


<button type="submit " >
    <span className="Azeret-mono"> SEND →</span>  
</button>
            
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Link href={"./"}>
            <div className="flex items-center gap-1 mx-6">
              <div className="relative top-2">←</div>
              <div className="font-normal Azeret-mono mt-5">Back</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
