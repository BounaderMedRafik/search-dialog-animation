"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const SearchButton = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchString, setSearchString] = useState("");
  return (
    <>
      <div>
        <button
          onClick={() => {
            setOpenSearch(true);
          }}
        >
          <div className=" px-4 py-2 rounded-full ring-2 ring-foreground opacity-50 hover:opacity-100 duration-300 transition-all ease-in-out  flex items-center gap-2">
            <div className=" text-sm">SearchButton</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {openSearch && (
          <motion.div
            key={openSearch ? "searchisOpen" : "searchisClose"}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className=" fixed z-40 h-full w-full top-0 left-0 flex items-center justify-center  "
          >
            <div
              onClick={() => {
                setOpenSearch(false);
              }}
              className=" bg-background/60 backdrop-blur-md w-full h-full absolute z-20 "
            />

            <motion.div
              key={openSearch ? "searchisOpen" : "searchisClose"}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
              exit={{
                opacity: 0,
                y: 50,
                transition: {
                  ease: [0.5, 0, 0.75, 0],
                },
              }}
              className=" p-5 rounded-md bg-foreground text-background  relative max-w-md w-full z-30 -mt-24"
            >
              <div className="relative">
                <div className=" absolute left-0 top-1/2 -translate-y-1/2 ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  placeholder="Search..."
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                  className=" focus-visible:outline-none bg-foreground pl-8 w-full py-1 text-xl font-mono "
                  type="text"
                />
              </div>

              <AnimatePresence mode="wait">
                {searchString == "" ? null : (
                  <motion.div
                    key={searchString == "" ? "empty" : "filled"}
                    initial={{
                      minHeight: "0rem",
                      opacity: 0,
                    }}
                    animate={{
                      minHeight: "11rem",
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    }}
                    exit={{
                      minHeight: "0rem",
                      opacity: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.5, 0, 0.75, 0],
                      },
                    }}
                    className=" flex text-sm opacity-75 items-center justify-center py-3"
                  >
                    <motion.p
                      key={searchString == "" ? "empty" : "filled"}
                      initial={{
                        y: -50,
                      }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.25, 1, 0.5, 1],
                        },
                      }}
                      exit={{
                        y: -50,
                        transition: {
                          duration: 0.6,
                          ease: [0.5, 0, 0.75, 0],
                        },
                      }}
                    >
                      searching for {`"${searchString}"`}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchButton;
