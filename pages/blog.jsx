import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
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
                    <div className=" text-white py-4 px-4 Azeret-mono">
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
                  <Link href={"/contact"}>

                    <div className=" text-white py-4 pr-4 Azeret-mono">
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
              </div>
            )}
          </div>
          <Accordion defaultIndex={pages} className="w-full">
            <AccordionItem className="border-b border-black py-[17px] dark:!border-black Azeret-mono px-6">
              <h2>
                <AccordionButton
                  className="flex justify-between"
                  // onClick={() => handleOpen(1)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    Blog 01 - title
                  </span>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-8"
                pb={4}
              >
                <p className="mt-5">
                  {" "}
                  Historically we’ve come to think of money-as-a-commodity,
                  causing us to overlook it's fundamental function as a credit
                  relationship between two trading parties.{" "}
                </p>

                <p className="mt-5">
                  Exchange itself holds greater significance than money, as the
                  act of exchange merely needs a ledger for record-keeping,
                  rather than relying on a specific object known as money.
                </p>

                <p className="mt-5">
                  In both fiat and cryptocurrency systems there is an assumption
                  that the dollar or token holds intrinsic value in-and-of
                  itself. Investment models prioritise the purchase, possession
                  and trading of tokens, in the hope they will appreciate,
                  regardless of what they inherently represent.
                </p>
                <p className="mt-5">
                  This tulip mania sentiment is both economically risky and adds
                  to the instability of global markets.
                </p>

                {expandedblockchain && (
                  <>
                    <p className=" mt-5 ">
                      The discourse around crypto, Web3 and DeFi has conflated
                      decentralisation with disintermediation, and hasn’t solved
                      money.
                    </p>

                    <p className=" mt-5 ">
                      The blockchain is not decentralised. It is replicated and
                      distributed. Web3 and DeFi are not decentralised, and
                      they're not finance.
                    </p>

                    <p className=" mt-5 ">
                      Beyond the ‘crypto decentralisation theatre’ {"=>"} true
                      disintermediation {"=>"} direct messaging and credit
                      relationships.
                    </p>
                  </>
                )}
                <button
                  onClick={toggleContentblockchain}
                  className="text-black mt-2 hover:text-gray-700"
                >
                  {expandedblockchain ? "[Less]" : "[Read More]"}
                </button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="border-b border-black py-[17px] dark:!border-black Azeret-mono px-6">
              <h2>
                <AccordionButton
                  className="flex justify-between"
                  // onClick={() => handleOpen(2)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    Blog 02 - title
                  </span>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-8"
                pb={4}
              >
                {/* <p className="mt-8"> A parallel economy.</p> */}
                <p className="mt-5">
                  {" "}
                  Historically we’ve come to think of money-as-a-commodity,
                  causing us to overlook it's fundamental function as a credit
                  relationship between two trading parties.{" "}
                </p>

                <p className="mt-5">
                  Exchange itself holds greater significance than money, as the
                  act of exchange merely needs a ledger for record-keeping,
                  rather than relying on a specific object known as money.
                </p>

                <p className="mt-5">
                  In both fiat and cryptocurrency systems there is an assumption
                  that the dollar or token holds intrinsic value in-and-of
                  itself. Investment models prioritise the purchase, possession
                  and trading of tokens, in the hope they will appreciate,
                  regardless of what they inherently represent.
                </p>
                <p className="mt-5">
                  This tulip mania sentiment is both economically risky and adds
                  to the instability of global markets.
                </p>

                {expandedblockchain && (
                  <>
                    <p className=" mt-5 ">
                      The discourse around crypto, Web3 and DeFi has conflated
                      decentralisation with disintermediation, and hasn’t solved
                      money.
                    </p>

                    <p className=" mt-5 ">
                      The blockchain is not decentralised. It is replicated and
                      distributed. Web3 and DeFi are not decentralised, and
                      they're not finance.
                    </p>

                    <p className=" mt-5 ">
                      Beyond the ‘crypto decentralisation theatre’ {"=>"} true
                      disintermediation {"=>"} direct messaging and credit
                      relationships.
                    </p>
                  </>
                )}
                <button
                  onClick={toggleContentblockchain}
                  className="text-black mt-2 hover:text-gray-700"
                >
                  {expandedblockchain ? "[Less]" : "[Read More]"}
                </button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="border-b border-black py-[17px] dark:!border-black Azeret-mono px-6">
              <h2>
                <AccordionButton
                  className="flex justify-between"
                  // onClick={() => handleOpen(3)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    Blog 03 - title
                  </span>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-8"
                pb={4}
              >
                <p className="mt-5">
                  {" "}
                  Historically we’ve come to think of money-as-a-commodity,
                  causing us to overlook it's fundamental function as a credit
                  relationship between two trading parties.{" "}
                </p>

                <p className="mt-5">
                  Exchange itself holds greater significance than money, as the
                  act of exchange merely needs a ledger for record-keeping,
                  rather than relying on a specific object known as money.
                </p>

                <p className="mt-5">
                  In both fiat and cryptocurrency systems there is an assumption
                  that the dollar or token holds intrinsic value in-and-of
                  itself. Investment models prioritise the purchase, possession
                  and trading of tokens, in the hope they will appreciate,
                  regardless of what they inherently represent.
                </p>
                <p className="mt-5">
                  This tulip mania sentiment is both economically risky and adds
                  to the instability of global markets.
                </p>

                {expandedblockchain && (
                  <>
                    <p className=" mt-5 ">
                      The discourse around crypto, Web3 and DeFi has conflated
                      decentralisation with disintermediation, and hasn’t solved
                      money.
                    </p>

                    <p className=" mt-5 ">
                      The blockchain is not decentralised. It is replicated and
                      distributed. Web3 and DeFi are not decentralised, and
                      they're not finance.
                    </p>

                    <p className=" mt-5 ">
                      Beyond the ‘crypto decentralisation theatre’ {"=>"} true
                      disintermediation {"=>"} direct messaging and credit
                      relationships.
                    </p>
                  </>
                )}
                <button
                  onClick={toggleContentblockchain}
                  className="text-black mt-2 hover:text-gray-700"
                >
                  {expandedblockchain ? "[Less]" : "[Read More]"}
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
