import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// import Link from "next/link";
export default function Accordions({ page = -1 }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [showMenu, setShowMenu] = useState(false);
  console.log(currentRoute);
  console.log("currentRoute");

  // const [expandedItem, setExpandedItem] = useState(null);

  // const handleOpen = (index) => {
  //   if (expandedItem === index) {
  //     setExpandedItem(null); // Close the current item
  //   } else {
  //     setExpandedItem(index); // Open the selected item
  //   }
  // };

  const handleOpen = (value) => {
    let url = "";
    switch (value) {
      case 1:
        url = "/";
        break;
      case 2:
        url = "/platform";
        break;
      case 3:
        url = "/blockchain";
        break;
      case 4:
        url = "/media";
        break;
      case 5:
        url = "/money";
        break;
      default:
        url = "/";
        break;
    }

    window.history.pushState({}, "", url);
  };

  const [expanded, setExpanded] = useState(false);
  const [expandedblockchain, setExpandedBlockchain] = useState(false);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  const toggleContentblockchain = () => {
    setExpandedBlockchain(!expandedblockchain);
  };
  useEffect(() => {
    // const handlePopstate = () => {
    //   const path = window.location.pathname;
    //   console.log(path);
    //   console.log("path");
    //   // setOpen(path === "/description" ? 1 : 2);
    // };
    // switch (currentRoute) {
    //   case '':
    //     url = "/finance";
    //     break;
    //   case 2:
    //     url = "/platform";
    //     break;
    //   case 3:
    //     url = "/blockchain";
    //     break;
    //   case 4:
    //     url = "/media";
    //     break;
    //   case 5:
    //     url = "/money";
    //     break;
    //   default:
    //     url = "/";
    //     break;
  }, []);

  return (
    <>
      <div className="">
        <div className="border-l border-r border-black">
          <div className="flex flex-col justify-between w-full bg-black">
            <div className="flex flex-row justify-between w-full border-b border-white ">
              <Link href={"./"}>
                <div
                  className=" text-white py-4 px-4 Azeret-mono cursor-pointer"
                
                >
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
          {/* <Accordion className="w-full">
            <AccordionItem className="border-b border-gray-900 py-[17px] dark:!border-black Azeret-mono px-6">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      className="flex justify-between"
                      onClick={() => handleOpen(1)}
                    >
                      <span
                        className="text-left font-normal text-black"
                        flex="1"
                        textAlign="left"
                      >
                        AUTONOMOUS WEB & FINANCE
                      </span>
                      {isExpanded ? <div>yooooo</div> : <div>NOOOOO</div>}
                    </AccordionButton>
                  </h2>
                  {isExpanded && expandedItem === 1 && (
                    <AccordionPanel
                      className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-8"
                      pb={4}
                    >
                      <p className="mt-8">A parallel economy.</p>
                      <p className="mt-5">
                        Sigcoin defines money-as-information, rather than
                        money-as-a-commodity.
                      </p>
                      <p className="">
                        Reputable businesses issue personally signed coins to
                        self-capitalise their own production. The producers of
                        real-world assets stake their reputation when they issue
                        their own credit instruments, backing their value in
                        exchange. Reputation-based identity emerges in a market
                        context.
                      </p>
                      <p className="mt-5">
                        Putting the market back in control of their own credit.
                        Beyond cryptocurrency, producer credit is the next
                        evolution in finance, solving the fundamental credit
                        allocation problem in global markets.
                      </p>
                    </AccordionPanel>
                  )}
                </>
              )}
            </AccordionItem>

            <AccordionItem className="border-b border-black py-[17px] dark:!border-black Azeret-mono px-6">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      className="flex justify-between"
                      onClick={() => handleOpen(2)}
                    >
                      <span
                        className="text-left font-normal text-black dark:text-black"
                        flex="1"
                        textAlign="left"
                      >
                        SUPER-APP PLATFORM
                      </span>
                      {isExpanded ? <div>yooooo</div> : <div>NOOOOO</div>}
                    </AccordionButton>
                  </h2>
                  {isExpanded && expandedItem === 2 && (
                    <AccordionPanel
                      className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-8"
                      pb={4}
                    >
                      <p className="mt-8">A parallel economy.</p>
                      <p className="mt-5">
                        Sigcoin defines money-as-information, rather than
                        money-as-a-commodity.
                      </p>
                      <p className="">
                        Reputable businesses issue personally signed coins to
                        self-capitalise their own production. The producers of
                        real-world assets stake their reputation when they issue
                        their own credit instruments, backing their value in
                        exchange. Reputation-based identity emerges in a market
                        context.
                      </p>
                      <p className="mt-5">
                        Putting the market back in control of their own credit.
                        Beyond cryptocurrency, producer credit is the next
                        evolution in finance, solving the fundamental credit
                        allocation problem in global markets.
                      </p>
                    </AccordionPanel>
                  )}
                </>
              )}
            </AccordionItem>
          </Accordion> */}

          <Accordion defaultIndex={page} className="w-full">
            <AccordionItem className="border-b border-gray-900 py-[17px] dark:!border-black Azeret-mono px-6">
              <h2>
                <AccordionButton
                  className="flex justify-between"
                  onClick={() => handleOpen(1)}
                >
                  <span
                    className="text-left font-normal text-black"
                    flex="1"
                    textAlign="left"
                  >
                    AUTONOMOUS WEB & FINANCE
                  </span>
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="text-medium mt-2 text-left !text-black dark:!text-black Azeret-mono px-8"
                pb={4}
              >
                <p className="mt-8">
                  {" "}
                  A globally scalable, serverless, super-app platform.
                </p>
                <p className="mt-5">
                  {" "}
                  The Signature Chain, or Sigchain, is an infinitely scalable
                  communications and exchange platform, with decentralised
                  applications and payments built-in. With near-zero
                  infrastructure and scaling costs, Sigchain introduces a
                  paradigm shift in future application development and
                  interoperability. Beyond the centralised monolithic
                  blockchain, the future is decentralisation through
                  disintermediation. With direct peer-to-peer communication and
                  trading relationships, Sigchain enables businesses to
                  self-organise and self-capitalise, liberating the power of
                  productivity.{" "}
                </p>

                {/* <p className="">
                  {" "}
                  Reputable businesses issue personally signed coins to
                  self-capitalise their own production. The producers of real
                  world assets stake their reputation when they issue their own
                  credit instruments, backing their value in exchange.
                  Reputation-based identity emerges in a market context.{" "}
                </p> */}
                <p className="mt-5">
                  Human ingenuity is realised when individual autonomy prevails,
                  allowing innovation and production to emerge at scale.
                  Sigchain’s unified infrastructure for messaging, media, and
                  money revolutionises the way we communicate and transact in
                  both local and global markets.
                </p>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="border-b border-black py-[17px] dark:!border-black Azeret-mono px-6">
              <h2>
                <AccordionButton
                  className="flex justify-between"
                  onClick={() => handleOpen(2)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    SUPER-APP PLATFORM
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
                  Sigchain is a deep fusion of web, finance and market
                  intelligence technologies, introducing a new class of fully
                  interoperable apps, with frictionless integration of payments
                  into the entire application space.{" "}
                </p>
                {/* 
                <p className="">
                  {" "}
                  Super-apps provide multiple services including payment and financial transaction processing, effectively becoming an all-encompassing self-contained commerce and communication platform. For customers, super-apps offer a set of core features while also giving access to independently developed ‘mini-apps’. Third-parties can develop and publish mini-apps to the network. Customers can subscribe to those they value most. Sigchain is the worlds first peer-to-peer super-app platform.{" "}
                </p> */}
                <p className="mt-5">
                  Super-apps provide multiple services including payment and
                  financial transaction processing, effectively becoming an
                  all-encompassing self-contained commerce and communication
                  platform. For customers, super-apps offer a set of core
                  features while also giving access to independently developed
                  ‘mini-apps’. Third-parties can develop and publish mini-apps
                  to the network. Customers can subscribe to those they value
                  most. Sigchain is the worlds first peer-to-peer super-app
                  platform.
                </p>

                {expanded && (
                  <p className=" mt-5">
                    <ul className="list-disc">
                      <p>
                        Layer 1 - scalable peer-to-peer serverless transport
                      </p>
                      <p>Layer 2 - logic for state change</p>
                      <p>Layer 3 - unified interoperable super-apps</p>
                      <p className="mb-5">Featuring;</p>
                      <div className="relative left-10">
                        <li>Direct publisher-subscriber relationships</li>
                        <li>Users can create and pay for premium content</li>
                        <li>Follow, listen, block and ‘like’ functionality </li>
                        <li>
                          Public and private messages, posts, transactions
                        </li>
                        <li>
                          Media images, audio, voice messages, video links
                        </li>
                        <li>Subscriptions to apps, artists, producers</li>
                        <li>Sigcoin built-in for payments</li>
                        <li>
                          NFTs and native NFT exchange of digital assets, music,
                          art
                        </li>
                        <li>Works online and offline</li>
                      </div>
                    </ul>
                  </p>
                )}
                <button
                  onClick={toggleContent}
                  className="text-black mt-2 hover:text-gray-700"
                >
                  {expanded ? "[Less]" : "[Read More]"}
                </button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="border-b border-black py-[17px] dark:!border-black Azeret-mono px-6">
              <h2>
                <AccordionButton
                  className="flex justify-between"
                  onClick={() => handleOpen(3)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    BLOCKCHAIN IN YOUR POCKET
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
                  Sigchain is a deep fusion of web, finance and market
                  intelligence technologies, introducing a new class of fully
                  interoperable apps, with frictionless integration of payments
                  into the entire application space.{" "}
                </p>
                {/* 
                <p className="">
                  {" "}
                  Super-apps provide multiple services including payment and financial transaction processing, effectively becoming an all-encompassing self-contained commerce and communication platform. For customers, super-apps offer a set of core features while also giving access to independently developed ‘mini-apps’. Third-parties can develop and publish mini-apps to the network. Customers can subscribe to those they value most. Sigchain is the worlds first peer-to-peer super-app platform.{" "}
                </p> */}
                <p className="mt-5">
                  Super-apps provide multiple services including payment and
                  financial transaction processing, effectively becoming an
                  all-encompassing self-contained commerce and communication
                  platform. For customers, super-apps offer a set of core
                  features while also giving access to independently developed
                  ‘mini-apps’. Third-parties can develop and publish mini-apps
                  to the network. Customers can subscribe to those they value
                  most. Sigchain is the worlds first peer-to-peer super-app
                  platform.
                </p>

                {expandedblockchain && (
                  <p className=" mt-5 ">
                    Sigchain has redesigned client-server architecture so that
                    each user’s own device acts as a ‘server’, meaning that
                    centralised servers are no longer required for network
                    functionality and services. With serverless architecture
                    that transcends the client-server paradigm, and with no
                    arbitrary proofing mechanisms, Sigchain enables infinite
                    scaling and transaction volumes. In true peer-to-peer style
                    users themselves automatically provide the infrastructure
                    for zero-cost network expansion.
                  </p>
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
                  onClick={() => handleOpen(4)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    Messaging & media
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
                  Single-sign-on parallel internet infrastructure.{" "}
                </p>

                <p className="mt-5">
                  {" "}
                  All Sig-apps, NFTs and Sigcoin are natively integrated. The
                  digital future will be shaped by interoperable super-apps in a
                  unified application ecosystem.{" "}
                </p>
                <p className="mt-5">
                  Todays web apps today are siloed on separate servers, they
                  require heavy backend development to store data and do not
                  easily interoperate causing a fragmented, multi-password
                  experience. As Sigapps are views on to the users' own data,
                  they interoperate to create a single-sign-on, customisable,
                  super-app environment with an integrated perspective on the
                  network.
                </p>
                <p className="mt-5">
                  With no databases to manage, the platform scales for free,
                  making app development significantly faster, easier to deploy,
                  and less costly. By eliminating the need to administer user
                  accounts or servers, developers need only build the logic and
                  presentation layers.
                </p>

                {expandedblockchain && (
                  <>
                    <p className=" mt-5 ">
                      The Sigchain network separates the data layer from the
                      application layer. This separation is pivotal. Sigchain
                      apps are not connected to the account or data layers in
                      the authoritative way they are with todays existing web
                      apps. It means that, instead of many accounts and
                      passwords on many app servers, Sigchain apps share the
                      users same ID and data. SigApps natively interoperate and
                      offer the user a seamless cross-app experience.
                    </p>
                    <p className=" mt-5 ">
                      User experience is simplified and enhanced offering
                      privacy, autonomy and freedom of speech as a matter of
                      network design.
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
                  onClick={() => handleOpen(5)}
                >
                  <span
                    className="text-left font-normal text-black dark:text-black"
                    flex="1"
                    textAlign="left"
                  >
                    MONEY & TRUST
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
                  Sigcoin defines money-as-information, rather than
                  money-as-a-commodity, offering real credit for real markets
                  and a parallel economy at scale.{" "}
                </p>

                <p className="mt-5">
                  {" "}
                  History has shown us that the expansion of credit is critical
                  to the success of both developing and existing markets.
                  However, a profound conflict of interest arises when the same
                  financial instrument serves as both a medium of exchange and a
                  store of value.{" "}
                </p>
                <p className="mt-5">
                  The increasing mis-allocation of credit for the purchase of
                  assets by the owners of capital is starving production in
                  markets that need new credit to function. Sigchain is a market
                  driven mechanism that governs both the stock and the flow of
                  credit in the economy to solve credit allocation requirements.
                  As a producer credit engine, market participants themselves
                  can deploy capital power for real production.
                </p>
                <p className="mt-5">
                  Sigchain is a self-organising market system for the real
                  ‘centre’ of power, the economic periphery. By capitalising the
                  productive edge, global production can be revitalised with new
                  business emerging founded on trust, privacy and user autonomy.
                </p>

                <p className="mt-5">
                  New wealth requires the expansion of credit to expand
                  production. The Sigcoin design makes explicit the distinction
                  between redistributing existing capital and the creation of
                  new capital that markets need to operate and grow. It bridges
                  the gap between legacy banking and the future promised by new
                  credit technology.
                </p>

                <p className="mt-5">
                  Reputation-based identity emerges in a market context when
                  reputable businesses can issue personally signed coins to
                  self-capitalise their own production. As producers of real
                  assets, they establish their credibility by staking their
                  reputation when they issue their own credit instruments,
                  backing their value in exchange.
                </p>

                <p className="mt-5">
                  Beyond cryptocurrency, producer credit is the next evolution
                  in finance, solving the fundamental credit allocation problem
                  in global markets and restoring the market’s autonomy.
                </p>

                <p className="mt-5">
                  Beyond cryptocurrency, producer credit is the next evolution
                  in finance, solving the fundamental credit allocation problem
                  in global markets and restoring the market’s autonomy.
                </p>

                {expandedblockchain && (
                  <>
                    <p className=" mt-5 ">
                      A universal accounting system on a scalable ledger
                      platform.
                    </p>
                    <p className=" mt-5 ">
                      Sigchain denotes a radical transformation of distributed
                      ledger technology, granting users direct control of their
                      financial relationships, enabling secure creation,
                      trading, and settlement of digital assets without the need
                      for intermediaries. As a unique, hybrid technology
                      combining cryptographic components with producer credit,
                      Sigcoin is a new class of crypto-credit and the first
                      digital currency to account for the trade credit
                      relationship. Introducing scalable, trustful credit,
                      Sigchain offers the market an innovative way to create
                      credit liquidity within business networks.
                    </p>

                    <p className=" mt-5 ">
                      While producers can issue and extend credit to each other,
                      and settle accounts, only those who honour their credit
                      obligations will emerge as trusted liquidity providers.
                      Market participants are incentivised to build a reputable
                      credit history on the network that will afford them the
                      established trust they need to be successful. All
                      producers and consumers can determine if they want to
                      interact based on this immutable evidence.
                    </p>

                    <p className=" mt-5 ">
                      Earning reputation results in a system wide imperative to
                      authenticate through network interactions. This
                      market-based data provides validity of a persons identity
                      without their data being owned by an intermediated
                      controlling authority.
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
        </div>
      </div>
    </>
  );
}
